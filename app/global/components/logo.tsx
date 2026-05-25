import Link from "next/link";
import Image from "next/image";

import { Bitcount_Grid_Double } from "next/font/google";

const bitcountGridDouble = Bitcount_Grid_Double({
  subsets: ["latin"],
  fallback: ["monospace"],
});

const colors = {
  navy: "#1d3557",
  teal: "#a8dadc",
  red: "#e63947",
  white: "#ffffff",
  blue: "#457b9d",
  lightBlue: "#a8dadc",
};

function GetlerLogoBadge({ width = 340 }) {
  return (
    <svg width={width} viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400&display=swap');`}</style>
      </defs>

      {/* ── Building icon (from image 1) ── */}

      {/* Left building */}
      <rect x="22" y="46" width="20" height="40" rx="2" fill="#4a7fa5" />
      <rect
        x="26"
        y="52"
        width="5"
        height="5"
        rx="1"
        fill={colors.navy}
        opacity="0.5"
      />
      <rect
        x="33"
        y="52"
        width="5"
        height="5"
        rx="1"
        fill={colors.navy}
        opacity="0.5"
      />
      <rect
        x="26"
        y="61"
        width="5"
        height="5"
        rx="1"
        fill={colors.navy}
        opacity="0.5"
      />
      <rect
        x="33"
        y="61"
        width="5"
        height="5"
        rx="1"
        fill={colors.navy}
        opacity="0.5"
      />
      <rect
        x="26"
        y="70"
        width="5"
        height="5"
        rx="1"
        fill={colors.navy}
        opacity="0.5"
      />
      <rect
        x="33"
        y="70"
        width="5"
        height="5"
        rx="1"
        fill={colors.navy}
        opacity="0.5"
      />

      {/* Center tall building */}
      <rect x="44" y="28" width="22" height="58" rx="2" fill="#1e4d78" />
      {/* Red cap */}
      <rect x="44" y="22" width="22" height="8" rx="2" fill={colors.red} />
      <rect
        x="49"
        y="36"
        width="5"
        height="5"
        rx="1"
        fill={colors.lightBlue}
        opacity="0.5"
      />
      <rect
        x="57"
        y="36"
        width="5"
        height="5"
        rx="1"
        fill={colors.lightBlue}
        opacity="0.5"
      />
      <rect
        x="49"
        y="46"
        width="5"
        height="5"
        rx="1"
        fill={colors.lightBlue}
        opacity="0.5"
      />
      <rect
        x="57"
        y="46"
        width="5"
        height="5"
        rx="1"
        fill={colors.lightBlue}
        opacity="0.5"
      />
      <rect
        x="49"
        y="56"
        width="5"
        height="5"
        rx="1"
        fill={colors.lightBlue}
        opacity="0.5"
      />
      <rect
        x="57"
        y="56"
        width="5"
        height="5"
        rx="1"
        fill={colors.lightBlue}
        opacity="0.5"
      />

      {/* Right short building */}
      <rect
        x="68"
        y="58"
        width="16"
        height="28"
        rx="2"
        fill={colors.lightBlue}
        opacity="0.6"
      />
      <rect
        x="72"
        y="64"
        width="4"
        height="4"
        rx="1"
        fill={colors.navy}
        opacity="0.4"
      />
      <rect
        x="78"
        y="64"
        width="4"
        height="4"
        rx="1"
        fill={colors.navy}
        opacity="0.4"
      />

      {/* GETLER */}
      <text
        x="118"
        y="58"
        fontFamily="'Jost', sans-serif"
        fontWeight="400"
        fontSize="30"
        fill={colors.navy}
        letterSpacing="6"
      >
        GETLER
      </text>

      {/* INVESTMENTS */}
      <text
        x="120"
        y="74"
        fontFamily="'Jost', sans-serif"
        fontWeight="300"
        fontSize="10"
        fill={colors.blue}
        letterSpacing="8"
      >
        INVESTMENTS
      </text>
    </svg>
  );
}

export default function Logo() {
  return (
    <>
      <Link href={"/home"}>
        {/* <div className=" text-summer font-extrabold text-3xl">
          <div className={`flex items-center ${bitcountGridDouble.className}`}>
            Gertler Investment
          </div>
        </div> */}
        <GetlerLogoBadge />
      </Link>
    </>
  );
}
