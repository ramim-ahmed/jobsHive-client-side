import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DateSelect from "@/components/DateSelect";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/axios/axios";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
export default function AddJob() {
  const { authUser } = useAuth();
  const [date, setDate] = useState();
  const [category, setCategory] = useState("");
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const minPriceInputRef = useRef();
  const maxPriceInputRef = useRef();
  const { mutateAsync: addNewPostJob } = useMutation({
    mutationFn: async (data) => await axios.post("/jobs/create-new", data),
  });
  const { data, isLoading } = useQuery({
    queryKey: ["job-category"],
    queryFn: async () => await axios.get("/job-category"),
  });

  const jobCategory = data?.data?.data?.map((category) => (
    <SelectItem key={category._id} value={category._id}>
      {category?.title}
    </SelectItem>
  ));

  const handleNewPostJob = async (e) => {
    e.preventDefault();
    const data = {
      buyer: {
        name: authUser?.displayName,
        email: authUser?.email,
        avatar: authUser?.photoURL,
      },
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      category,
      deadline: date,
      maxPrice: maxPriceInputRef.current.value,
      minPrice: minPriceInputRef.current.value,
    };
    try {
      await addNewPostJob(data);
      toast.success("Job Posted Successfully!!");
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="my-10">
      <div className="max-w-6xl p-10 mx-auto  bg-gray-50">
        <div>
          <div>
            <h1 className="text-xl font-semibold text-center">Post New Job</h1>
          </div>
          <form onSubmit={handleNewPostJob} className="space-y-3 mt-5">
            <div>
              <Input
                ref={titleInputRef}
                type="text"
                placeholder="Enter Job Title"
              />
            </div>
            <div>
              <Textarea
                ref={descriptionInputRef}
                type="text"
                placeholder="Enter Job Desription"
              />
            </div>
            <div>
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Job Category" />
                </SelectTrigger>
                <SelectContent>
                  {isLoading ? <h1>loading</h1> : jobCategory}
                </SelectContent>
              </Select>
            </div>
            <div>
              <DateSelect
                date={date}
                setDate={setDate}
                title={"Pick Job DeadLine Date"}
              />
            </div>
            <div className="flex items-center space-x-8">
              <Input
                ref={minPriceInputRef}
                placeholder="$ Min Price"
                type="number"
              />
              <Input
                ref={maxPriceInputRef}
                placeholder="$ Max Price"
                type="number"
              />
            </div>
            <Button type="submit" className="w-full">
              Post Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
