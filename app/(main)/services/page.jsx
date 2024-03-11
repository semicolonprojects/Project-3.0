"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Before from "/public/img/before.png";
import After from "/public/img/after.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Page() {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const res = await fetch("/api/v1/services-dummy-data");
      const data = await res.json();
      setServices(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <div className="py-16 tablet:py-5 w-full">
        {/*  Cards Service 1 */}
        <div className="py-2 grid grid-rows-1 gap-x-20 gap-y-10 tablet:grid-cols-4 laptop:grid-cols-4 desktop:grid-cols-4 justify-center tablet:justify-start items-center tablet:items-start">
          <Link href="/services/deep-clean" className="group">
            <div className="aspect-h-1 aspect-w-1 w-[289px] h-[389px] overflow-hidden  bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src="/img/1.png"
                alt="..."
                width="289"
                height="389"
                className="h-full w-full object-cover  group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-2 text-sm text-gray-900 font-semibold">
              Services For Your Shoes & Sandals
            </h3>
          </Link>
          <Link href="/services/reglue" className="group">
            <div className="aspect-h-1 aspect-w-1  w-[289px] h-[389px]  overflow-hidden  bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src="/img/2.png"
                alt="..."
                width="289"
                height="389"
                className="h-full w-full object-cover  group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-2 text-sm text-gray-900 font-semibold">
              Services For Your Bags
            </h3>
          </Link>
          <Link href="" className="group">
            <div className="aspect-h-1 aspect-w-1  w-[289px] h-[389px]  overflow-hidden  bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src="/img/3.png"
                alt="..."
                width="289"
                height="389"
                className="h-full w-full object-cover  group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-2 text-sm text-gray-900 font-semibold">
              Services For Your Hats
            </h3>
          </Link>
          <Link href="" className="group">
            <div className="aspect-h-1 aspect-w-1  w-[289px] h-[389px]  overflow-hidden  bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src="/img/3.png"
                alt="..."
                width="289"
                height="389"
                className="h-full w-full object-cover  group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-2 text-sm text-gray-900 font-semibold">
              Other Services
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;
