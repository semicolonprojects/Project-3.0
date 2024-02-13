import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Resi = () => {
  return (
    <div className="flex justify-end px-32 py-2 ">
      <div className="relative max-w-2xl px-5 flex-col bg-[#D9D9D9] rounded-xl">
        <p className="text-[#FFB62B] font-semibold text-[30px] text-center">
          Cek Resi Kamu Disini
        </p>
        <div className="w-[509px] h-auto grid grid-flow-row gap-6">
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
                className="text-[20px] bg-transparent border-none outline-none text-black"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-white bg-[#4EAEFD] hover:bg-[#FFB62B] focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-[14px] px-14 py-3 me-2 mb-2 focus:outline-none"
            >
              Lacak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resi;
