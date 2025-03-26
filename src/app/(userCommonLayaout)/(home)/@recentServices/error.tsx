/* eslint-disable prettier/prettier */
"use client";

import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md p-6 text-center shadow-lg">
        <CardBody>
          <h2 className="text-2xl font-semibold text-red-600">
            Oops! Something went wrong
          </h2>
          <p className="mt-2 text-gray-600">{error.message}</p>
          <Button
            className="mt-4 text-white bg-red-500 hover:bg-red-600 transition"
            onPress={reset}
          >
            Try Again
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
