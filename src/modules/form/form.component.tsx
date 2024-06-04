"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Title } from "../components";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2).max(10),
  email: z.string().email(),
  password: z.string().min(6).max(20),
  passwordConfirmation: z.string().min(6).max(20),
}).refine(data => data.password === data.passwordConfirmation, {
  message: "Password Confirmation does't match !",
  path: ["passwordConfirmation"],
});

export const FormComponent = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.table(values);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  return (
    <>
      <Title className="text-center">Form</Title>

      <section className="w-[80%] mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        icon={
                          showPassword
                            ? <EyeIcon className="text-gray-300 cursor-pointer" onClick={() => setShowPassword(false)} />
                            : <EyeOffIcon className="text-gray-300 cursor-pointer" onClick={() => setShowPassword(true)} />
                        }
                        autoComplete="off"
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password Confirmation</FormLabel>
                    <FormControl>
                      <Input
                        icon={
                          showPasswordConfirmation
                            ? <EyeIcon className="text-gray-300 cursor-pointer" onClick={() => setShowPasswordConfirmation(false)} />
                            : <EyeOffIcon className="text-gray-300 cursor-pointer" onClick={() => setShowPasswordConfirmation(true)} />
                        }
                        autoComplete="off"
                        type={showPasswordConfirmation ? "text" : "password"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="text-right md:text-right">
              <Button type="submit" variant="secondary" className="w-full md:w-fit">Submit</Button>
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};
