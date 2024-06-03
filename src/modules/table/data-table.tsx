"use client"

import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { XCircle } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

type Status = 'all' | 'pending' | 'processing' | 'failed' | 'success';

export const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [currentStatus, setCurrentStatus] = useState<Status>('all');

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <div className="w-full flex justify-between gap-3 py-4">
        <div className="relative w-[400px]">
          <Input
            placeholder="Filter names ..."
            value={(table.getColumn("clientName")?.getFilterValue() as string) ?? ""}
            onChange={(event) => {
              setCurrentStatus("all");
              table.getColumn("status")?.setFilterValue(undefined);
              table.getColumn("clientName")?.setFilterValue(event.target.value);
            }}
            className="w-full"
          />
          {
            table.getColumn("clientName")?.getFilterValue() !== undefined && (
            <XCircle
              onClick={() => {
                setCurrentStatus("all");
                table.getColumn("status")?.setFilterValue(undefined);
                table.getColumn("clientName")?.setFilterValue(undefined);
              }}
              className="text-gray-300 hover:text-gray-400 cursor-pointer absolute top-[50%] transform -translate-y-[50%] right-2"
            />
          )}
        </div>
        <Select
          value={currentStatus}
          onValueChange={(value) => {
            if (value === "all") {
              table.getColumn("status")?.setFilterValue(undefined);
              setCurrentStatus("all");
              return;
            }
            setCurrentStatus(value as Status);
            table.getColumn("status")?.setFilterValue(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status - All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="success">Success</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end gap-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  );
};
