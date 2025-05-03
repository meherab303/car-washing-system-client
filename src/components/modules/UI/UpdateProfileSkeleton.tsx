import { Card } from "@heroui/card";

const UpdateProfileSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4 opacity-80">
        Update Profile
      </h1>
      <Card className="p-6">
        <form className="grid grid-cols-2 gap-4 opacity-80">
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
        </form>
      </Card>
    </div>
  );
};

export default UpdateProfileSkeleton;
