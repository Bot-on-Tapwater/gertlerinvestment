import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Logo() {
  return (
    <>
      <div className="text-summer font-extrabold text-3xl hover:text-summerfour ">
        <Link href={"/home"}>Gertler Investments</Link>
      </div>
    </>
  );
}

function AuthNavItem({ link, name }: { link: string; name: string }) {
  return (
    <>
      <Link href={link}>
        <div className="hover:text-summer hover:translate-y-1 duration-200">
          {name}
        </div>
      </Link>
    </>
  );
}

export default function Header() {
  return (
    <>
      {/* Header */}
      <section className="flex w-7/10 justify-self-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>For Sale</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Houses for Sale</NavigationMenuLink>
                <NavigationMenuLink>
                  <Link href="/docs">Apartments for Sale</Link>
                </NavigationMenuLink>
                <NavigationMenuLink>Land for Sale</NavigationMenuLink>
                <NavigationMenuLink>
                  Commercial Property for Sale
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>For Rent</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Houses for Rent</NavigationMenuLink>
                <NavigationMenuLink>Apartments for Rent</NavigationMenuLink>
                <NavigationMenuLink>
                  Commercial Property for Rent
                </NavigationMenuLink>
                <NavigationMenuLink>Bedsitters for Rent</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>
                Real Estate Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Developments Projects</NavigationMenuLink>
                <NavigationMenuLink>Developments Map</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Estate Agencies</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Estate Agencies</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Property Advice</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Property Guides</NavigationMenuLink>
                <NavigationMenuLink>Neighbourhood Guides</NavigationMenuLink>
                <NavigationMenuLink>Decor & LifeStyle</NavigationMenuLink>
                <NavigationMenuLink>Real Estate News</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
        <Logo />
        <section className="flex gap-x-4 text-summerfive text-sm font-bold items-center">
          <AuthNavItem link={"/signup"} name={"Sign Up"} />
          <AuthNavItem link={"/login"} name={"Login"} />
          <Link href="/listings">
            <Button
              variant="outline"
              className="bg-summer cursor-pointer border-summerfive"
            >
              Create Listing
            </Button>
          </Link>
        </section>
      </section>
    </>
  );
}
