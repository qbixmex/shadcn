"use client";

import { Title } from "../components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Food = {
  id: number;
  url: string;
  label: string;
};

const food: Food[] = [
  {
    id: 1,
    url: "/food/chocolate-cake.jpg",
    label: "Chocolate Cake"
  },
  {
    id: 2,
    url: "/food/coffee.jpg",
    label: "Coffee"
  },
  {
    id: 3,
    url: "/food/tacos.jpg",
    label: "Tacos and Jarritos Drink"
  },
  {
    id: 4,
    url: "/food/peperoni-pizza.jpg",
    label: "Peperoni Pizza"
  },
  {
    id: 5,
    url: "/food/ramen.jpg",
    label: "Ramen"
  }
];

export const CarouselComponent = () => {
  return (
    <section className="max-w-xl mx-auto sm:text-lg">
      <Title className="text-center">Carousel</Title>
      <section>
        <Carousel
          opts={{
            // dragFree: true,
            loop: true,
            active: true,
            duration: 25,
          }}
          /*=========================================
            if autoplay is true default value is 5 seconds,
            otherwise put your value in milliseconds
          ===========================================*/
          autoplay={3000} 
          // plugins={[Autoplay({ delay: 3000 })]}
        >
          <CarouselContent>
            {food.map(({id, url, label}) => (
              <CarouselItem key={id} className="md:basis-1/2 lg:1/3">
                <Image className="rounded" src={url} alt={label} width={500} height={500} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>
    </section>
  );
};
