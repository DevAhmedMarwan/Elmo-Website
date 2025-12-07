"use client";
import React, { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ClientsCombobox from "./ClientsCombobox";
import AddNewClients from "./AddNewClients";
import { Link } from "react-router";

const DataTableUser = ({ title }) => {
  const data = useMemo(
    () => [
      {
        id: "1",
        role: "Admin",
        status: "Active",
        name: "Mohamed",
        email: "ken99@example.com",
      },
      {
        id: "2",
        role: "Admin",
        status: "Active",
        name: "Ahmed",
        email: "ahmed@example.com",
      },
      {
        id: "3",
        role: "Admin",
        status: "Active",
        name: "Omar",
        email: "omar@example.com",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            className={
              "border-[oklch(83.98%_.195_124.9)] dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-secondary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
            }
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            className={
              "border-[oklch(83.98%_.195_124.9)] dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-secondary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
            }
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
        ),
      },
      {
        accessorKey: "name",
        header: () => (
          <div className="bg-[oklch(22.37%_.0486_157.09)] text-white font-bold text-start">
            Information
          </div>
        ),
        cell: ({ row }) => {
          const name = row.getValue("name");
          const avatarUrl =
            "https://booking.testingelmo.com/_next/static/media/avatar.636d59fa.svg";

          return (
            <div className="flex items-center gap-3">
              <img
                src={avatarUrl}
                alt={name}
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <div className="flex flex-col">
                <span className="font-medium capitalize">{name}</span>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "email",
        header: ({ column }) => (
          <div className="bg-[oklch(22.37%_.0486_157.09)] text-white font-bold text-start">
            <Button
              variant="ghost"
              className="text-white hover:bg-transparent hover:text-white"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Email
            </Button>
          </div>
        ),
        cell: ({ row }) => (
          <div className="text-gray-800">{row.getValue("email")}</div>
        ),
      },
      {
        accessorKey: "role",
        header: () => (
          <div className="bg-[oklch(22.37%_.0486_157.09)] text-white font-bold text-start">
            Role
          </div>
        ),
        cell: ({ row }) => (
          <div className="font-medium">{row.getValue("role")}</div>
        ),
      },
      {
        accessorKey: "status",
        header: () => (
          <div className="bg-[oklch(22.37%_.0486_157.09)] text-white font-bold text-start">
            Status
          </div>
        ),
        cell: ({ row }) => (
          <div className="font-medium text-green-600">
            {row.getValue("status")}
          </div>
        ),
      },
      {
        id: "actions",
        cell: () => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className={
                  "inline-flex items-center cursor-pointer whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-8 gap-1.5 w-full justify-start px-3 py-2 text-sm hover:bg-gray-50 text-black hover:text-red-700"
                }
              >
                {" "}
                <span className="lucide lucide-trash2 lucide-trash-2 mr-2 h-4 w-4">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-pencil-icon lucide-pencil"
                  >
                    {" "}
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />{" "}
                    <path d="m15 5 4 4" />{" "}
                  </svg>{" "}
                </span>{" "}
                Edit{" "}
              </DropdownMenuItem>
              <DropdownMenuItem
                className={
                  "inline-flex items-center cursor-pointer whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-red-600 h-8 gap-1.5 w-full justify-start px-3 py-2 text-sm hover:bg-gray-50"
                }
              >
                {" "}
                <span className="lucide lucide-trash2 lucide-trash-2 mr-2 h-4 w-4">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash-icon lucide-trash"
                  >
                    {" "}
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />{" "}
                    <path d="M3 6h18" />{" "}
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
                  </svg>{" "}
                </span>{" "}
                Delete{" "}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    []
  );

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, columnFilters, columnVisibility, rowSelection },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
  });

  const [show, setShow] = useState(false);
    const [typeFilter1, setTypeFilter1] = useState([]);
    const [typeFilter2, setTypeFilter2] = useState([]);
  

  return (
    <div>
      {/* ✅ Filter */}
      <div className="flex items-center py-4 justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex">
            <Input
              placeholder={title}
              value={table.getColumn("email")?.getFilterValue() ?? ""}
              onChange={(e) =>
                table.getColumn("email")?.setFilterValue(e.target.value)
              }
              className="w-[400px] bg-muted-foreground/6 border-input rounded-md border px-3 py-2 text-base focus-visible:border-[#07391C]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table.getAllColumns().map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  className="capitalize"
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center">
          <div className="!mr-[20px] ">
            <button
              className="cursor-pointer text-lg text-red-600 font-bold"
              onClick={() => {
                setTypeFilter1([]);
                setTypeFilter2([]);
              }}
            >
              Reset Filters
            </button>
          </div>
          <div className="flex gap-4">
            <ClientsCombobox
              title2={"Role"}
              title3={"Admin"}
              title4={"Super Admin"}
              value={typeFilter1}
              onChange={setTypeFilter1}
            />
            <ClientsCombobox
              title2={"Status"}
              title3={"Active"}
              title4={"Inactive"}
              value={typeFilter2}
              onChange={setTypeFilter2}
            />
          </div>
          <Link to="/CreateUser" onClick={() => setShow(true)} className="">
            <AddNewClients title={"Add New User"} />
          </Link>
        </div>
      </div>

      {/* ✅ Table */}
      <div className="overflow-hidden rounded-md border h-[560px] mt-10">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="bg-[oklch(22.37%_.0486_157.09)] text-white text-center font-bold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
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
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ✅ Pagination Controls */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DataTableUser;
