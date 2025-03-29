import { TGetUser } from '@/src/types/getUserType';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { motion } from "framer-motion";
import Link from 'next/link';

const ProfileForm = ({ userData }: { userData: TGetUser }) => {
  return (
    <motion.div 
      className="max-w-3xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        <motion.h1 
          className="text-3xl font-bold text-default-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Profile
        </motion.h1>
    
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
    
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 mt-6">
        {[
          { label: "Name", value: userData?.name },
          { label: "Email", value: userData?.email },
          { label: "Phone", value: userData?.phone },
          { label: "Address", value: userData?.address },
          { label: "Role", value: userData?.role },
          { label: "Created At", value: userData?.createdAt ? new Date(userData.createdAt).toLocaleString() : "N/A" }
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
    </motion.div>
  );
};

export default ProfileForm;
