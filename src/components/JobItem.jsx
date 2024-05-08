/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import useAuth from "@/hooks/useAuth";
import DateSelect from "./DateSelect";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "@/axios/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function JobItem({ item }) {
  const { buyer, deadline, category, title, description, maxPrice, minPrice } =
    item || {};
  const { name, avatar } = buyer || {};
  const bidInputRef = useRef();
  const commentInputRef = useRef();
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const [date, setDate] = useState();
  const { mutateAsync: placeNewBid } = useMutation({
    mutationFn: async (data) => await axios.post("/bids/create-new", data),
  });

  const handlePlaceBid = async (e) => {
    e.preventDefault();
    if (!authUser) {
      return navigate("/login");
    }
    const data = {
      buyer: {
        name: buyer?.name,
        email: buyer?.email,
      },
      user: {
        name: authUser?.displayName,
        email: authUser?.email,
      },
      bidPrice: bidInputRef.current.value,
      deadline: date,
      comment: commentInputRef.current.value,
    };
    try {
      await placeNewBid(data);
      toast.success("Bid Requested Successfully!!");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="border-b border-opacity-15">
      <div className=" bg-gray-50 bg-opacity-15 p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 object-cover rounded-full border border-indigo-500"
                src={avatar}
                alt=""
              />
              <div>
                <div className="flex items-center space-x-1">
                  <h6 className="text-xl font-medium">{name}</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p>1 hour ago</p>
              </div>
            </div>
          </div>
          <div className="space-x-3">
            <button className="bg-indigo-500 text-sm text-white px-5 py-1 rounded-3xl">
              {category?.title}
            </button>
            <button className="bg-indigo-800 text-sm text-white px-5 py-1 rounded-3xl">
              New
            </button>
          </div>
        </div>
        <div className="mt-2 space-y-1">
          <h1 className="text-xl font-medium">{title}</h1>
          <p>{description}</p>
          <p>
            Range: ${minPrice} - ${maxPrice}
          </p>
          <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
        </div>
        <div className="mt-4">
          <Dialog>
            <DialogTrigger>
              <button
                disabled={buyer?.email === authUser?.email ? true : false}
                className={`bg-indigo-500 text-sm text-white px-5 py-1 rounded-3xl ${
                  buyer?.email === authUser?.email ? "cursor-not-allowed" : ""
                }`}
              >
                {buyer?.email === authUser?.email
                  ? "Not Permitted"
                  : "Bid Request"}
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  <form onSubmit={handlePlaceBid} className="space-y-4">
                    <div>
                      <Input
                        readOnly
                        type="text"
                        defaultValue={authUser?.displayName}
                      />
                    </div>
                    <div>
                      <Input
                        readOnly
                        type="email"
                        defaultValue={authUser?.email}
                      />
                    </div>
                    <div>
                      <Input
                        ref={bidInputRef}
                        type="number"
                        placeholder="bid amount"
                      />
                    </div>
                    <div>
                      <DateSelect
                        date={date}
                        setDate={setDate}
                        title={"Pick a Date when completed this job"}
                      />
                    </div>
                    <div>
                      <Input
                        ref={commentInputRef}
                        type="text"
                        placeholder="comment"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Place Now
                    </Button>
                  </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
