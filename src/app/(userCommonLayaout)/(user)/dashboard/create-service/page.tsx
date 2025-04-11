/* eslint-disable prettier/prettier */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Textarea,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { createService } from "@/src/services/createService";
import { createServiceSchema, TCreateServiceInput } from "@/src/schemas/createServiceSchema";


const CreateServicePage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateServiceInput>({
    resolver: zodResolver(createServiceSchema),
  });

  const onSubmit = async (data: TCreateServiceInput) => {
    try {
      await createService(data);
      toast.success("Service created successfully!");
      router.push("/services"); // Navigate to services list
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Card>
        <CardHeader className="text-lg font-bold">Create New Service</CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Input
              label="Service Name"
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />

            <Textarea
              label="Description"
              {...register("description")}
              isInvalid={!!errors.description}
              errorMessage={errors.description?.message}
            />

            <Input
              label="Price"
              type="number"
              {...register("price")}
              isInvalid={!!errors.price}
              errorMessage={errors.price?.message}
            />

            <Input
              label="Duration (minutes)"
              type="number"
              {...register("duration")}
              isInvalid={!!errors.duration}
              errorMessage={errors.duration?.message}
            />

            <Button color="primary" type="submit">
              Create Service
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default CreateServicePage;

