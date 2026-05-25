"use client";

import { listings } from "@/app/global/lib/listings";
import { PlusIcon } from "@/app/global/components/svgIcons";
import { Pagination } from "@/components/tailgrids/core/pagination";
import { useState } from "react";

const today = new Date().toLocaleDateString();

const listingsItems = listings.map((listing) => {
  return (
    <>
      <tr
        key={listing.id}
        className={`grid grid-cols-7 space-y-4 p-4 items-center border-b border-summerfive/50 cursor-pointer hover:py-8 hover:bg-summerthree/50 duration-200`}
      >
        <TableBodyItem value={listing.title} className="col-span-2" />
        <TableBodyItem value={listing.type} />
        <TableBodyItem value={listing.price} />
        <TableBodyItem value={listing.location} />
        <TableBodyItem value={today} />
        <TableBodyItem>
          <DeleteButton />
        </TableBodyItem>
      </tr>
    </>
  );
});

function DeleteButton() {
  return (
    <>
      <button className="border-summer border p-2 rounded-lg text-summer cursor-pointer hover:bg-summer hover:text-summertwo duration-200">
        Delete
      </button>
    </>
  );
}

function TableBodyItem({
  value,
  className,
  children,
}: {
  value?: string | number;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <td className={`${className} m-0`}>
        {children}
        {value}
      </td>
    </>
  );
}

function TableHeaderItem({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <>
      <th className={`justify-self-start ${className}`}>{name}</th>
    </>
  );
}

function TableHeader() {
  return (
    <>
      <thead className="bg-summerthree/25 p-4 border-b border-summerfive">
        <tr className="grid grid-cols-7">
          <TableHeaderItem name="Name" className="col-span-2" />
          <TableHeaderItem name="Type" />
          <TableHeaderItem name="Price (Ksh)" />
          <TableHeaderItem name="Location" />
          <TableHeaderItem name="Updated" />
          <TableHeaderItem name="Action" />
        </tr>
      </thead>
    </>
  );
}

function TableBody() {
  return (
    <>
      <tbody>{listingsItems}</tbody>
    </>
  );
}

function AddListing() {
  return (
    <>
      <section className="grid grid-cols-1">
        <button className="p-4 bg-summerfive rounded-md text-sm text-summertwo items w-56 font-bold cursor-pointer justify-self-end flex gap-x-2 items-center justify-center hover:bg-transparent hover:border hover:border-summerfive hover:text-summerfive  duration-200">
          <PlusIcon />
          Add New Property
        </button>
      </section>
    </>
  );
}

function ListingsTable() {
  return (
    <>
      <table className="flex flex-col text-sm text-summerfive border border-summerfive">
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
}

function ListingsSearchBar() {
  return (
    <>
      <section className="grid grid-cols-1">
        <form className="justify-self-end">
          <input
            className="w-md p-4 border-2 border-summerfive rounded-l-2xl"
            name="search"
            placeholder="Search your listings..."
          ></input>
          <button className="bg-summerfive p-4 border-2 border-summerfive text-summertwo rounded-r-2xl">
            {" "}
            Search
          </button>
        </form>
      </section>
    </>
  );
}

function ListingsPagination() {
  return <></>;
}

export default function UserListings() {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 15;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="flex flex-col gap-y-16">
        <AddListing />
        <ListingsSearchBar />
        <ListingsTable />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          variant="compact"
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
}
