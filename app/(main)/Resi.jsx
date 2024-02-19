"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ModalResi from "../components/Modal/ModalResi";

const Resi = () => {
  const [showModal, setshowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const searchButton = (e) => {
    if (inputValue === null || inputValue.trim() === "") {
      toast.error("Masukkan Nomor Resi Terlebih Dahulu", {
        position: "bottom-right",
      });
      setshowModal(false);
      return;
    }
    setshowModal(true);
  };

  return (
    <>
      <div className="flex justify-center md:px-32 md:justify-end md:w-auto py-2 w-screen">
        <div className="relative max-w-max px-5 flex-col bg-[#D9D9D9] rounded-xl">
          <p className="text-yellow-500 font-semibold text-xl md:text-2xl lg:text-3xl text-center">
            Cek Resi Kamu Disini
          </p>
          <div className="w-full md:w-[509px] h-auto grid grid-flow-row gap-6">
            <div className="flex justify-center py-3">
              <div className="grid grid-flow-col p-3 bg-gray-300 rounded-xl max-w-sm justify-center gap-4">
                <MagnifyingGlassIcon
                  className="flex justify-center"
                  width={30}
                  height={30}
                  fill={"#000000"}
                />
                <input
                  type="text"
                  placeholder="Cek Resi Kamu Disini"
                  className="text-lg md:text-xl bg-transparent border-none outline-none text-black"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={searchButton}
                type="button"
                className="place-self-end text-white bg-blue-500 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm md:text-base lg:text-lg px-6 md:px-14 py-2 md:py-3 me-2 mb-2 focus:outline-none"
              >
                Lacak
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalResi
        showModal={showModal}
        inputValue={inputValue}
        setshowModal={setshowModal}
      />
    </>
  );
};

export default Resi;
