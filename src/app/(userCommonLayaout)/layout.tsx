/* eslint-disable prettier/prettier */

import { Navbar } from "@/src/components/modules/UI/navbar";

// import { Toaster } from "react-hot-toast";


export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col ">
    <Navbar />
    <main  >
      {/* <Toaster/> */}
      {children}
    </main>
  </div>
  );
}
