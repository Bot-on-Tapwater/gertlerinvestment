"use client";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { User } from "lucide-react";
import { useImmer } from "use-immer";

interface userProfileFormData {
  fullName: string;
  email: string;
}

const userProfileForm: userProfileFormData = {
  fullName: "Munda Brandon",
  email: "mundabrandon@outlook.com",
};

function UserInput({
  text,
  value,
  name,
  readOnly = false,
  onChange,
}: {
  text: string;
  value?: string;
  name: string;
  readOnly?: boolean;
  onChange?: any;
}) {
  return (
    <>
      <div className="grid grid-cols-8 text-sm items-center">
        <label className="col-span-1 font-bold">{text}</label>
        <input
          value={value}
          name={name}
          className="col-span-3 justify-self-start border-1 border-summerfive/25 p-2 rounded-lg font-normal"
          readOnly={readOnly}
          onChange={onChange}
        ></input>
      </div>
    </>
  );
}

function UserProfileForm() {
  const [profileForm, updateProfileForm] =
    useImmer<userProfileFormData>(userProfileForm);

  function handleFullNameChange(e) {
    updateProfileForm((draft) => {
      draft.fullName = e.target.value;
    });
  }

  return (
    <>
      <form className="space-y-8">
        <UserInput
          text="Full name"
          name="fullName"
          value={profileForm.fullName}
          onChange={handleFullNameChange}
        />
        <UserInput
          text="Email Address"
          value={profileForm.email}
          name="email"
          readOnly={true}
        />
        <button className="px-6 py-3 bg-summerfive rounded-md text-sm font-bold text-summertwo cursor-pointer hover:bg-summerfive/85 duration-200">
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
