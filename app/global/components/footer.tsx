import Link from "next/link";
import Logo from "./logo";
import {
  ForwardSlashIcon,
  FacebookIcon,
  TiktokIcon,
  YoutubeIcon,
  InstagramIcon,
} from "./svgIcons";

function FooterNavItem({ name, link = "/" }: { name: string; link?: string }) {
  return (
    <>
      <Link
        href={link}
        className="text-summerfour font-normal hover:-translate-y-1 duration-200"
      >
        {name}
      </Link>
    </>
  );
}

{
  /* TODO: Unnecessary for now, can remove later if there is no use for it */
}
function IconContainer({
  children,
  link = "",
}: {
  children: any;
  link?: string;
}) {
  return (
    <>
      <Link href={link}>{children}</Link>
    </>
  );
}

function Icons() {
  return (
    <>
      <section className="flex gap-x-8 items-center">
        <IconContainer>
          <InstagramIcon />
        </IconContainer>
        <IconContainer>
          <TiktokIcon />
        </IconContainer>
        <IconContainer>
          <FacebookIcon />
        </IconContainer>
        <IconContainer>
          <YoutubeIcon />
        </IconContainer>
      </section>
    </>
  );
}

function FooterNav() {
  return (
    <>
      <section className="flex gap-x-8">
        <FooterNavItem name="About" />
        <FooterNavItem name="Features" />
        <FooterNavItem name="Works" />
        <FooterNavItem name="Support" />
        <FooterNavItem name="Help" />
      </section>
    </>
  );
}

function Copyright() {
  return (
    <>
      <div className="text-summerfour font-extralight">
        © Copyright 2026, All Rights Reserved
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <section className="flex flex-col gap-y-8 items-center">
        <Logo />
        <FooterNav />
        <ForwardSlashIcon />
        <Icons />
        <Copyright />
      </section>
    </>
  );
}
