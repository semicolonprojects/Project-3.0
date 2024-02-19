"use client";

import TravelKit from "../../public/img/travel_kit.png";
import Services from "../../public/img/services(sepatu&sikat).jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { detectDevice } from "../utils/deviceUtils";

const ServicesProducts = () => {
  const [mobilePlayer, setmobilePlayer] = useState(false);

  const handleResize = () => {
    const { deviceWidth } = detectDevice();

    // Update the state based on the device width
    setmobilePlayer(deviceWidth < 600);
  };

  useEffect(() => {
    // Call the handleResize function when the component mounts
    handleResize();

    // Add event listener to detect changes in screen size
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative px-14 md:px-32">
      <p className="text-yellow-500 font-bold text-2xl md:text-4xl lg:text-5xl">
        Our Services & Products
      </p>
      <div className="grid grid-cols-1 md:grid-flow-col gap-5">
        <div className="w-full md:w-[680px] h-auto rounded overflow-hidden shadow-lg">
          {mobilePlayer ? (
            <iframe
              src="https://www.youtube.com/embed/e_04ZrNroTo?si=Kfp32-YaVymTGwG8"
              title="YouTube video player"
              frameBorder="0"
              width={350}
              height={500}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <iframe
              src="https://www.youtube.com/embed/e_04ZrNroTo?si=Kfp32-YaVymTGwG8"
              title="YouTube video player"
              frameBorder="0"
              width={700}
              height={760}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
        <div className="grid grid-flow-row gap-5">
          <div className="relative w-[300px] h-fit rounded overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <Image
              src={TravelKit}
              alt="..."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-end text-white p-4 [writing-mode:vertical-rl] rotate-180">
              <p className="text-center text-[40px]">TRAVEL KIT</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative w-[300px] h-auto rounded overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <Image
                src={Services}
                alt="..."
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-end text-white p-4 [writing-mode:vertical-rl] rotate-180">
                <p className="text-center text-[40px]">SERVICES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesProducts;
