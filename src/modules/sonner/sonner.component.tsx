"use client";

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Title } from "../components";

export const SonnerComponent = () => {

  return (
    <section className="max-w-xl mx-auto sm:text-lg min-100%">
      <Title className="text-center mb-10">Sonner</Title>

      <section className="flex justify-center gap-3">
        <Button
          variant="secondary"
          onClick={() =>
            toast("Event has been created", {
              duration: 2000,
              position: "top-right",
              description: `${new Date().toLocaleDateString("es-MX", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}`,
              action: {
                label: "Dismiss",
                onClick: () => console.log("Dismissed"),
              },
            })
          }
        >
          Default
        </Button>

        <Button
          variant="success"
          onClick={() =>
            toast.success("Event has been created", {
              duration: 2000,
              position: "top-right",
              className: "bg-green-500 text-white",
              description: `${new Date().toLocaleDateString("es-MX", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}`,
              action: {
                label: "Dismiss",
                onClick: () => console.log("Dismissed"),
              },
            })
          }
        >
          Success
        </Button>
      </section>
    </section>
  );
};
