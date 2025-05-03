import { TGetUser } from "@/src/types/getUserType";
import React from "react";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";

const ProfileForm = ({ userData }: { userData: TGetUser }) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-default-500">My Profile</h1>

        <Link href="/dashboard/update-profile">
          <button className="shadow-md transition-all hover:scale-110 active:scale-95">
            <FiEdit size={20} className="text-default-600" />
          </button>
        </Link>
      </div>

      {/* Underline */}
      <div className="w-full h-[1px] bg-gray-300 mt-2"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 mt-6">
        {[
          { label: "Name", value: userData?.name },
          { label: "Email", value: userData?.email },
          { label: "Phone", value: userData?.phone },
          { label: "Address", value: userData?.address },
          { label: "Role", value: userData?.role },
          {
            label: "Created At",
            value: userData?.createdAt
              ? new Date(userData.createdAt).toLocaleString()
              : "N/A",
          },
        ].map((item, index) => (
          <div key={index}>
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-lg font-medium">{item.value}</p>
          </div>
        ))}

        <div>
          <p className="text-sm text-gray-500">Updated At</p>
          <p className="text-lg font-medium">
            {new Date(userData.updatedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
