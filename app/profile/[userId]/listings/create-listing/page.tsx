"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useImmer } from "use-immer";

interface propertyFormData {
  propertyName: string | null;
  propertyDescription: string | null;
  propertyType: string | null;
  propertyLocation: string | null;
  propertyNeighbourhood?: string | null;
  propertyCounty: string | null;
  propertyPriceInKes: number | null;
  noOfBedrooms?: number | null;
  noOfBathrooms?: number | null;
  floorSizeUnit?: string | null;
  floorSize?: number | null;
  landSize?: number | null;
  landSizeUnit?: string | null;
  airConditioning?: boolean | null;
  alarmSystem?: boolean | null;
  backupGenerator?: boolean | null;
  enSuiteBathroom?: boolean | null;
  fibreInternet?: boolean | null;
  serviceChargeIncluded?: boolean | null;
  walkInCloset?: boolean | null;
  balcony?: boolean | null;
  bbqArea?: boolean | null;
  borehole?: boolean | null;
  cctv?: boolean | null;
  electricFence?: boolean | null;
  garden?: boolean | null;
  gatedCommunity?: boolean | null;
  gym?: boolean | null;
  kidsPlayArea?: boolean | null;
  parking?: boolean | null;
  staffQuaters?: boolean | null;
  swimmingPool?: boolean | null;
  wheelchairAccess?: boolean | null;
  seaView?: boolean | null;
  scenicView?: boolean | null;
  golfCourse?: boolean | null;
}

const propertyForm: propertyFormData = {
  propertyName: null,
  propertyDescription: null,
  propertyType: null,
  propertyLocation: null,
  propertyNeighbourhood: null,
  propertyCounty: null,
  propertyPriceInKes: null,
  noOfBedrooms: null,
  noOfBathrooms: null,
  floorSizeUnit: null,
  floorSize: null,
  landSize: null,
  landSizeUnit: null,
  airConditioning: null,
  alarmSystem: null,
  backupGenerator: null,
  enSuiteBathroom: null,
  fibreInternet: null,
  serviceChargeIncluded: null,
  walkInCloset: null,
  balcony: null,
  bbqArea: null,
  borehole: null,
  cctv: null,
  electricFence: null,
  garden: null,
  gatedCommunity: null,
  gym: null,
  kidsPlayArea: null,
  parking: null,
  staffQuaters: null,
  swimmingPool: null,
  wheelchairAccess: null,
  seaView: null,
  scenicView: null,
  golfCourse: null,
};

export default function CreateListing() {
  const params = useParams();
  const userId = params.userId;

  //   type property = null | "apartment" | "house" | "land" | "commercial property";

  const propertyTypes = {
    apartment: [],
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

  //   const [property, setProperty] = useState<property>(null);

  const [propertyFormImmer, updatePropertyFormImmer] =
    useImmer<propertyFormData>(propertyForm);

  function handleInputChange(
    inputName: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
      Object.entries(propertyForm).map(([key, value]) => if (inputName === key) {
          
      })
        
  }

  return (
    <>
      <section>
        {/* <div>Here is my user ID: {userId}</div> */}
        {/* <section className="font-semibold text-2xl">
          Create new property
        </section> */}
        <form>
          <div>
            <label>Property name</label>
            <input
              name="propertyName"
              placeholder="Kitisuru falls residence"
            ></input>
          </div>
        </form>
      </section>
    </>
  );
}
