import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const Tab2 = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Create a new account here.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" autoComplete="off" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="your_email@domain.com" autoComplete="off" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Put your secret password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password_confirmation">Confirm Password</Label>
          <Input id="password_confirmation" type="password" placeholder="Repeat your secret password" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Register</Button>
      </CardFooter>
    </Card>
  );
};
