/* eslint-disable prettier/prettier */
import { title } from "@/src/components/primitives";

export default function AboutPage() {
  return (
   <section>
     <div className="flex flex-col items-center justify-center py-10">
      <h1 className={title()}>About</h1>
    </div>
   </section>
  );
}
