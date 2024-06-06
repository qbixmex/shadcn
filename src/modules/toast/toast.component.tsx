"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Title } from "../components";
import { ToastAction } from "@/components/ui/toast";

export const ToastComponent = () => {

  const { toast } = useToast();

  return (
    <section className="max-w-xl mx-auto sm:text-lg min-100%">
      <Title className="text-center mb-10">Toast</Title>

      <section className="flex flex-wrap justify-center gap-3">
        <Button
          variant="default"
          onClick={() => {
            toast({
              description: "Your message has been sent.",
            })
          }}
        >
          Simple Toast
        </Button>
        <Button
          variant="default"
          onClick={() => {
            toast({
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            })
          }}
        >
          Toast with Title
        </Button>

        <Button
          variant="default"
          onClick={() => {
            toast({
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
          }}
        >
          Toast with action
        </Button>

        <Button
          variant="secondary"
          onClick={() => {
            toast({
              variant: "secondary",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            })
          }}
        >
          Toast Secondary
        </Button>

        <Button
          variant="info"
          onClick={() => {
            toast({
              variant: "info",
              title: "This is an info.",
              description: "You must do this for ...",
            })
          }}
        >
          Toast Info
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            toast({
              variant: "primary",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            })
          }}
        >
          Toast Primary
        </Button>

        <Button
          variant="success"
          onClick={() => {
            toast({
              variant: "success",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            })
          }}
        >
          Toast Success
        </Button>

        <Button
          variant="warning"
          onClick={() => {
            toast({
              variant: "warning",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            })
          }}
        >
          Toast Warning
        </Button>

        <Button
          variant="destructive"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            })
          }}
        >
          Toast Destructive
        </Button>
      </section>
    </section>
  );
};
