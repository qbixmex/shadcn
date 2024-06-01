import { Title } from "../components";
import { StatusesBoxComponent } from "./statusesbox.component";
import { TechnologiesCombobox } from "./technologies";

export const ComboboxComponent = () => {
  return (
    <section className="min-h-[500px]">
      <Title className="text-center mb-10">Combobox</Title>
      <section className="max-w-lg mx-auto flex justify-between">
        <TechnologiesCombobox />
        <StatusesBoxComponent />
      </section>
    </section>
  );
};
