"use client";

import { FC, useState } from "react";

import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Title } from "../components";

type Props = React.ComponentProps<typeof Slider>;

export const SliderComponent: FC<Readonly<Props>> = ({ className, ...props }) => {

  const [ sliderValue, setSliderValue ] = useState(50);
  const [ rangeValues, setRangeValues ] = useState([500, 1500]);

  return (
    <section className="max-w-xl mx-auto sm:text-lg min-100%">
      <Title className="text-center mb-10">Slider</Title>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-stone-700 mb-5">
          Single Slider Value: <span className="text-blue-600">{sliderValue}</span>
        </h2>
        <Slider
          className={cn("w-[100%]", className)}
          defaultValue={[sliderValue]}
          onValueChange={(value) => setSliderValue(value[0])}
          max={100}
          step={10}
          barColor="bg-emerald-600"
          {...props}
        />
      </section>

      <section>
        <div className="text-stone-700 font-semibold">
          <h2 className="text-2xl mb-2">
            Range Slider
          </h2>
          <div className="flex justify-start gap-5">
            <p className="text-xl mb-5">
              Min price: <span className="text-blue-600">{rangeValues[0]}</span>
            </p>
            <span>|</span>
            <p className="text-xl mb-5">
              Max price: <span className="text-blue-600">{rangeValues[1]}</span>
            </p>
          </div>
        </div>

        <Slider
          className={cn("w-[100%]", className)}
          defaultValue={rangeValues}
          onValueChange={setRangeValues}
          max={2000}
          step={100}
          {...props}
          barColor="bg-blue-600"
        />
      </section>
    </section>
  );
};
