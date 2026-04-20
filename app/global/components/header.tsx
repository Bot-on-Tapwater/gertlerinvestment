"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";

type MenuItems = "Buy" | "Sell" | "Rent" | null;

const dropDownMenuOptions = {
  Buy: [
    "House for sale",
    "Apartment for sale",
    "Land for sale",
    "Commercial property for sale",
  ],
  Rent: [
    "House for rent",
    "Apartment for rent",
    "Commercial Property for rent",
    "Bedsitters for rent",
  ],
  Sell: ["Create listing"],
};

function getDropdownOptions(selectedMenuItem: MenuItems) {
  if (!selectedMenuItem) return null;

  const options = dropDownMenuOptions[selectedMenuItem];

  return options.map((optionItem, index) => (
    <DropDownOptionsItem
      key={`${selectedMenuItem}-${index}-${optionItem}`}
      name={optionItem}
    />
  ));
}

function AuthNavItem({ link, name }: { link: string; name: string }) {
  return (
    <>
      <Link href={link}>
        <div className="hover:bg-summer/25 bg-transparent rounded-4xl duration-500">
          <div className="duration-200 p-4">{name}</div>
        </div>
      </Link>
    </>
  );
}

function NavBarItem({
  name,
  handleMouseEnter,
  handleMouseLeave,
}: {
  name: MenuItems;
  handleMouseEnter: any;
  handleMouseLeave: any;
}) {
  return (
    <>
      <div
        className="hover:bg-summer/25 bg-transparent rounded-4xl duration-500"
        onMouseEnter={() => handleMouseEnter(name)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-summerfour font-extrabold cursor-pointer duration-200 p-4 ">
          {name}
        </div>
      </div>
    </>
  );
}

function NavBarDesktop({
  handleMouseEnter,
  handleMouseLeave,
}: {
  handleMouseEnter: any;
  handleMouseLeave: any;
}) {
  return (
    <>
      <section className="flex gap-x-4 items-center">
        <NavBarItem
          name="Buy"
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <NavBarItem
          name="Rent"
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <NavBarItem
          name="Sell"
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </section>
    </>
  );
}

function VerticalSeparator() {
  return <div className="h-6 w-0.5 bg-summer"></div>;
}

function SeparatorHorizontal({ className = `w-12` }: { className: string }) {
  return (
    <>
      <div className={`h-1 bg-summertwo ${className}`}></div>
    </>
  );
}

function MenuItem({ name }: { name: MenuItems }) {
  return (
    <>
      <div className="text-summertwo">{name}</div>
    </>
  );
}

function DropDownOptionsItem({ name }: { name: string }) {
  return (
    <>
      <Link href="/">
        <div className="hover:text-summertwo hover:py-2 hover:translate-x-4 duration-200">
          {name}
        </div>
      </Link>
    </>
  );
}

function HeaderTopBitDesktop() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItems>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnterMenuItemFunction = (menuItem: MenuItems) => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeout(() => {
      setSelectedMenuItem(menuItem);
      setIsDropdownOpen(true);
    }, 250);
  };

  const handleMouseLeaveMenuItemFunction = () => {
    const id = setTimeout(() => {
      setSelectedMenuItem(null);
      setIsDropdownOpen(false);
    }, 500);

    setTimeoutId(id);
  };

  const handleMouseEnterDropDownMenu = () => {
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleMouseLeaveDropDownMenu = () => {
    const id = setTimeout(() => {
      setSelectedMenuItem(null);
      setIsDropdownOpen(false);
    }, 500);

    setTimeoutId(id);
  };

  return (
    <section className="flex h-12 relative">
      <section className="flex w-full justify-self-center justify-between">
        <section className="flex gap-x-24 items-center">
          <Logo />
          <NavBarDesktop
            handleMouseEnter={handleMouseEnterMenuItemFunction}
            handleMouseLeave={handleMouseLeaveMenuItemFunction}
          />
        </section>

        <section className="flex gap-x-2 text-summerfour font-extrabold items-center">
          <AuthNavItem link={"/signup"} name={"Sign Up"} />
          <VerticalSeparator />
          <AuthNavItem link={"/login"} name={"Login"} />
        </section>
      </section>
      {/* NavMenu Options */}
      {isDropdownOpen && selectedMenuItem && (
        <HeaderDropdownMenuDesktop
          selectedMenuItem={selectedMenuItem}
          handleMouseEnter={handleMouseEnterDropDownMenu}
          handleMouseLeave={handleMouseLeaveDropDownMenu}
        />
      )}
    </section>
  );
}

function HeaderDropdownMenuDesktop({
  selectedMenuItem,
  handleMouseEnter,
  handleMouseLeave,
}: {
  selectedMenuItem: MenuItems;
  handleMouseEnter: any;
  handleMouseLeave: any;
}) {
  console.log("Drop down options", getDropdownOptions(selectedMenuItem));
  return (
    <>
      <section
        className={`bg-summer text-summerfive absolute top-16 w-full z-10 flex`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <section className="flex flex-col p-8 gap-y-6 font-bold">
          <section className="flex flex-col">
            <MenuItem name={selectedMenuItem} />
            <SeparatorHorizontal className="w-12" />
          </section>
          <section className="flex flex-col gap-y-4">
            {getDropdownOptions(selectedMenuItem)}
          </section>
        </section>
      </section>
    </>
  );
}

export default function Header() {
  return (
    <>
      <section className="flex flex-col w-7/10 gap-y-0.5px">
        {/* Header */}
        <HeaderTopBitDesktop />
      </section>
    </>
  );
}
