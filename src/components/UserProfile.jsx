import useAuth from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

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
          <DropdownMenuItem>
            <Button variant="outline" className="w-full">
              New Post Job
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button variant="outline" className="w-full">
              My Post Jobs
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button variant="outline" className="w-full">
              My Bid Requests
            </Button>
          </DropdownMenuItem>
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
