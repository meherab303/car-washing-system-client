/* eslint-disable prettier/prettier */
"use client"
import Link from "next/link";
import { Button } from "@heroui/react";

import Container from "@/src/components/modules/UI/container";
import CardSkeleton from "@/src/components/modules/UI/CardSkeleton";


export default  function RecentService() {
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
        {[...Array(9)].map((_, index) => (
         <CardSkeleton key={index}/>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
}