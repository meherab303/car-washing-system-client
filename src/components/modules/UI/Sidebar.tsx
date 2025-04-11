/* eslint-disable prettier/prettier */
import { useGetUserData } from "@/src/hooks/user.hook";
import { useUser } from "@/src/context/user.provider"; 
import Link from "next/link";
import { Avatar, CircularProgress } from "@nextui-org/react";

const Sidebar = ({ userRole }: { userRole?: string }) => {
  const { user } = useUser();
  const { data: userData } = useGetUserData(user?.userEmail);

  return (
    <div className="p-4 bg-[#0b0b1e] min-h-screen text-white space-y-6 rounded-lg">
      {/* Profile Card */}
      <div className="bg-[#1e1e2f] rounded-xl p-6 flex flex-col items-center text-center relative shadow-lg">
        <div className="absolute top-2 right-2 text-pink-400 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="1.5" />
          </svg>
        </div>

        <div className="relative w-[90px] h-[90px]">
          <CircularProgress
            aria-label="User loading"
            value={100}
            showValueLabel={false}
            size="lg"
            color="primary"
            classNames={{
              svg: "w-full h-full",
              indicator: "stroke-[#5d6bff]",
            }}
          />
       <Avatar className="w-[70px] h-[70px] bg-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.121 17.804A10 10 0 1117.805 5.12M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
</Avatar>
        </div>

        <h2 className="text-lg font-bold mt-4 text-purple-300">{userData?.name }</h2>
        <p className="text-sm text-gray-400">{userData?.role}</p>
        <p className="text-xs text-gray-400">{userData?.email }</p>
        <p className="text-sm text-gray-400">{userData?.phone}</p>
      </div>

      {/* Navigation */}
      <ul className="space-y-3">
        <li>
          <Link href="/dashboard/profile" className="flex items-center gap-2 hover:text-purple-400">
            <span>👤</span> Profile
          </Link>
        </li>

        {userRole === "user" ? (
          <li>
            <Link href="/dashboard/my-bookings" className="flex items-center gap-2 hover:text-purple-400">
              <span>📘</span> My Bookings
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/dashboard/all-bookings" className="flex items-center gap-2 hover:text-purple-400">
              <span>📚</span> All Bookings
            </Link>
          </li>
        )}

        {userRole === "admin" && (
          <>
            <li>
              <Link href="/dashboard/All-users" className="flex items-center gap-2 hover:text-purple-400">
                <span>👥</span> All Users
              </Link>
            </li>
            <li>
              <Link href="/dashboard/create-service" className="flex items-center gap-2 hover:text-purple-400">
                <span>➕</span> Create Service
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
