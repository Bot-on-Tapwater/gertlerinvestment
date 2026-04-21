import Link from "next/link";

import { Bitcount_Grid_Double } from "next/font/google";

const bitcountGridDouble = Bitcount_Grid_Double({ subsets: ["latin"] });

export default function Logo() {
  return (
    <>
      <Link href={"/home"}>
        <div className=" text-summer font-extrabold text-3xl">
          <div className={`flex items-center ${bitcountGridDouble.className}`}>
            Gertler Investment
          </div>
        </div>
      </Link>
    </>
  );
}
