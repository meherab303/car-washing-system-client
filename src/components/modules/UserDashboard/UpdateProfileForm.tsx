// components/UpdateProfileForm.tsx
import { Button, Card, Input } from "@heroui/react";
import { motion } from "framer-motion";
import { FiSave } from "react-icons/fi"; // Assuming the FormField component is extracted as well
import { UpdateFormField } from "./UpdateFormFiled";

type UpdateProfileFormProps = {
  register: any;
  errors: any;
  handleSubmit: any;
  onSubmit: any;
  isFormChanged: boolean;
  isPending: boolean;
};

const UpdateProfileForm = ({
  register,
  errors,
  handleSubmit,
  onSubmit,
  isFormChanged,
  isPending,
}: UpdateProfileFormProps) => (
  <motion.div
    className="max-w-3xl mx-auto p-6"
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-2xl font-bold text-center mb-4">Update Profile</h1>
    <Card className="p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        <UpdateFormField label="Name" name="body.name" register={register} errors={errors} />
        <UpdateFormField label="Email" name="body.email" register={register} errors={errors} disabled />
        <UpdateFormField label="Phone" name="body.phone" register={register} errors={errors} />
        <UpdateFormField label="Address" name="body.address" register={register} errors={errors} />
        <UpdateFormField label="Role" name="body.role" register={register} errors={errors} disabled />
        <div className="col-span-2 flex justify-end">
          <Button type="submit" disabled={!isFormChanged || isPending} className="flex items-center gap-2">
            <FiSave size={18} /> {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </Card>
  </motion.div>
);

export default UpdateProfileForm;
