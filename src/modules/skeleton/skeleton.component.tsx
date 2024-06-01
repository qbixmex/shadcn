import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Title } from "../components";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const getData = async (): Promise<number[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [1,2,3,4,5,6,7,8,9];
};

export const SkeletonComponent = async () => {

  const data = await getData();

  return (
    <section className="w-[95%] mx-auto sm:text-lg">
      <Title className="text-center mb-10">Skeleton</Title>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {
          data.map((item) => (
            <Card key={item}>
              <CardHeader className="flex flex-row items-center">
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Shadcn logo"
                  width={40}
                  height={40}
                  className="rounded-full mr-2 w-10 h-10"
                />
                <section>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </section>
              </CardHeader>
              <CardFooter className="flex justify-end">
                <Button variant="info">More <ChevronRight /></Button>
              </CardFooter>
            </Card>
          ))
        }
      </section>
    </section>
  );
};
