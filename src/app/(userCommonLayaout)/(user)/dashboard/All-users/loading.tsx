"use client";

import { Spinner } from "@nextui-org/react"; // Using NextUI Spinner
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-white to-gray-100 text-center">
      <div className="mb-4 animate-pulse">
        <h1 className="text-2xl font-semibold text-primary">Loading users...</h1>
        <p className="text-sm text-gray-500">Please wait a moment</p>
      </div>

      <Spinner size="lg" color="primary" labelColor="primary" />
    </div>
  );
};

export default Loading;
