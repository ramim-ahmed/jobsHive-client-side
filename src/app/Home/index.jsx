import { useQuery } from "@tanstack/react-query";
import axios from "../../axios/axios";
import AllJobs from "../../components/AllJobs";

export default function Home() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["jobCategory"],
    queryFn: async () => await axios.get("/job-category"),
  });
  if (isError) {
    return <h1>Internal sever error</h1>;
  }
  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto px-3 pt-8">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-2">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <ul className="space-y-2 border border-opacity-15">
                {data?.data?.data?.map((category) => (
                  <li key={category._id}>
                    <button className="bg-gray-50 p-4 w-full">
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-span-10">
            <div>
              <AllJobs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
