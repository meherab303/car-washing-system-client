/* eslint-disable prettier/prettier */
"use client"
import { useEffect, useState } from "react";

import { useUser } from "@/src/context/user.provider"; 
import envConfig from "@/src/config/envConfig";
import { getToken } from "@/src/utils/getToken";

import { motion } from "framer-motion";

import { FiEdit } from "react-icons/fi";
import ProfileSkeleton from "@/src/components/modules/UI/ProfileSkeleton";
import Link from "next/link";

const ProfilePage = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState<any>(null); 

  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
       const token=await getToken()

        const res = await fetch(`${envConfig.baseApi}/users/getMe`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
             Authorization:`${token}`
          },
          credentials: "include",
        });

       console.log(res,"rsersrsrs")
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
      
        setUserData(data.data); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user?.userEmail) {
      fetchUserData(); 
    }
  }, [user?.userEmail]);

  if (!userData) {
    return (
      <div >
        <ProfileSkeleton/>
      </div>
    );
  }

  return (
    <motion.div 
    className="max-w-3xl mx-auto p-6"
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Title + Update Button */}
    <div className="flex items-center justify-between">
      <motion.h1 
        className="text-3xl font-bold text-default-500"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Profile
      </motion.h1>

      {/* Update Profile Button (Icon Only) */}
      <Link href="/dashboard/update-profile">
      <motion.button
        className="shadow-md transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiEdit size={20} className="text-default-600" />
      </motion.button>
    </Link>
    </div>

    {/* Underline */}
    <motion.div 
      className="w-full h-[1px] bg-gray-300 mt-2"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    ></motion.div>

    {/* Profile Info */}
    <div className="grid grid-cols-2 gap-y-6 mt-6">
      {[
        { label: "Name", value: userData.name },
        { label: "Email", value: userData.email },
        { label: "Phone", value: userData.phone },
        { label: "Address", value: userData.address },
        { label: "Role", value: userData.role },
        { label: "Created At", value: new Date(userData.createdAt).toLocaleString() }
      ].map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="text-lg font-medium">{item.value}</p>
        </motion.div>
      ))}

      {/* Updated At */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <p className="text-sm text-gray-500">Updated At</p>
        <p className="text-lg font-medium">
          {new Date(userData.updatedAt).toLocaleString()}
        </p>
      </motion.div>
    </div>
  </motion.div>)
};

export default ProfilePage;
