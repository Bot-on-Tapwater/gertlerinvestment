"use client";

import Image from "next/image";
import { motion } from "motion/react";

function PicHeroSection() {
  return (
    <>
      <div className="relative col-span-1 flex items-start">
        <Image
          alt="Picture of houses"
          width={2000}
          height={2000}
          src="/images/home/houses.jpg"
          className="w-lg rounded-2xl"
        />
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <section className="grid grid-cols-2 space-x-32 justify-self-center">
        <PicHeroSection />
        <section className="col-span-1 flex flex-col gap-y-8">
          <section className="bg-summer/15 text-summer font-extrabold rounded-2xl flex items-center justify-center w-sm">
            <div className="p-2">Handpicked, verified real estate listings</div>
          </section>
          <div className="text-summerfive font-extrabold text-6xl">
            Your trusted source <br />
            for safe listings.
          </div>
          <div className="h-12"></div>
          <div className="text-summerfive font-extralight text-lg w-sm">
            At Gertler Investment, every property listing is carefully verified
            and handpicked by our team. We’re committed to providing a safe
            experience for every homebuyer.
          </div>
          <button className="bg-summer w-48 p-4 rounded-2xl text-summertwo font-semibold cursor-pointer hover:bg-summertwo hover:border-1 hover:border-summer hover:text-summer duration-200">
            Browse listings
          </button>
        </section>
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col gap-y-16 items-center w-7/10">
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
