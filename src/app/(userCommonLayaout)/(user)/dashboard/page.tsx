/* eslint-disable prettier/prettier */
"use client";

import { useUser } from "@/src/context/user.provider";
import ProfileSkeleton from "@/src/components/modules/UI/ProfileSkeleton";
import { useGetUserData } from "@/src/hooks/user.hook";
import ProfileForm from "@/src/components/modules/UserDashboard/ProfileForm";

const UserDashboard = () => {
  const { user } = useUser();
  const { data: userData } = useGetUserData(user?.userEmail);

  if (!userData) {
    return (
      <div>
        <ProfileSkeleton />
      </div>
    );
  }

  return <ProfileForm userData={userData} />;
};

export default UserDashboard;
