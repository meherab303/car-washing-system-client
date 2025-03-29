/* eslint-disable prettier/prettier */

import HomeAccordion from "@/src/components/modules/home/HomeAccordian";

export default function layout({
  children,
  recentServices,
}: {
  children: React.ReactNode;
  recentServices: React.ReactNode;
}) {
  return (
    <>
      {children}
      {recentServices}
      <HomeAccordion/>
    </>
  );
}
