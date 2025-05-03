import { Card } from "@heroui/card";
import { motion } from "framer-motion";

const UpdateProfileSkeleton = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-2xl font-bold text-center mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Update Profile
      </motion.h1>
      <Card className="p-6">
        <motion.form
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Skeleton Loader for Name */}
          <div className="animate-pulse">
            <div className="h-6 bg-default-300 rounded w-32 mb-2"></div>
            <div className="h-10 bg-default-300 rounded w-full"></div>
          </div>

          {/* Skeleton Loader for Email */}
          <div className="animate-pulse">
            <div className="h-6 bg-default-300 rounded w-32 mb-2"></div>
            <div className="h-10 bg-default-300 rounded w-full"></div>
          </div>

          {/* Skeleton Loader for Phone */}
          <div className="animate-pulse">
            <div className="h-6 bg-default-300 rounded w-32 mb-2"></div>
            <div className="h-10 bg-default-300 rounded w-full"></div>
          </div>

          {/* Skeleton Loader for Address */}
          <div className="animate-pulse">
            <div className="h-6 bg-default-300 rounded w-32 mb-2"></div>
            <div className="h-10 bg-default-300 rounded w-full"></div>
          </div>

          {/* Skeleton Loader for Role */}
          <div className="animate-pulse">
            <div className="h-6 bg-default-300 rounded w-32 mb-2"></div>
            <div className="h-10 bg-default-300 rounded w-full"></div>
          </div>

          {/* Skeleton Loader for Submit Button */}
          <div className="col-span-2 flex justify-end animate-pulse">
            <div className="h-12 bg-default-300 rounded w-40"></div>
          </div>
        </motion.form>
      </Card>
    </motion.div>
  );
};

export default UpdateProfileSkeleton;
