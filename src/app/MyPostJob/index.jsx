import axios from "@/axios/axios";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
export default function MyPostJobs() {
  const { authUser } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => await axios.get(`/jobs?email=${authUser?.email}`),
  });
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  console.log(data);
  return (
    <div className="px-3 my-10">
      <div className="max-w-6xl mx-auto bg-gray-50 p-10">
        <div className="px-4 flex justify-between items-center">
          <h1 className="text-lg font-bold border-b">My Post Job Lists</h1>
          <Link to="/add-job-post">
            <Button variant="outline">New Job Post</Button>
          </Link>
        </div>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Descriptin</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Min Price</TableHead>
                <TableHead>Max Price</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.data?.map(
                ({
                  _id,
                  title,
                  description,
                  minPrice,
                  maxPrice,
                  deadline,
                  category,
                }) => (
                  <TableRow key={_id}>
                    <TableCell className="font-medium">{title}</TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell>{category?.title}</TableCell>
                    <TableCell>
                      {new Date(deadline).toLocaleDateString()}
                    </TableCell>
                    <TableCell>${minPrice}</TableCell>
                    <TableCell>${maxPrice}</TableCell>
                    <TableCell>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                        />
                      </svg>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
