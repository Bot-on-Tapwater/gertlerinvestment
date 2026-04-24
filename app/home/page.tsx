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

function Blob1() {
  return (
    <>
      <span className="inline-block text-summer/25 w-24 h-24">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M41.7,-73.9C53.4,-65.4,62.1,-53.1,67,-40.2C71.9,-27.2,73,-13.6,71,-1.2C68.9,11.2,63.6,22.5,59.3,36.3C54.9,50.1,51.3,66.5,41.6,76.8C31.9,87.1,15.9,91.4,0.5,90.4C-14.9,89.5,-29.7,83.4,-40.9,73.9C-52,64.3,-59.4,51.4,-62.6,38.6C-65.8,25.7,-64.9,12.9,-64.6,0.2C-64.3,-12.5,-64.6,-25,-61.9,-38.7C-59.1,-52.4,-53.2,-67.2,-42.4,-76.4C-31.6,-85.5,-15.8,-89,-0.4,-88.2C14.9,-87.5,29.9,-82.5,41.7,-73.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </span>
    </>
  );
}

function Blob2() {
  return (
    <>
      <span className="inline-block text-summerthree/25 w-24 h-24">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M35.1,-63.8C45.3,-54.9,53.3,-45.2,57.7,-34.4C62.2,-23.6,63.1,-11.8,63.2,0C63.2,11.8,62.3,23.6,58.5,35.5C54.7,47.4,48,59.4,37.7,64.9C27.5,70.3,13.8,69.1,-1.2,71.2C-16.1,73.2,-32.3,78.5,-45.5,74.8C-58.7,71.1,-69,58.5,-77.2,44.5C-85.3,30.5,-91.2,15.3,-87.4,2.2C-83.6,-10.8,-69.9,-21.7,-61.5,-35.1C-53.1,-48.5,-49.8,-64.6,-40.4,-73.9C-31,-83.2,-15.5,-85.8,-1.5,-83.1C12.5,-80.5,24.9,-72.6,35.1,-63.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </span>
    </>
  );
}

function Blob3() {
  return (
    <>
      <span className="inline-block text-summerfive/25 w-24 h-24">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M45.6,-75.3C58.6,-71.5,68.3,-58.3,76.4,-44.1C84.5,-30,91,-15,87.6,-2C84.2,11,70.8,22.1,61.3,33.8C51.7,45.5,46.1,57.8,36.6,67.8C27,77.7,13.5,85.3,0.7,84C-12,82.7,-24.1,72.6,-34.6,63.3C-45.2,53.9,-54.3,45.3,-61.1,34.8C-67.8,24.4,-72.2,12.2,-73,-0.5C-73.8,-13.1,-70.9,-26.2,-65.2,-38.4C-59.5,-50.5,-50.8,-61.8,-39.4,-66.5C-28.1,-71.3,-14,-69.6,1.1,-71.6C16.3,-73.6,32.6,-79.1,45.6,-75.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </span>
    </>
  );
}

function Blob4() {
  return (
    <>
      <span className="inline-block text-summerfive/25 w-24 h-24">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M43.9,-79.6C54.6,-69.9,59.4,-53.5,64.2,-39.1C68.9,-24.7,73.8,-12.3,75.7,1.1C77.7,14.6,76.9,29.3,70,40C63.1,50.7,50.2,57.6,37.5,66.9C24.8,76.3,12.4,88.1,-1.3,90.3C-15,92.6,-30,85.3,-44.3,76.8C-58.5,68.4,-72,58.9,-80.9,45.9C-89.7,32.9,-93.8,16.5,-91.4,1.4C-89,-13.6,-79.9,-27.3,-70.6,-39.5C-61.4,-51.7,-51.9,-62.6,-40.1,-71.6C-28.3,-80.7,-14.1,-87.9,1.2,-90.1C16.6,-92.3,33.3,-89.3,43.9,-79.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </span>
    </>
  );
}

function Blob5() {
  return (
    <>
      <span className="inline-block text-summer/25 w-24 h-24">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M39,-66.5C49.4,-61.5,56,-48.8,63.6,-36.4C71.2,-24.1,79.8,-12,82.3,1.4C84.8,14.9,81.1,29.8,74.2,43.3C67.2,56.9,57.1,69.1,44.2,78.1C31.3,87,15.7,92.6,1.4,90.3C-12.9,87.9,-25.8,77.5,-38.7,68.5C-51.5,59.6,-64.4,52.1,-69.4,40.9C-74.4,29.7,-71.6,14.8,-69.8,1C-68,-12.8,-67.2,-25.5,-63.3,-38.8C-59.5,-52,-52.6,-65.6,-41.6,-70.2C-30.5,-74.8,-15.3,-70.2,-0.5,-69.4C14.3,-68.5,28.6,-71.4,39,-66.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </span>
    </>
  );
}

