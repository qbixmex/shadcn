import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const Tab3 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lorem Ipsum dolor</CardTitle>
        <CardDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore inventore, fugiat sint ex ut dolores sapiente unde blanditiis quia ipsa nulla quod facere eius similique voluptates. Dolores ipsa mollitia labore!</p>
      </CardContent>
    </Card>
  );
};
