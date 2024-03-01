"use client";

import TravelKit from "../../public/img/travel_kit.png";
import Services from "../../public/img/services(sepatu&sikat).jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { detectDevice } from "../utils/deviceUtils";
import Link from "next/link";
import Spinner from "../components/Spinner";

const ServicesProducts = () => {
  const [mobilePlayer, setmobilePlayer] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    // Simulating map loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []); // useEffect runs once after the initial render

  return (
    <div className="relative pt-24 pb-5 px-3 tablet:mx-28">
      <p className="text-yellow-500 py-5 font-bold text-2xl md:text-4xl lg:text-5xl">
        Our Services & Products
      </p>
      <div className="grid grid-cols-1 tablet:grid-flow-col gap-5">
        <div className="w-full tablet:w-[835px] h-auto rounded overflow-hidden">
          {mobilePlayer ? (
            <iframe
              src="https://www.youtube.com/embed/e_04ZrNroTo?si=Kfp32-YaVymTGwG8"
              title="YouTube video player"
              frameBorder="0"
              width={365}
              height={500}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <iframe
              src="https://www.youtube.com/embed/-T9xnc9RmDE?si=cx3H1SiS1ur8nLWM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          )}
        </div>
        <div className="grid grid-flow-row gap-5">
          <div className="relative w-[66%] tablet:w-[380px] tablet:h-[380px] h-full rounded overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <Image
              src={TravelKit}
              alt="..."
              className="w-full h-full bg-fill"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-end font-bold text-white p-4 [writing-mode:vertical-rl] rotate-180">
              <p className="text-center text-[40px]">PRODUCTS</p>
            </div>
          </div>
          <Link href="/services">
            <div className="rounded overflow-hidden shadow-lg">
              <div className="relative w-[66%] tablet:w-[380px] tablet:h-[380px] h-full  rounded overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <Image
                  src={Services}
                  alt="..."
                  className="w-full h-full object-fill"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-end font-bold text-white p-4 [writing-mode:vertical-rl] rotate-180">
                  <p className="text-center text-[40px]">SERVICES</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesProducts;
