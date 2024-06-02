import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Title } from "../components";
import { payments } from "@/data";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const fetchData = async () => {
  return payments;
};

export const DataTableComponent = async () => {

  const data = await fetchData();

  return (
    <section className="w-full sm:text-lg">
      <Title className="text-center mb-10">Table</Title>

      <DataTable columns={columns} data={data} />
    </section>
  );
};
