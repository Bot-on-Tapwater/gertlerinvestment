"use client";

import { number } from "motion";
import { sub } from "motion/react-client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useImmer } from "use-immer";
import Image from "next/image";
import {
  CloseIcon,
  PlusIcon,
  BackIcon,
} from "@/app/global/components/svgIcons";

const propertyTypes = {
  apartment: ["apartment"],
  house: [
    "bungalow",
    "townhouse",
    "villa",
    "mansion",
    "ranch house",
    "condominium",
  ],
  land: ["residential land", "commercial land"],
  "commercial property": ["warehouse", "shop", "office"],
};

const areaUnits = ["m²", "sqft", "acres", "hectares", "perimeter (meters)"];

interface propertyFormData {
  propertyName: string;
  propertyDescription: string;
  propertyType: string;
  propertyTypeSubcategory: string;
  propertyLocation: string;
  propertyNeighbourhood?: string;
  propertyCounty: string;
  propertyPriceInKes: number | "";
  noOfBedrooms?: number | "";
  noOfBathrooms?: number | "";
  floorSizeUnit?: string;
  floorSize?: number | "";
  landSize?: number | "";
  landSizeUnit?: string;
  airConditioning?: boolean;
  alarmSystem?: boolean;
  backupGenerator?: boolean;
  enSuiteBathroom?: boolean;
  fibreInternet?: boolean;
  serviceChargeIncluded?: boolean;
  walkInCloset?: boolean;
  balcony?: boolean;
  bbqArea?: boolean;
  borehole?: boolean;
  cctv?: boolean;
  electricFence?: boolean;
  garden?: boolean;
  gatedCommunity?: boolean;
  gym?: boolean;
  kidsPlayArea?: boolean;
  parking?: boolean;
  staffQuaters?: boolean;
  swimmingPool?: boolean;
  wheelchairAccess?: boolean;
  seaView?: boolean;
  scenicView?: boolean;
  golfCourse?: boolean;
  instagramLink?: string;
}

const propertyForm: propertyFormData = {
  propertyName: "",
  propertyDescription: "",
  propertyType: "",
  propertyTypeSubcategory: "",
  propertyLocation: "",
  propertyNeighbourhood: "",
  propertyCounty: "",
  propertyPriceInKes: "",
  noOfBedrooms: "",
  noOfBathrooms: "",
  floorSizeUnit: "",
  floorSize: "",
  landSize: "",
  landSizeUnit: "",
  airConditioning: false,
  alarmSystem: false,
  backupGenerator: false,
  enSuiteBathroom: false,
  fibreInternet: false,
  serviceChargeIncluded: false,
  walkInCloset: false,
  balcony: false,
  bbqArea: false,
  borehole: false,
  cctv: false,
  electricFence: false,
  garden: false,
  gatedCommunity: false,
  gym: false,
  kidsPlayArea: false,
  parking: false,
  staffQuaters: false,
  swimmingPool: false,
  wheelchairAccess: false,
  seaView: false,
  scenicView: false,
  golfCourse: false,
  instagramLink: "",
};

function UserInput({
  text,
  value,
  name,
  placeholder,
  type = text,
  readOnly = false,
  onChange,
  required = false,
}: {
  text: string;
  value?: string | number;
  name: string;
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
  onChange?: any;
  required?: boolean;
}) {
  return (
    <>
      <div className="flex flex-col text-sm items-start gap-y-2">
        <label className="font-bold">{text}</label>
        <input
          value={value}
          name={name}
          className="justify-self-start border-1 border-summerfive/25 p-2 rounded-lg font-normal"
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
          onChange={onChange}
          required={required}
        ></input>
      </div>
    </>
  );
}

function UserInputCheckbox({
  text,
  name,
  onChange,
}: {
  text: string;
  name: string;
  onChange?: any;
}) {
  return (
    <>
      <div className="flex text-sm items-center gap-x-4">
        <label className="">{text}</label>
        <input
          name={name}
          className="justify-self-start border-1 border-summerfive/25 p-2 rounded-lg font-normal"
          onChange={onChange}
          type="checkbox"
        ></input>
      </div>
    </>
  );
}

function FormInputWrapper({ children }: { children: any }) {
  return (
    <>
      <section className="flex flex-col text-sm items-start gap-y-2">
        {children}
      </section>
    </>
  );
}

function CreateListingButton({
  style,
  text,
}: {
  style?: string;
  text: string;
}) {
  return (
    <>
      <button
        className={`px-6 py-3 rounded-md text-sm font-bold text-summertwo cursor-pointer duration-200 w-36 ${style}`}
      >
        {text}
      </button>{" "}
    </>
  );
}

