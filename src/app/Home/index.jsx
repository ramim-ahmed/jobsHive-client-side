import { useQuery } from "@tanstack/react-query";
import axios from "../../axios/axios";
import AllJobs from "../../components/AllJobs";
import { Button } from "@/components/ui/button";

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
      <div className="max-w-6xl mx-auto px-3 pt-4">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-3">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <ul className="space-y-2 border border-opacity-15">
                <li>
                  <Button className="w-full bg-[#6366F1] rounded-none flex justify-start text-left border-none">
                    All Category
                  </Button>
                </li>
                {data?.data?.data?.map((category) => (
                  <li key={category._id}>
                    <Button
                      variant="outline"
                      className="w-full flex justify-start border-none"
                    >
                      {category.title}
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-span-9">
            <div>
              <AllJobs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
