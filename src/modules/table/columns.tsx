"use client";

import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data";
import { ColumnDef, SortDirection } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const SortedIcon = ({ isSorted }: { isSorted: SortDirection | false }) => {
  if (isSorted === "asc") {
    return <ChevronUpIcon className="ml-2 h-4 w-4" />;
  }

  if (isSorted === "desc") {
    return <ChevronDownIcon className="ml-2 h-4 w-4" />;
  }

  return null;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "clientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left"
        >
          Client Name
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left"
        >
          Email
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left"
        >
          Status
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
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
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-left"
          >
            Amount
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      )
    },
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
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id);
                toast.info(
                  "Payment ID copied to clipboard", {
                    duration: 2000,
                    position: "top-right",
                  }
                );
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];
