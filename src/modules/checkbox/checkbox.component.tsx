"use client";

import { Checkbox } from "@/components/ui/checkbox"
import { Title } from "../components";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircleIcon } from "lucide-react";

export const CheckboxComponent = () => {

  const [ terms, setTerms ] = useState(false);

  return (
    <main className="max-w-xl mx-auto sm:text-lg">
      <Title className="text-center">Checkbox</Title>
      <section className="items-top flex space-x-2">
        <Checkbox
          id="terms"
          checked={terms}
          onCheckedChange={(value: boolean) => setTerms(value)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>

          { terms && <Badge className="w-fit inline-flex items-center gap-1" variant="success">
            <span>Accepted</span>
            <CheckCircleIcon size={15} />
          </Badge>}
        </div>
      </section>
    </main>
  );
};
