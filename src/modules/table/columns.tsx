"use client";

import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variant = {
        success: "success",
        failed: "destructive",
        pending: "warning",
        processing: "primary",
      }[status] ?? ("default") as any;

      return (
        <Badge variant={variant} capitalize>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <p className="text-center">Amount</p>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
 
      return (
        <div className={`text-center font-medium text-${(amount < 10) ? "red" : (amount > 50) ? "green" : "blue"}-700`}>
          {formatted}
        </div>
      );
    },
  },
];
