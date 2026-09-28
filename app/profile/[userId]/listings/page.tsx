"use client";

import { listings } from "@/app/global/lib/listings";
import { PlusIcon } from "@/app/global/components/svgIcons";
import { Pagination } from "@/components/tailgrids/core/pagination";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const today = new Date().toLocaleDateString();

const listingsItems = (userId: string, router: ReturnType<typeof useRouter>) =>
  listings.map((listing) => {
    return (
      <>
        <tr
          key={listing.id}
          className={`grid grid-cols-7 space-y-4 p-4 items-center border-b border-summerfive/50 cursor-pointer hover:py-8 hover:bg-summerthree/50 duration-200`}
          onClick={() =>
            router.push(`/profile/${userId}/listings/${listing.id}`)
          }
        >
          <TableBodyItem value={listing.title} className="col-span-2" />
          <TableBodyItem value={listing.type} />
          <TableBodyItem value={listing.price} />
          <TableBodyItem value={listing.location} />
          <TableBodyItem value={today} />
          <TableBodyItem>
            <section className="flex gap-x-8">
              <EditButton userId={userId} listingId={listing.id} />

              <DeleteButton />
            </section>
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

function EditButton({
  userId,
  listingId,
}: {
  userId: string;
  listingId: number;
}) {
  return (
    <>
      <Link href={`/profile/${userId}/listings/${listingId}`}>
        <button className="border-summerfive border p-2 rounded-lg text-summerfive cursor-pointer hover:bg-summerfive hover:text-summertwo duration-200">
          Edit
        </button>
      </Link>
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
          <TableHeaderItem name="Actions" />
        </tr>
      </thead>
    </>
  );
}

function TableBody() {
  const { userId } = useParams<{ userId: string }>();
  const router = useRouter();
  return (
    <>
      <tbody>{listingsItems(userId, router)}</tbody>
    </>
  );
}

function AddListing() {
  const params = useParams();
  const userId = params.userId;

  return (
    <>
      <Link href={`/profile/${userId}/listings/create-listing`}>
        <section className="grid grid-cols-1">
          <button className="p-4 bg-summerfive rounded-md text-sm text-summertwo items w-56 font-bold cursor-pointer justify-self-end flex gap-x-2 items-center justify-center hover:bg-transparent hover:border hover:border-summerfive hover:text-summerfive  duration-200">
            <PlusIcon />
            Add New Property
          </button>
        </section>
      </Link>
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
        <p className="text-sm text-summerfive/70">
          Click a row to edit the listing
        </p>
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
