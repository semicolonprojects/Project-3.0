"use client";
import Image from "next/image";
import React, { useState, useRef, TouchEvent } from "react";
import Before from "/public/img/before.png";
import After from "/public/img/after.png";
import Link from "next/link";

function Services() {
  const [imageRevealFraq, setImageRevealFraq] = useState(0);
  const imageContainer = React.useRef<HTMLDivElement | null>(null);

  const slide = (xPosition: number): void => {
    const containerBoundingRect =
      imageContainer.current?.getBoundingClientRect();

    if (containerBoundingRect) {
      setImageRevealFraq(() => {
        if (xPosition < containerBoundingRect.left) {
          return 0;
        } else if (xPosition > containerBoundingRect.right) {
          return 1;
        } else {
          return (
            (xPosition - containerBoundingRect.left) /
            containerBoundingRect.width
          );
        }
      });
    }
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
    slide(event.touches.item(0).clientX);
  };

  const handleMouseDown = (): void => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event: MouseEvent): void => {
    slide(event.clientX);
  };

  const handleMouseUp = (): void => {
    window.onmousemove = null;
    window.onmouseup = null;
  };

  return (
    <>
      <div className="relative overflow-hidden px-5 laptop:px-44 py-7">
        <h1 className=" pt-9 font-bold tracking-tight leading-none text-[70px] text-[#FFB62B]">
          Services For You
        </h1>
        <ul className="pt-5 pl-1 flex font-medium text-sm gap-7">
          <li>
            <Link href="#" className="hover:underline ">
              All Services
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline ">
              {" "}
              Shoes Care
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:underline ">
              {" "}
              Sandals Care{" "}
            </Link>
          </li>
          <li>
            <Link href="" className="hover:underline ">
              {" "}
              Bag Care{" "}
            </Link>
          </li>
          <li>
            <Link href="" className="hover:underline ">
              {" "}
              Hat Care{" "}
            </Link>
          </li>
        </ul>

        <div className="py-5 w-full">
          {/* <div
            ref={imageContainer}
            className="max-w-[977px] w-full h-fit mx-auto relative select-none"
          >
            <Image
              src={Before}
              className="h-[530px] w-fill pointer-events-none"
              alt="..."
            />

            <Image
              src={After}
              style={{
                clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
                  imageRevealFraq * 100
                }% 100%, 0 100%)`,
              }}
              className="h-[530px] w-fill absolute inset-0  pointer-events-none"
              alt="..."
            />

            <div
              style={{ left: `${imageRevealFraq * 100}%` }}
              className="absolute inset-y-0"
            >
              <div className="relative h-full">
                <div className="absolute inset-y-0 bg-white w-0.5 -ml-px opacity-50"></div>
                <div
                  style={{ touchAction: "none" }}
                  onMouseDown={handleMouseDown}
                  onTouchMove={handleTouchMove}
                  className="h-10 w-10 -ml-5 -mt-5 rounded-full absolute top-1/2 shadow-2xl bg-white flex items-center justify-center cursor-pointer"
                >
                  <svg
                    data-slot="icon"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-8 text-gray-500 rotate-90 transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div> */}
          {/*  Cards Service 1 */}
          <div className=" py-2 grid grid-cols-2 gap-x-20 gap-y-10 tablet:grid-cols-4 laptop:grid-cols-4 desktop:grid-cols-4 ">
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
          <div className=" py-2 grid grid-cols-2 gap-x-20 gap-y-10 tablet:grid-cols-4 laptop:grid-cols-4 desktop:grid-cols-4 ">
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
      </div>
    </>
  );
}

export default Services;
