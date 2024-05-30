"use client";

import { Loader2, XCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const ButtonComponent = () => {
  return (
    <div className="grid grid-cols-7 gap-2">
      <Button>default</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="success" onClick={() => console.log('Clicked')}>success</Button>
      <Button variant="info">info</Button>
      <Button variant="warning">warning</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button
        variant="destructive"
        className="inline-flex gap-1"
      >
        <XCircleIcon size={18} />
        <span>destructive</span>
      </Button>
      <Button disabled capitalize>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        saving
      </Button>
    </div>
  );
};
