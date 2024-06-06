"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Title } from "@/modules/components";

export const AlertDialogComponent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="max-w-lg mx-auto">
      <Title>Alert Dialog</Title>
      <section className="grid grid-cols-2 gap-3">
        <AlertDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        >
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => console.log("Cancel")}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => console.log("Continue")}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button
          variant="info"
          onClick={() => setDialogOpen(true)}
        >Open Dialog Manually</Button>
      </section>
    </section>
  );
};
