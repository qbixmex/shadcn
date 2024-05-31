"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AvatarComponent = () => {
  return (
    <main className="inline-flex items-center gap-2">
      <p className="text-lg text-stone-700 font-semibold italic">@qbixmex</p>
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/70177108?v=4" />
        <AvatarFallback>DG</AvatarFallback>
      </Avatar>
    </main>
  );
};
