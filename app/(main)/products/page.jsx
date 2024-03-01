"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Spinner from "../../components/Spinner";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await fetch("/api/v1/dummy-data");
      const data = await res.json();
      setProducts(data.data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="hidden tablet:block relative overflow-hidden px-24">
        <h1 className="py-5 font-bold tracking-tight leading-none text-xl tablet:text-[45px] text-[#FFB62B]">
          Product For Your Shoes
        </h1>
        <ul className="flex font-medium text-sm gap-7">
          <li>
            <a href="" className="hover:underline ">
              Show All
            </a>
          </li>
          <li>
            <a href="" className="hover:underline ">
              {" "}
              Our Services
            </a>
          </li>
          <li>
            <a href="" className="hover:underline ">
              {" "}
              Our Product{" "}
            </a>
          </li>
          <li>
            <a href="" className="hover:underline ">
              {" "}
              Promos{" "}
            </a>
          </li>
        </ul>
        <div className="py-5">
          {/*  Cards Service 1 */}
          {loading ? (
            <div className="h-screen w-auto flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <div className=" py-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-9">
              {products?.map((product) => (
                <Link
                  href={`products/${product.slug}`}
                  className="group"
                  key={product.id}
                >
                  <div className="aspect-h-1 aspect-w-1 w-[217px] h-[287px] overflow-hidden bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                      src={product.imageUrl}
                      alt={product.productName}
                      width="217"
                      height="287"
                      className="h-full w-full object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-2 text-sm text-gray-900 font-semibold">
                    {product.productName}
                  </h3>
                  <h3 className="mt-2 text-sm text-gray-900 font-medium">
                    Rp {product.priceIDR}
                  </h3>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div class="block tablet:hidden h-screen w-screen overflow-x-hidden flex-col justify-center items-center">
        <h1 class="text-center py-5 font-bold tracking-tight leading-none text-xl text-[#FFB62B]">
          Product For Your Shoes
        </h1>
        <ul class="max-w-72 mx-auto flex font-medium text-sm gap-7 text-center">
          <li>
            <Link href="#" class="hover:underline">
              Show All
            </Link>
          </li>
          <li>
            <Link href="/services" class="hover:underline">
              Our Services
            </Link>
          </li>
          <li>
            <Link href="/products" class="hover:underline">
              Our Product
            </Link>
          </li>
          <li>
            <Link href="#" class="hover:underline">
              Promos
            </Link>
          </li>
        </ul>
        <div className="py-5 flex justify-center items-center">
          {/*  Cards Service 1 */}
          {loading ? (
            <div className="h-screen w-auto flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <div className=" py-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-9">
              {products?.map((product) => (
                <Link
                  href={`products/${product.slug}`}
                  className="group"
                  key={product.id}
                >
                  <div className="aspect-h-1 aspect-w-1 w-[217px] h-[287px] overflow-hidden bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                      src={product.imageUrl}
                      alt={product.productName}
                      width="217"
                      height="287"
                      className="h-full w-full object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-2 text-sm text-gray-900 font-semibold text-center">
                    {product.productName}
                  </h3>
                  <h3 className="mt-2 text-sm text-gray-900 font-medium text-center">
                    Rp {product.priceIDR}
                  </h3>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
