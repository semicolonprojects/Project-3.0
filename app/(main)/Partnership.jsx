const Partnership = () => {
  return (
    <div className="px-32 flex-col h-96 w-full">
      <p className="text-[#FFB62B] font-extrabold text-[45px]">
        Want To Become Our Partner?
      </p>
      <p className="text-[#4EAEFD] text-[16px] font-bold">
        Learn more about our partnership program below
      </p>
      <div className="py-5">
        <button
          type="button"
          className="text-white bg-[#4EAEFD] hover:bg-[#FFB62B] focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-[14px] px-14 py-3 me-2 mb-2 focus:outline-none"
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Partnership;
