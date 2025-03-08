/* eslint-disable prettier/prettier */
'use client'
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const SeeAll = () => {
    return (
        <>
            <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/services">See All</Link>
        </Button>
        </div>
        </>
    );
};

export default SeeAll;