function PropertyDetailsForm() {
  const [files, setFiles] = useState<string[]>([]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files;
    if (!selected) return;
    const newPreviews = Array.from(selected).map((f) => URL.createObjectURL(f));
    setFiles((prev) => [...prev, ...newPreviews]);
  }

  const [propertyFormImmer, updatePropertyFormImmer] =
    useImmer<propertyFormData>(propertyForm);

  function handleStringInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const name = e.target.name as keyof propertyFormData;
    const value = e.target.value;
    updatePropertyFormImmer((draft) => {
      (draft[name] as string) = value;
    });
  }

  function handleNumberInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name as keyof propertyFormData;
    const value = e.target.value;
    updatePropertyFormImmer((draft) => {
      (draft[name] as number | "") = value === "" ? "" : Number(value);
    });
  }

  function handleBooleanInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name as keyof propertyFormData;
    const checked = e.target.checked;
    updatePropertyFormImmer((draft) => {
      (draft[name] as boolean) = checked;
    });
  }

  return (
    <>
      <section>
        <form className="border-2 p-4 rounded">
          <section className="flex flex-col gap-y-16">
            <UserInput
              text="Property name"
              name="propertyName"
              value={propertyFormImmer.propertyName}
              placeholder="Kitisuru Falls Residence"
              onChange={handleStringInputChange}
              required={true}
            />
            <FormInputWrapper>
              <label className="font-bold">Property Description</label>
              <textarea
                value={propertyFormImmer.propertyDescription}
                name="propertyDescription"
                className="justify-self-start border-1 border-summerfive/25 p-2 rounded-lg font-normal"
                placeholder="This land goes for 1.2 Million kenyan shillings an acre"
                readOnly={false}
                rows={3}
                cols={40}
                onChange={handleStringInputChange}
                required={true}
              ></textarea>
            </FormInputWrapper>
            <FormInputWrapper>
              <label className="font-bold">Property Type</label>
              {Object.keys(propertyTypes).map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-x-2 capitalize"
                >
                  <input
                    type="radio"
                    name="propertyType"
                    value={type}
                    checked={propertyFormImmer.propertyType === type}
                    onChange={handleStringInputChange}
                    key={type}
                    required={true}
                  />
                  {type}
                </label>
              ))}
            </FormInputWrapper>

            {propertyFormImmer.propertyType && (
              <section className="flex flex-col text-sm items-start gap-y-2">
                <label className="font-bold">Poperty type subcategory</label>
                {propertyTypes[
                  propertyFormImmer.propertyType as keyof typeof propertyTypes
                ].map((subtype) => (
                  <label
                    key={subtype}
                    className="flex items-center gap-x-2 capitalize"
                  >
                    <input
                      type="radio"
                      name="propertyTypeSubcategory"
                      value={subtype}
                      checked={
                        propertyFormImmer.propertyTypeSubcategory === subtype
                      }
                      onChange={handleStringInputChange}
                    />
                    {subtype}
                  </label>
                ))}
              </section>
            )}
            <UserInput
              text="Property location"
              name="propertyLocation"
              value={propertyFormImmer.propertyLocation}
              placeholder="Lower Kabete, Kiambu"
              onChange={handleStringInputChange}
              required={true}
            />
            <UserInput
              text="Property neighbourhood"
              name="propertyNeighbourhood"
              value={propertyFormImmer.propertyNeighbourhood}
              placeholder="Gatonyo"
              onChange={handleStringInputChange}
              required={true}
            />
            <UserInput
              text="Property county"
              name="propertyCounty"
              value={propertyFormImmer.propertyCounty}
              placeholder="Kiambu"
              onChange={handleStringInputChange}
              required={true}
            />
            <UserInput
              text="Property price"
              name="propertyPriceInKes"
              value={propertyFormImmer.propertyPriceInKes}
              placeholder="10,000,000 KES"
              onChange={handleNumberInputChange}
              type="number"
              required={true}
            />
            <UserInput
              text="Number of bedrooms"
              name="noOfBedrooms"
              value={propertyFormImmer.noOfBedrooms}
              placeholder="4 bedrooms"
              onChange={handleNumberInputChange}
              type="number"
              required={true}
            />
            <UserInput
              text="Number of bathrooms"
              name="noOfBathrooms"
              value={propertyFormImmer.noOfBathrooms}
              placeholder="3 bathrooms"
              onChange={handleNumberInputChange}
              type="number"
              required={true}
            />
            <FormInputWrapper>
              <label className="font-bold ">Floor size unit</label>
              <section className="flex gap-x-8">
                {areaUnits.map((unit) => (
                  <label key={unit} className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="floorSizeUnit"
                      value={unit}
                      checked={propertyFormImmer.floorSizeUnit === unit}
                      onChange={handleStringInputChange}
                    />{" "}
                    {unit}
                  </label>
                ))}
              </section>
              <UserInput
                text="Floor size"
                name="floorSize"
                value={propertyFormImmer.floorSize}
                placeholder="1500 sqft"
                onChange={handleNumberInputChange}
                type="number"
                required={true}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label className="font-bold ">Land size unit</label>
              <section className="flex gap-x-8">
                {areaUnits.map((unit) => (
                  <label key={unit} className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="landSizeUnit"
                      value={unit}
                      checked={propertyFormImmer.landSizeUnit === unit}
                      onChange={handleStringInputChange}
                    />{" "}
                    {unit}
                  </label>
                ))}
              </section>
              <UserInput
                text="Land size"
                name="landSize"
                value={propertyFormImmer.landSize}
                placeholder="3 hectares"
                onChange={handleNumberInputChange}
                type="number"
                required={true}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <label className="font-bold">Internal Features</label>
              <section className="grid grid-cols-4 text-sm items-start px-4 space-x-8 space-y-8 w-full">
                <UserInputCheckbox
                  text="Air conditioning"
                  name="airConditioning"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Alarm system"
                  name="alarmSystem"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Backup generator"
                  name="backupGenerator"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="En-Suite bathroom"
                  name="enSuiteBathroom"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Fibre internet"
                  name="fibreInternet"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Service charge included"
                  name="serviceChargeIncluded"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Walk-in closet"
                  name="walkInCloset"
                  onChange={handleBooleanInputChange}
                />
              </section>
            </FormInputWrapper>
            <FormInputWrapper>
              <label className="font-bold">External Features</label>
              <section className="grid grid-cols-4 text-sm items-start px-4 space-x-8 space-y-8 w-full">
                <UserInputCheckbox
                  text="Balcony"
                  name="balcony"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="BBQ area"
                  name="bbqArea"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Borehole"
                  name="borehole"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="CCTV"
                  name="cctv"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Electric fence"
                  name="electricFence"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Garden"
                  name="garden"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Gated community"
                  name="gatedCommunity"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Gym"
                  name="gym"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Kids play area"
                  name="kidsPlayArea"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Parking"
                  name="parking"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Staff quaters"
                  name="staffQuaters"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Swimming pool"
                  name="swimmingPool"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Wheelchair access"
                  name="gatedCommunity"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Sea view"
                  name="seaView"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Scenic view"
                  name="scenicView"
                  onChange={handleBooleanInputChange}
                />
                <UserInputCheckbox
                  text="Golf course"
                  name="golfCourse"
                  onChange={handleBooleanInputChange}
                />
              </section>
            </FormInputWrapper>
            <UserInput
              text="Instagram video link"
              name="instagramLink"
              value={propertyFormImmer.instagramLink}
              placeholder="https://www.instagram.com/reel/DdqyiSvMO6A/?utm_source=ig_web_copy_link&stkn=NTc4MTIwNjQ2YQ=="
              onChange={handleStringInputChange}
              required={true}
            />

            <FormInputWrapper>
              <label className="font-bold">Upload Images</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="border-2 rounded p-2"
              />
              {files.length > 0 && (
                <section className="hover:border-2 duration-75 p-4 rounded w-full h-min grid grid-cols-4 gap-x-4 gap-y-4 items-start">
                  {files.map((src, i) => (
                    <div
                      key={src}
                      className="hover:border-2 rounded duration-75 relative p-4"
                    >
                      <div className="absolute top-2 right-2 cursor-pointer">
                        <CloseIcon />
                      </div>

                      <Image
                        src={src}
                        width={0}
                        height={0}
                        className="w-xs"
                        alt={`Uploaded preview ${i + 1}`}
                      />
                    </div>
                  ))}
                </section>
              )}
            </FormInputWrapper>
          </section>
          <section className="grid grid-cols-8">
            <CreateListingButton
              text="Create listing"
              style="col-start-4 bg-summerfive hover:bg-summerfive/85"
            />
            <CreateListingButton
              text="Close"
              style="bg-summer hover:bg-summer/85"
            />
          </section>
        </form>
      </section>
    </>
  );
}

function GoBack() {
  const params = useParams();
  const userId = params.userId;

  return (
    <>
      <Link href={`/profile/${userId}/listings/`}>
        <section className="grid grid-cols-1">
          <button className="p-4 bg-summerfive rounded-md text-sm text-summertwo items w-56 font-bold cursor-pointer justify-self-start flex gap-x-2 items-center justify-center hover:bg-transparent hover:border hover:border-summerfive hover:text-summerfive  duration-200">
            <BackIcon />
            Back
          </button>
        </section>
      </Link>
    </>
  );
}

export default function CreateListing() {
  return (
    <>
      <section className="flex flex-col gap-y-8">
        <GoBack />
        <PropertyDetailsForm />
      </section>
    </>
  );
}
