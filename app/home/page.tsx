"use client";

import Image from "next/image";
import { motion } from "motion/react";

function PicHeroSection() {
  return (
    <>
      <div className="relative">
        <Image
          alt="Picture of houses"
          width={2000}
          height={2000}
          src="/images/home/houses.jpg"
          className="w-lg rounded-2xl"
        />
        {/* <SmallContainerPicHeroSection /> */}
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <section>
        <PicHeroSection />
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col gap-y-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
        </motion.div>
      </section>
    </>
  );
}
