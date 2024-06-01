"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import { Title } from "../components";
import { useState } from "react";

export const InputOTPComponent = () => {

  const [value, setValue] = useState("");

  return (
    <section className="max-w-xl mx-auto sm:text-lg">
      <Title className="text-center mb-10">Input OTP</Title>
      <section className="inline-flex justify-center w-full mb-10">
        <InputOTP
          maxLength={10}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={6} />
            <InputOTPSlot index={7} />
            <InputOTPSlot index={8} />
            <InputOTPSlot index={9} />
          </InputOTPGroup>
        </InputOTP>

      </section>
      <section className="text-center">
        <h2 className="text-3xl text-slate-800 font-bold mb-2">Captured Value</h2>
        <p className="text-sky-500">{value}</p>
      </section>
    </section>
  );
};
