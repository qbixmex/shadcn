import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Title } from "../components";
import { Tab1, Tab2, Tab3 } from ".";

export const TabsComponent = () => {
  return (
    <section className="max-w-xl mx-auto sm:text-lg min-100%">
      <Title className="text-center mb-10">Tabs</Title>
      <section className="flex justify-center">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Register</TabsTrigger>
            <TabsTrigger value="card">Card</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Tab1 />
          </TabsContent>
          <TabsContent value="password">
            <Tab2 />
          </TabsContent>
          <TabsContent value="card">
            <Tab3/>
          </TabsContent>
        </Tabs>
      </section>
    </section>
  );
};
