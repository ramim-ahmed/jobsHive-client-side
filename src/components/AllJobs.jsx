import { useQuery } from "@tanstack/react-query";
import axios from "../axios/axios";
import JobItem from "./JobItem";

export default function AllJobs() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => await axios.get("/jobs"),
  });
  if (isError) {
    return <h1>Internal Server Error</h1>;
  }
  return (
    <div className="border border-opacity-15">
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        data?.data?.data?.map((item) => <JobItem item={item} key={item._id} />)
      )}
    </div>
  );
}