function Blob6() {
  return (
    <>
      <span className="inline-block text-summerthree/25 w-24 h-24">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M39,-70.2C48.5,-62,52.7,-47.5,57.9,-34.7C63,-21.9,69,-11,71.2,1.3C73.3,13.5,71.8,27,66.3,39.1C60.8,51.2,51.4,62,39.7,71.2C28,80.4,14,88.2,1.7,85.2C-10.5,82.2,-21.1,68.5,-33.3,59.6C-45.6,50.7,-59.5,46.6,-69.3,37.4C-79,28.3,-84.5,14.1,-85.3,-0.5C-86.1,-15.1,-82.2,-30.1,-75.3,-44.1C-68.3,-58.1,-58.4,-71.1,-45.4,-77.2C-32.3,-83.4,-16.2,-82.7,-0.7,-81.5C14.7,-80.2,29.5,-78.4,39,-70.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </span>
    </>
  );
}

function PricingIcon() {
  return (
    <>
      <span className="inline-block text-summerfive w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          fill="currentColor"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 59.997 59.997"
        >
          <g>
            <path
              d="M59.206,0.293c-0.391-0.391-1.023-0.391-1.414,0L54.084,4H30.802L1.532,33.511c-0.667,0.666-1.034,1.553-1.034,2.495
		s0.367,1.829,1.034,2.495l20.466,20.466c0.687,0.687,1.588,1.03,2.491,1.03c0.906,0,1.814-0.346,2.508-1.04l28.501-29.271V5.414
		l3.707-3.707C59.596,1.316,59.596,0.684,59.206,0.293z M53.499,28.874L25.574,57.553c-0.595,0.596-1.565,0.596-2.162,0
		L2.946,37.087c-0.289-0.289-0.448-0.673-0.448-1.081s0.159-0.792,0.451-1.084L31.635,6h20.45l-4.833,4.833
		C46.461,10.309,45.516,10,44.499,10c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5c0-1.017-0.309-1.962-0.833-2.753l4.833-4.833
		V28.874z M47.499,15c0,1.654-1.346,3-3,3s-3-1.346-3-3s1.346-3,3-3c0.462,0,0.894,0.114,1.285,0.301l-1.992,1.992
		c-0.391,0.391-0.391,1.023,0,1.414C43.987,15.902,44.243,16,44.499,16s0.512-0.098,0.707-0.293l1.992-1.992
		C47.385,14.106,47.499,14.538,47.499,15z"
            />
            <path
              d="M40.412,21.131c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-0.746,0.746c-1.787-1.43-4.055-2.133-6.37-1.937
		c-1.613,0.135-3.073,0.914-4.111,2.193c-1.068,1.317-1.561,3.039-1.35,4.724l0.761,6.09l-8.947,8.947
		c-2.05-2.74-1.838-6.647,0.65-9.136c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-3.27,3.27-3.49,8.449-0.665,11.979
		l-1.142,1.142c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l1.143-1.143
		c1.593,1.273,3.566,1.972,5.611,1.972c0.251,0,0.503-0.011,0.756-0.032c1.613-0.134,3.073-0.912,4.111-2.192
		c1.069-1.317,1.562-3.04,1.351-4.725l-0.761-6.09l8.947-8.947c2.049,2.74,1.838,6.648-0.651,9.137
		c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0c3.27-3.271,3.489-8.45,0.665-11.98L40.412,21.131z M28.063,38.594
		c0.144,1.147-0.191,2.319-0.919,3.217c-0.692,0.853-1.659,1.371-2.724,1.46c-1.718,0.135-3.408-0.359-4.771-1.376l7.846-7.847
		L28.063,38.594z M28.404,25.195c-0.144-1.146,0.191-2.319,0.918-3.216c0.692-0.853,1.66-1.371,2.725-1.461
		c1.718-0.141,3.409,0.358,4.772,1.376l-7.847,7.847L28.404,25.195z"
            />
          </g>
        </svg>
      </span>
    </>
  );
}

function SearchIcon() {
  return (
    <>
      <span className="inline-block text-summerthree w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </>
  );
}

