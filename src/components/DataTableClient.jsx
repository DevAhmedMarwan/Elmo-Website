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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoreHorizontal, ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
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

const DataTableClient = ({ title }) => {
  const [typeFilter, setTypeFilter] = useState([]);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const data = useMemo(
    () => [
      {
        id: "1",
        PhoneNumber: "0545362873",
        Types: "مزعج",
        name: "Mohamed",
        email: "ken99@example.com",
      },
      {
        id: "2",
        PhoneNumber: "0545362873",
        Types: "خاص",
        name: "Ahmed",
        email: "ahmed@example.com",
      },
      {
        id: "3",
        PhoneNumber: "0545362873",
        Types: "مزعج",
        name: "Marwanhoo",
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
            Name
          </div>
        ),
        cell: ({ row }) => {
          const name = row.getValue("name");
          return (
            <div className="flex items-center gap-3">
              <span className="font-medium capitalize">{name}</span>
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
        accessorKey: "PhoneNumber",
        header: () => (
          <div className="bg-[oklch(22.37%_.0486_157.09)] text-white font-bold text-start">
            Phone Number
          </div>
        ),
        cell: ({ row }) => (
          <div className="font-medium">{row.getValue("PhoneNumber")}</div>
        ),
      },
      {
        accessorKey: "Types",
        header: () => (
          <div className="bg-[oklch(22.37%_.0486_157.09)] text-white font-bold text-start">
            Types
          </div>
        ),
        cell: ({ row }) => (
          <div className="font-medium text-green-600">
            {row.getValue("Types")}
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
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center cursor-pointer whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-black h-8 gap-1.5 w-full justify-start px-3 py-2 text-sm hover:bg-gray-50"
                >
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
                  Edit
                </button>{" "}
              </DropdownMenuItem>
              <DropdownMenuItem
                className={
                  "inline-flex items-center cursor-pointer whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-red-600 h-8 gap-1.5 w-full justify-start px-3 py-2 text-sm hover:bg-gray-50"
                }
              >
                <button
                  onClick={() => setOpen2(true)}
                  class="inline-flex items-center cursor-pointer whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-8 gap-1.5 w-full justify-start px-3 py-2 text-sm hover:bg-gray-50 text-red-600 hover:text-red-700"
                >
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
                  </span>
                  Delete
                </button>
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
                setTypeFilter([]);
                // alert("Reset Filters");
              }}
            >
              Reset Filters
            </button>
          </div>
          <div className="flex gap-4">
            <ClientsCombobox
              title2="Type"
              title3="مزعج"
              title4="خاص"
              value={typeFilter}
              onChange={setTypeFilter}
            />
          </div>
          <Link to="/CreateClient" onClick={() => setShow(true)} className="">
            <AddNewClients title={"Add New Client"} />
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

      {/* ✅ Edit New Client Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[700px] h-[332px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              <div className="text-muted-foreground border-b border-[#E2E8F0] inline-flex h-9 w-fit items-center justify-center">
                <button className="data-[state=active]:bg-background capitalize dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-full flex-1 items-center justify-center gap-1.5 border border-transparent border-b-2 data-[state=active]:border-b-primary pb-3 px-4 pt-2 text-md font-medium whitespace-nowrap transition-all duration-300 focus-visible:ring-[3px] focus-visible:outline-1 cursor-pointer disabled:pointer-events-none">
                  information
                </button>
                <button className="data-[state=active]:bg-background capitalize dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-full flex-1 items-center justify-center gap-1.5 border border-transparent border-b-2 data-[state=active]:border-b-primary pb-3 px-4 pt-2 text-md font-medium whitespace-nowrap transition-all duration-300 focus-visible:ring-[3px] focus-visible:outline-1 cursor-pointer disabled:pointer-events-none">
                  Contact
                </button>
                <button className="data-[state=active]:bg-background capitalize dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-full flex-1 items-center justify-center gap-1.5 border border-transparent border-b-2 data-[state=active]:border-b-primary pb-3 px-4 pt-2 text-md font-medium whitespace-nowrap transition-all duration-300 focus-visible:ring-[3px] focus-visible:outline-1 cursor-pointer disabled:pointer-events-none">
                  Address
                </button>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 outline-none md:text-xl text-base">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="font-bold mb-1">Name</h2>
                <p className="text-muted-foreground">Mohamed</p>
              </div>
              <div>
                <h2 className="font-bold mb-1">Type</h2>
                <p className="text-muted-foreground">مزعج</p>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-1">Note</h2>
              <p className="text-muted-foreground flex items-center gap-1">
                Test
              </p>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={() => setOpen2(true)}
                className={
                  "inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive/10 text-destructive border-none hover:bg-destructive/10 hover:text-destructive/80 focus-visible:ring-red-200 dark:bg-red-950/60 dark:text-red-400 dark:hover:bg-red-900/80 dark:hover:text-red-300 h-10 squircle squircle-2xl squircle-teal-400 px-5 has-[>svg]:px-4"
                }
                variant="outline"
              >
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
                </span>
                Delete
              </Button>
            </DialogClose>
            <a href="/CreateClient">
              <Button
                className={
                  "text-[oklch(83.98%_.195_124.9)] inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-10 squircle squircle-2xl squircle-teal-400 px-5 has-[>svg]:px-4"
                }
                type="submit"
              >
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
                Edit
              </Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* ✅ Edit New Client Dialog */}
      {/* ✅ Delete New Client Dialog */}
      <Dialog open={open2} onOpenChange={setOpen2}>
        <DialogContent className="w-[500px] h-[200px]">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-lg font-bold mb-1 text-start">
              Are you absolutely sure?
            </h2>
            <p className="text-muted-foreground font-[500] text-sm mb-4 text-start">
              Once deleted, you won't be able to get this client back.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={() => setOpen2(true)}
                className={
                  "inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 squircle squircle-2xl squircle-teal-400 px-5 has-[>svg]:px-4"
                }
                variant="outline"
              >
                Cancle
              </Button>
            </DialogClose>
            <Button
              className={
                "inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive rounded-3 text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 h-10 squircle squircle-2xl squircle-teal-400 px-5 has-[>svg]:px-4"
              }
              type="submit"
            >
              Delete Client
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* ✅ Delete New Client Dialog */}
    </div>
  );
};

export default DataTableClient;
