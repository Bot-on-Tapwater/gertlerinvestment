import Header from "../global/components/header";
import Image from "next/image";
import Footer from "../global/components/footer";

function HomeIcon() {
  return (
    <>
      <span className="inline-block text-summer hover:text-summerfive transition-colors duration-200">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </>
  );
}

function RentIcon() {
  return (
    <>
      <span className="inline-block text-summer hover:text-summerfive transition-colors duration-200">
        <svg
          fill="currentColor"
          height="40px"
          width="40px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 285 285"
        >
          <g>
            <g>
              <path d="M51.907,168.806H36.998v17.114h14.466c5.468,0,10.935-1.41,10.935-8.554C62.399,170.572,58.262,168.806,51.907,168.806z" />
              <path
                d="M278.212,117.227h-31.317l-88.274-76.751c0.495-1.602,0.844-3.269,0.844-5.025c0-9.37-7.595-16.965-16.965-16.965
			s-16.965,7.595-16.965,16.965c0,1.756,0.35,3.423,0.844,5.025l-88.274,76.751H6.788c-3.748,0-6.788,3.04-6.788,6.788v135.712
			c0,3.748,3.04,6.788,6.788,6.788h271.424c3.748,0,6.788-3.04,6.788-6.788V124.015C285,120.267,281.96,117.227,278.212,117.227z
			 M135.261,50.74c2.205,1.039,4.635,1.676,7.239,1.676s5.035-0.637,7.239-1.676l76.482,66.487H58.778L135.261,50.74z
			 M74.67,203.649c0,7.326,1.933,10.063,1.933,13.056c0,3.352-3.436,5.65-6.788,5.65c-7.938,0-8.56-7.672-8.56-10.236
			c0-11.118-2.022-15.614-9.964-15.614H36.998v18.616c0,4.323-2.82,7.233-7.233,7.233s-7.233-2.91-7.233-7.233v-48.962
			c0-6.438,3.349-8.47,8.47-8.47h24.081c17.197,0,21.783,9.441,21.783,17.646c0,6.877-4.054,13.671-10.932,15.264v0.173
			C73.344,191.826,74.67,197.21,74.67,203.649z M131.386,221.211H96.717c-5.118,0-8.47-2.032-8.47-8.47v-46.582
			c0-6.438,3.352-8.47,8.47-8.47h33.964c4.23,0,7.323,1.237,7.323,5.823c0,4.589-3.092,5.823-7.323,5.823h-27.968V183.1h24.523
			c3.8,0,6.794,1.054,6.794,5.557c0,4.496-2.994,5.56-6.794,5.56h-24.523v15.348h28.673c4.24,0,7.326,1.234,7.326,5.823
			C138.712,219.974,135.625,221.211,131.386,221.211z M203.817,213.353c0,5.733-2.474,9.002-8.563,9.002
			c-4.586,0-6.089-0.971-7.938-3.881l-25.145-39.698h-0.176v36.611c0,4.669-2.644,6.967-6.967,6.967s-6.967-2.298-6.967-6.967
			v-50.373c0-5.999,2.91-8.47,9.083-8.47c3.003,0,5.65,1.145,7.233,3.792l25.321,40.848h0.173v-37.672
			c0-4.679,2.647-6.967,6.977-6.967c4.323,0,6.97,2.289,6.97,6.967v49.841H203.817z M260.622,169.867h-13.671v45.255
			c0,4.323-2.83,7.233-7.233,7.233c-4.416,0-7.236-2.91-7.236-7.233v-45.255h-13.678c-4.141,0-7.502-2.125-7.502-6.089
			c0-3.974,3.361-6.089,7.502-6.089h41.819c4.147,0,7.5,2.115,7.5,6.089C268.122,167.742,264.77,169.867,260.622,169.867z"
              />
            </g>
          </g>
        </svg>
      </span>
    </>
  );
}

function AgentIcon() {
  return (
    <>
      <span className="inline-block text-summer hover:text-summerfive transition-colors duration-200">
        <svg
          fill="currentColor"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 256 190"
          enable-background="new 0 0 256 190"
        >
          <path
            d="M48.12,27.903C48.12,13.564,59.592,2,74.023,2c14.339,0,25.903,11.564,25.903,25.903
	C99.834,42.335,88.27,53.806,74.023,53.806C59.684,53.806,48.12,42.242,48.12,27.903z M191,139h-47V97c0-20.461-17.881-37-38-37H43
	C20.912,60,1.99,79.14,2,98v77c-0.026,8.533,6.001,12.989,12,13c6.014,0.011,12-4.445,12-13v-75h8v88h78v-88h8l0.081,50.37
	c-0.053,8.729,5.342,12.446,10.919,12.63h60C207.363,163,207.363,139,191,139z M252.557,69.693l-21.987-20.12v-23.6h-12.989v11.715
	l-15.196-13.838l-50.596,45.248c-1.273,1.019-2.122,2.717-2.122,4.499c0,3.226,2.632,5.773,5.773,5.773
	c1.528,0,2.971-0.594,3.99-1.613l7.81-7.046v54.331h24.639V87.049h20.924v37.994h24.304V71.136l6.791,6.282
	c1.019,1.188,2.632,1.953,4.33,1.953c3.226,0,5.773-2.632,5.773-5.773C254,72.07,253.491,70.711,252.557,69.693z"
          />
        </svg>
      </span>
    </>
  );
}

function SectionAfterHeader() {
  return (
    <>
      <section className="flex gap-x-2 items-center w-7/10 border-2 border-summer p-8 rounded-2xl flex-wrap justify-around hover:translate-y-2 duration-200 z-0">
        <Image
          alt="Image of real estate properties"
          src="/images/home/house-modern-interior-design-luxury-wallpaper-preview.jpg"
          height={3024}
          width={4032}
          className="w-4xl rounded border-2 border-summerthree"
        />
        <section className="flex flex-col items-center justify-center gap-y-8">
          {/* SVG Icons */}
          <section className="flex gap-x-8"></section>
          {/* Text */}
          <div className="flex flex-col text-6xl font-extrabold text-summerfour">
            <span className="space-x-2">
              {" "}
              <RentIcon />
              <span>Rentals.</span>
            </span>
            <span className="space-x-2">
              {" "}
              <HomeIcon />
              <span>Homes.</span>
            </span>
            <span className="space-x-2">
              <AgentIcon />
              <span>Agents.</span>
            </span>
          </div>
        </section>
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col gap-y-16 items-center w-full">
        <Header />
        <SectionAfterHeader />
        <Footer />
      </section>
    </>
  );
}