function SecureIcon() {
  return (
    <>
      <span className="inline-block text-summer w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z"
          />
        </svg>
      </span>
    </>
  );
}

function SupportIcon() {
  return (
    <>
      <span className="inline-block text-summer w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 24 24"
          id="_24x24_On_Light_Support"
          data-name="24x24/On Light/Support"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect id="view-box" width="24" height="24" fill="none" />
          <path
            id="Shape"
            d="M8,17.751a2.749,2.749,0,0,1,5.127-1.382C15.217,15.447,16,14,16,11.25v-3c0-3.992-2.251-6.75-5.75-6.75S4.5,4.259,4.5,8.25v3.5a.751.751,0,0,1-.75.75h-1A2.753,2.753,0,0,1,0,9.751v-1A2.754,2.754,0,0,1,2.75,6h.478c.757-3.571,3.348-6,7.022-6s6.264,2.429,7.021,6h.478a2.754,2.754,0,0,1,2.75,2.75v1a2.753,2.753,0,0,1-2.75,2.75H17.44A5.85,5.85,0,0,1,13.5,17.84,2.75,2.75,0,0,1,8,17.751Zm1.5,0a1.25,1.25,0,1,0,1.25-1.25A1.251,1.251,0,0,0,9.5,17.751Zm8-6.75h.249A1.251,1.251,0,0,0,19,9.751v-1A1.251,1.251,0,0,0,17.75,7.5H17.5Zm-16-2.25v1A1.251,1.251,0,0,0,2.75,11H3V7.5H2.75A1.251,1.251,0,0,0,1.5,8.751Z"
            transform="translate(1.75 2.25)"
            fill="currentColor"
          />
        </svg>
      </span>
    </>
  );
}

function VerifiedIcon() {
  return (
    <>
      <span className="inline-block text-summerthree w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.5 12.5L10.5 14.5L15.5 9.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.02907 13.0776C2.7032 12.3958 2.7032 11.6032 3.02907 10.9214C3.16997 10.6266 3.41023 10.3447 3.89076 9.78084C4.08201 9.55642 4.17764 9.44421 4.25796 9.32437C4.44209 9.04965 4.56988 8.74114 4.63393 8.41669C4.66188 8.27515 4.6736 8.12819 4.69706 7.83426C4.75599 7.09576 4.78546 6.72651 4.89427 6.41844C5.14594 5.70591 5.7064 5.14546 6.41893 4.89378C6.72699 4.78497 7.09625 4.7555 7.83475 4.69657C8.12868 4.67312 8.27564 4.66139 8.41718 4.63344C8.74163 4.56939 9.05014 4.4416 9.32485 4.25747C9.4447 4.17715 9.55691 4.08152 9.78133 3.89027C10.3452 3.40974 10.6271 3.16948 10.9219 3.02859C11.6037 2.70271 12.3963 2.70271 13.0781 3.02859C13.3729 3.16948 13.6548 3.40974 14.2187 3.89027C14.4431 4.08152 14.5553 4.17715 14.6752 4.25747C14.9499 4.4416 15.2584 4.56939 15.5828 4.63344C15.7244 4.66139 15.8713 4.67312 16.1653 4.69657C16.9038 4.7555 17.273 4.78497 17.5811 4.89378C18.2936 5.14546 18.8541 5.70591 19.1058 6.41844M4.89427 17.5806C5.14594 18.2931 5.7064 18.8536 6.41893 19.1053C6.72699 19.2141 7.09625 19.2435 7.83475 19.3025C8.12868 19.3259 8.27564 19.3377 8.41718 19.3656C8.74163 19.4297 9.05014 19.5574 9.32485 19.7416C9.44469 19.8219 9.55691 19.9175 9.78133 20.1088C10.3452 20.5893 10.6271 20.8296 10.9219 20.9705C11.6037 21.2963 12.3963 21.2963 13.0781 20.9705C13.3729 20.8296 13.6548 20.5893 14.2187 20.1088C14.4431 19.9175 14.5553 19.8219 14.6752 19.7416C14.9499 19.5574 15.2584 19.4297 15.5828 19.3656C15.7244 19.3377 15.8713 19.3259 16.1653 19.3025C16.9038 19.2435 17.273 19.2141 17.5811 19.1053C18.2936 18.8536 18.8541 18.2931 19.1058 17.5806C19.2146 17.2725 19.244 16.9033 19.303 16.1648C19.3264 15.8709 19.3381 15.7239 19.3661 15.5824C19.4301 15.2579 19.5579 14.9494 19.7421 14.6747C19.8224 14.5548 19.918 14.4426 20.1093 14.2182C20.5898 13.6543 20.8301 13.3724 20.971 13.0776C21.2968 12.3958 21.2968 11.6032 20.971 10.9214"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </>
  );
}

