"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import { Title } from "@/modules/components";

export const CalendarComponent = () => {

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleString("es-MX", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main>
      <Title>Calendar</Title>

      <section className="flex flex-col gap-5 md:flex-row md:flew-wrap mb-5">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-fit"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-fit"
          disabled={(date) => {
            const now = new Date();
            const age = now.getFullYear() - date.getFullYear();
            return age > 18;
          }}
        />
        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDates}
          className="rounded-md border w-fit"
        />
      </section>

      <section>
        <h2 className="text-3xl font-extrabold text-stone-700 mb-1">Single Date Selected</h2>
        <p className="text-lg font-light text-stone-700">{smallDate}</p>

        <div className="my-5"></div>

        <h2 className="text-3xl font-extrabold text-stone-700 mb-1">Multiple Dates Selected</h2>
        <p className="text-lg font-light text-stone-700">
          {multipleDates?.map((date) => date.toLocaleString("es-MX", {
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric",
          })).join(", ")}
        </p>
      </section>
    </main>
  );
};
