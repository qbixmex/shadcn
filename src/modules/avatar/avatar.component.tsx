"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AvatarComponent = () => {
  return (
    <section className="inline-flex items-center gap-2">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/70177108?v=4" />
        <AvatarFallback>DG</AvatarFallback>
      </Avatar>
    </section>
  );
};
