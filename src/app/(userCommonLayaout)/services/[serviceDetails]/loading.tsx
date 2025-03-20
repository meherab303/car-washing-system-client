/* eslint-disable prettier/prettier */

"use client";

import { Card, CardBody, Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-5 mt-10">
        {/* Skeleton for Image */}
        <div className="w-full md:w-1/2">
          <Skeleton className="w-full h-96 rounded-lg" />
        </div>

        {/* Skeleton for Details */}
        <div className="w-full  md:w-1/2">
          <Card className="w-full h-96 max-w-4xl mx-auto flex flex-col md:flex-row shadow-lg rounded-xl overflow-hidden">
            <CardBody className="w-full p-6 flex flex-col justify-center">
              <Skeleton className="h-8 w-3/4 mb-2 rounded" /> {/* Title */}
              <Skeleton className="h-4 w-full mb-2 rounded" />{" "}
              {/* Description Line 1 */}
              <Skeleton className="h-4 w-5/6 mb-2 rounded" />{" "}
              {/* Description Line 2 */}
              <Skeleton className="h-4 w-1/2 mb-2 rounded" /> {/* Price */}
              <Skeleton className="h-4 w-1/3 mb-4 rounded" /> {/* Duration */}
              <Skeleton className="h-4 w-1/3 mb-4 rounded" />
              {/* Button Skeleton */}
              <Skeleton className="h-10 w-full rounded-lg" />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
