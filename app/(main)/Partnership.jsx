import Link from "next/link";

const Partnership = () => {
  return (
    <div className="pt-10 px-7 md:px-8 lg:px-16 xl:px-32 flex flex-col h-auto md:h-96 w-screen">
      <p className="text-[#FFB62B] font-bold text-xl tablet:text-4xl">
        Want To Become Our Partner ?
      </p>
      <p className="text-[#4EAEFD] pt-2 tablet:px-1 font-semibold text-base tablet:text-3xl">
        Learn more about our partnership program below
      </p>
      <div className="py-2.5 tablet:py-5 tablet:px-2">
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
