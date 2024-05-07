import { useQuery } from "@tanstack/react-query";
import axios from "../axios/axios";
import JobItem from "./JobItem";
import Pagination from "./Pagination";
import { useState } from "react";

export default function AllJobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["jobs", currentPage],
    queryFn: async () =>
      await axios.get(`/jobs?page=${currentPage}&limit=${2}`),
  });
  const paginate = Math.ceil(data?.data?.meta?.total / 2);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
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
      {data?.data?.data?.length && (
        <Pagination
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          paginate={paginate}
        />
      )}
    </div>
  );
}