function WorldIcon() {
  return (
    <>
      <span className="inline-block text-summerfive w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          fill="currentColor"
          viewBox="0 -8 72 72"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>world</title>
          <path d="M59.25,12.42l-.83.27L54,13.08l-1.27,2-.91-.29L48.23,11.6l-.52-1.66L47,8.16l-2.23-2-2.63-.51-.06,1.2,2.58,2.52,1.26,1.48-1.42.75-1.15-.34-1.73-.73,0-1.39L39.42,8.2l-.75,3.29L36.38,12l.23,1.84,3,.57.52-2.93,2.46.37,1.14.67h1.84L46.8,15l3.34,3.38-.25,1.32-2.69-.34-4.64,2.34-3.34,4-.43,1.78H37.58l-2.23-1-2.17,1,.54,2.29.94-1.09,1.67,0-.12,2,1.38.4L39,32.67,41.2,32l2.57.4,3,.8,1.48.18,2.52,2.86,4.87,2.86-3.15,6-3.32,1.54-1.26,3.44-4.81,3.21-.51,1.85A28,28,0,0,0,59.25,12.42Z" />
          <path d="M39.22,42.63l-2-3.78L39.05,35l-1.87-.56-2.1-2.11-4.66-1L28.88,28v1.92H28.2l-4-5.44V20l-2.94-4.78-4.67.83H13.43l-1.59-1,2-1.6-2,.46A28,28,0,0,0,36,56a29,29,0,0,0,3.51-.25l-.29-3.39s1.29-5,1.29-5.2S39.22,42.63,39.22,42.63Z" />
          <path d="M18.41,9l5-.7,2.29-1.25,2.58.74,4.12-.23,1.42-2.22,2.05.34,5-.47,1.38-1.52,2-1.29,2.74.41,1-.15a27.91,27.91,0,0,0-33.51,7.49h0ZM37.18,2.78,40,1.21l1.84,1.06-2.66,2-2.54.26-1.14-.74ZM28.71,3,30,3.54,31.63,3l.9,1.56-3.82,1L26.88,4.5S28.67,3.35,28.71,3Z" />
        </svg>
      </span>
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

function FeatureSection() {
  const features = [
    {
      icon: <SecureIcon />,
      blobIcon: <Blob1 />,
      title: "Secured Listings",
      description:
        "Every property is verified and authenticated. We protect your investment with thorough background checks.",
    },
    {
      icon: <VerifiedIcon />,
      blobIcon: <Blob2 />,
      title: "Verified Properties",
      description:
        "All listings are handpicked and verified by our expert team. No fraud, no surprises.",
    },
    {
      icon: <PricingIcon />,
      blobIcon: <Blob3 />,
      title: "Transparent Pricing",
      description:
        "No hidden fees. See exact costs upfront with our clear pricing breakdown.",
    },
    {
      icon: <WorldIcon />,
      blobIcon: <Blob4 />,
      title: "Wide Coverage",
      description:
        "Explore properties across multiple locations. Comprehensive real estate database at your fingertips.",
    },
    {
      icon: <SupportIcon />,
      blobIcon: <Blob5 />,
      title: "Expert Support",
      description:
        "24/7 customer support ready to help. Our agents guide you through every step.",
    },
    {
      icon: <SearchIcon />,
      blobIcon: <Blob6 />,
      title: "Advanced Search",
      description:
        "Filter by price, location, amenities, and more. Find exactly what you're looking for.",
    },
  ];

  const featuresItems = features.map((feature) => {
    return (
      <>
        <motion.section
          className="col-span-1 flex flex-col gap-y-4 items-center text-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            {feature.blobIcon}
            {feature.icon}
          </div>
          <div className="text-summerfive font-bold">{feature.title}</div>
          <div className="w-xs text-summerfour font-extralight">
            {feature.description}
          </div>
        </motion.section>
      </>
    );
  });

  return (
    <>
      <section className="grid grid-cols-3 space-x-8 space-y-8">
        {featuresItems}
      </section>
    </>
  );
}

function CallToActionSection() {
  return <></>;
}

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col gap-y-32 items-center w-7/10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
        </motion.div>
        <FeatureSection />
      </section>
    </>
  );
}
