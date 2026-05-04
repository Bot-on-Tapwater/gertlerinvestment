"use client";
import Link from "next/link";
import { useState } from "react";

function NavigationProfileItem({
  name,
  link,
  navigationItem,
  onClick,
}: {
  name: string;
  link: string;
  navigationItem: "profile" | "listings";
  onClick: any;
}) {
  return (
    <>
      <Link href={link}>
        {name.toLowerCase() === navigationItem.toLowerCase() ? (
          <button
            className="p-2 bg-summerfive/10 text-summerfive rounded-lg cursor-pointer text-sm duration-200"
            onClick={() => {
              onClick(name);
            }}
          >
            {name}
          </button>
        ) : (
          <button
            className="p-2 hover:bg-summerfive/10 hover:text-summerfive rounded-lg cursor-pointer text-sm duration-200"
            onClick={() => {
              onClick(name);
            }}
          >
            {name}
          </button>
        )}
      </Link>
    </>
  );
}

function NavigationProfile() {
  const [navigationItem, setNavigationItem] = useState<"profile" | "listings">(
    "profile",
  );

  const handleClick = (item) => {
    setNavigationItem(item);
  };

  return (
    <>
      <section className="border-1 rounded-lg text-summerfive/75 p-2 flex gap-x-4">
        <NavigationProfileItem
          name="Profile"
          link="/profile/1"
          onClick={handleClick}
          navigationItem={navigationItem}
        />
        <NavigationProfileItem
          name="Listings"
          link="/profile/1/listings"
          onClick={handleClick}
          navigationItem={navigationItem}
        />
      </section>
    </>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="w-7/10 flex flex-col gap-y-8">
        {" "}
        <section className="flex flex-col justify-start text-summerfive gap-y-4">
          <div className="font-bold text-lg">Profile</div>
          <div className="font-extralight w-sm text-sm text-summerfive/75">
            Update your profile and manage your listings—create, edit, or delete
            as needed
          </div>
        </section>
        <NavigationProfile />
        {children}
      </section>
    </>
  );
}
