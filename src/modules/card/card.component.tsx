"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Title } from "@/modules/components";
import Image from "next/image";

export const CardComponent = () => {
  return (
    <section>
      <Title className="text-center">Card</Title>
      <section className="w-[80%] mx-auto grid grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Register Now</CardTitle>
            <CardDescription>Register to receive a lot of prices.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <section>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="name" />
            </section>
            <section>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email" />
            </section>
            <section>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="password" />
            </section>
            <section>
              <Label htmlFor="password_confirm">Confirm Password</Label>
              <Input id="password_confirm" type="password" placeholder="password" />
            </section>
          </CardContent>
          <CardFooter className="w-full inline-flex justify-end gap-2">
            <Button variant="info">cancel</Button>
            <Button variant="default">register</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="mb-2">James Webb Telescope</CardTitle>
            <Image
              src="/james-webb-space-telescope.jpg"
              alt="article image"
              width={513}
              height={343}
              className="rounded-md"
            />
          </CardHeader>
          <CardContent>
            <p className="text-balance mb-2">The James Webb Space Telescope is a space telescope designed to conduct infrared astronomy.</p>
            <p className="text-balance">Its high&nbsp;resolution and high&nbsp;sensitivity instruments allow it to view objects too old, distant, or faint for the Hubble Space Telescope.</p>
          </CardContent>
        </Card>
      </section>
    </section>
  );
};
