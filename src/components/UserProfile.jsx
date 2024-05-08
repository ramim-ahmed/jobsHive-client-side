import useAuth from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const { authUser, logout } = useAuth();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <div className="flex items-center space-x-2">
            <img
              className="w-12 h-12 object-cover border border-indigo-500 rounded-full"
              src={authUser?.photoURL}
              alt=""
            />
            <div>
              <h4 className="font-medium text-lg">
                Hi, {authUser?.displayName}
              </h4>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link to="/add-job-post" className="w-full">
            <DropdownMenuItem>
              <Button variant="outline" className="w-full">
                New Post Job
              </Button>
            </DropdownMenuItem>
          </Link>
          <Link to="/my-post-jobs" className="w-full">
            <DropdownMenuItem>
              <Button variant="outline" className="w-full">
                My Post Jobs
              </Button>
            </DropdownMenuItem>
          </Link>
          <Link to="/my-bids-request">
            <DropdownMenuItem>
              <Button variant="outline" className="w-full">
                My Bid Requests
              </Button>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Button
              onClick={() => logout()}
              variant="outline"
              className="w-full"
            >
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
