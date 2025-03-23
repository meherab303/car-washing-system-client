"use client"

import { useUser } from "@/src/context/user.provider"; 
import { useEffect, useState } from "react";
import envConfig from "@/src/config/envConfig";

const ProfilePage = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState<any>(null); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`${envConfig.baseApi}/users/getMe`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include", // To include cookies for authentication
        });
        console.log('Response Status:', res);
        if (!res) {
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
        console.log(data,"dataaaaaaaassspppasbd")
        setUserData(data.data);  // Store the fetched user data in state
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user?.userEmail) {
      fetchUserData();  // Fetch data when user email is available
    }
  }, [user?.userEmail]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>{userData.name}'s Profile</h1>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Address: {userData.address}</p>
      <p>Role: {userData.role}</p>
      <p>Created At: {new Date(userData.createdAt).toLocaleString()}</p>
      <p>Updated At: {new Date(userData.updatedAt).toLocaleString()}</p>
    </div>
  );
};

export default ProfilePage;
