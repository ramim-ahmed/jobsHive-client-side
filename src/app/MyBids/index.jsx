import axios from "@/axios/axios";
import Loader from "@/components/Loader";
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
export default function MyBids() {
  const { authUser } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["bids"],
    queryFn: async () =>
      await axios.get(`/bids?email=${authUser?.email}`, {
        withCredentials: true,
      }),
  });
  console.log(data);
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="px-3 my-10">
      <div className="max-w-6xl mx-auto bg-gray-50 p-10">
        <div className="px-4">
          <h1 className="text-lg font-bold">
            My Post Job Bid Requests:{" "}
            <span className="bg-indigo-500 text-white p-1 rounded-full">
              {data?.data?.data?.length || 0}
            </span>
          </h1>
        </div>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User Name</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Bid Price</TableHead>
                <TableHead>DeadLine</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.data?.map(
                ({ _id, postedJob, user, bidPrice, deadline, status }) => (
                  <TableRow key={_id}>
                    <TableCell className="font-medium">{user?.name}</TableCell>
                    <TableCell>{postedJob?.title}</TableCell>
                    <TableCell>${bidPrice}</TableCell>
                    <TableCell>
                      {new Date(deadline).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{status}</TableCell>
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
