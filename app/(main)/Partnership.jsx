import Link from "next/link";

const Partnership = () => {
  return (
    <div className="pt-10 px-4 md:px-8 lg:px-16 xl:px-32 flex flex-col h-auto md:h-96 w-auto">
      <p className="text-[#FFB62B] font-bold text-3xl md:text-4xl lg:text-5xl">
        Want To Become Our Partner ?
      </p>
      <p className="text-[#4EAEFD] px-2 text-base md:text-lg font-bold">
        Learn more about our partnership program below
      </p>
      <div className="py-5 px-2">
        <Link href="/partnership">
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm md:text-base lg:text-lg px-6 md:px-14 py-2 md:py-3 me-2 mb-2 focus:outline-none"
          >
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Partnership;
