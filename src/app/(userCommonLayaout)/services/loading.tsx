/* eslint-disable prettier/prettier */

import CardSkeleton from "@/src/components/modules/UI/CardSkeleton";
import Container from "@/src/components/modules/UI/container";

export default async function ServiceSkeleton() {
  return (
    <Container>
      <div>
        <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
          {[...Array(9)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}
