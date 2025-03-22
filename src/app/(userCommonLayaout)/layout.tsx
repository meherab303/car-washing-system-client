/* eslint-disable prettier/prettier */

import Footer from "@/src/components/modules/UI/Footer";
import { Navbar } from "@/src/components/modules/UI/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col ">
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
