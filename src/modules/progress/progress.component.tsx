"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress"
import { Title } from "../components";
import { cn } from "@/lib/utils";

export const ProgressComponent = () => {

  const [ progress, setProgress ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval)
    };
  }, [])

  return (
    <section className="max-w-xl mx-auto sm:text-lg">
      <Title className="text-center mb-10">Input OTP</Title>
      
      <section className="inline-flex justify-center w-full mb-10">
        <Progress value={progress} barColor={cn({
          "bg-red-500": progress < 25,
          "bg-orange-500": progress >= 25 && progress < 50,
          "bg-amber-500": progress >= 50 && progress < 75,
          "bg-green-500": progress >= 75,
        })} />
      </section>
    </section>
  );
};
