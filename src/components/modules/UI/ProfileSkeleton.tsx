/* eslint-disable prettier/prettier */
import { Skeleton } from "@heroui/skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 animate-fadeIn">
      {/* Title + Update Button */}
      <div className="flex items-center justify-between">
        <div className="skeleton w-36 h-7 bg-default-300 rounded-md"></div>
        <div className="skeleton w-10 h-10 bg-default-300 rounded-full"></div>
      </div>

      {/* Underline */}
      <div className="w-full h-[1px] bg-default-300 mt-2"></div>

      {/* Profile Info Skeleton */}
      <div className="grid grid-cols-2 gap-y-6 mt-6">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="skeleton w-24 h-5 bg-default-300 rounded-md"></div>
            <div className="skeleton w-48 h-5 bg-default-300 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSkeleton;
