import {
  Accordion as AccordionUI,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Item = {
  id: string;
  question: string;
  answer: string;
};

const items: Item[] = [
  {
    id: "item-1",
    question: "Are you a web Developer ?",
    answer: "Yes. I am a full stack Developer.",
  },
  {
    id: "item-2",
    question: "Are you a Designer ?",
    answer: "No. I'm not. I am a Developer.",
  },
  {
    id: "item-3",
    question: "Do you develop on NextJS ?",
    answer: "Yes. I make all my development on NextJS Framework.",
  },
  {
    id: "item-4",
    question: "Do you like electronic music ?",
    answer: "Yes. I love electronic music. I listen to it all the time.",
  },
];

export const Accordion = () => {
  return (
    <AccordionUI type="single" collapsible className="max-w-lg mx-auto">
      {items.map(({ id, question, answer }) => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger>{ question }</AccordionTrigger>
          <AccordionContent>{ answer }</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionUI>
  );
};
