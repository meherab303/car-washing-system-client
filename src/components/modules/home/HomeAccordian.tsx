/* eslint-disable prettier/prettier */
"use client";

import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

export default function HomeAccordion() {
  
  return (
    <div className="max-w-md md:max-w-6xl mx-auto mt-10">
      <Accordion aria-label="User Information" selectionMode="multiple" >
        <AccordionItem
          key="1"
          aria-label="Chung Miller"
          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          }
          subtitle="4 unread messages"
          title="Chung Miller"
        >
          Chung Miller is a software engineer specializing in backend development. He is responsible for building scalable APIs and services for web applications. He has been with the company for over 3 years and plays a key role in maintaining the server infrastructure.
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Janelle Lenard"
          startContent={
            <Avatar
              isBordered
              color="success"
              radius="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          }
          subtitle="3 incomplete steps"
          title="Janelle Lenard"
        >
          Janelle Lenard is a front-end developer with a passion for creating beautiful and responsive user interfaces. She is currently working on improving the user experience of the companys main product by making the design more intuitive and user-friendly.
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Zoey Lang"
          startContent={
            <Avatar
              isBordered
              color="warning"
              radius="lg"
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            />
          }
          subtitle={
            <p className="flex">
              2 issues to <span className="text-primary ml-1">fix now</span>
            </p>
          }
          title="Zoey Lang"
        >
          Zoey Lang is a quality assurance engineer who ensures that all the products undergo rigorous testing before being released. She works closely with the development team to identify bugs and improve the overall performance of the products. She is currently focusing on automating test processes.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
