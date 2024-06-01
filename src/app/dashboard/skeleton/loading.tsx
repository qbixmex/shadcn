import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {
          [1,2,3,4,5,6,7,8,9].map((n) => (
            <Card key={n}>
              <CardHeader className="flex flex-row items-start gap-2">
                <Skeleton className="rounded-full w-10 h-10" />
                <section className="flex-grow">
                  <CardTitle className="w-full mb-2">
                    <Skeleton className="w-3/4 h-5" />
                  </CardTitle>
                  <CardDescription>
                    <Skeleton className="w-full h-5 mb-2" />
                  </CardDescription>
                </section>
              </CardHeader>
              <CardFooter className="flex justify-end">
                <Skeleton className="w-24 h-10" />
              </CardFooter>
            </Card>
          ))
        }
    </section>
  );
}
