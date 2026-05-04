"use client";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { User } from "lucide-react";

function UserInput({
  text,
  value,
  readOnly = false,
}: {
  text: string;
  value?: string;
  readOnly?: boolean;
}) {
  return (
    <>
      <div className="grid grid-cols-8 text-sm items-center">
        <label className="col-span-1 font-bold">{text}</label>
        <input
          value={value}
          className="col-span-3 justify-self-start border-1 border-summerfive/25 p-2 rounded-lg font-normal"
          readOnly={readOnly}
        ></input>
      </div>
    </>
  );
}

function UserProfileForm() {
  return (
    <>
      <form className="space-y-8">
        <UserInput text="Full name" value="Munda Brandon" />
        <UserInput
          text="Email Address"
          value="mundabrandon@outlook.com"
          readOnly={true}
        />
        <button className="px-6 py-3 bg-summer rounded-md text-sm font-bold text-summertwo cursor-pointer hover:bg-summer/85 duration-200">
          Update
        </button>
      </form>
    </>
  );
}

export default function UserProfile() {
  {
    /* Save for later will use while getting user profiles for editing */
  }
  const params = useParams();
  const userId = params.userId;
  return (
    <>
      <section className="">
        <UserProfileForm />{" "}
      </section>
    </>
  );
}
