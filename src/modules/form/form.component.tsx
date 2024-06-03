"use client";

import { Title } from "../components";

export const FormComponent = () => {
  return (
    <section>
      <Title className="text-center">Card</Title>

      <section className="w-[80%] mx-auto grid grid-cols-2 gap-8">
        <p className="text-lg text-bold text-blue-500">Your form must appear here ...</p>
      </section>
    </section>
  );
};
