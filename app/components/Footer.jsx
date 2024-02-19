const Footer = () => {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 w-full flex flex-col md:flex-row justify-end pb-10 md:pb-20">
        <div className="flex-col text-center md:text-end">
          <p className="text-[#FFB62B] font-bold text-2xl md:text-3xl lg:text-4xl">
            Check Promo Kami Bulan Ini!
          </p>
          <p className="text-[#4EAEFD] font-bold text-base md:text-lg">
            Ada Promo-promo yang menunggu kamu, cek dibawah ini
          </p>
          <div className="py-5 md:py-0 flex justify-center md:justify-end">
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm md:text-base lg:text-lg px-6 md:px-14 py-2 md:py-3 me-2 mb-2 focus:outline-none"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <footer className="p-3 self-end inset-x-0 bottom-0 h-16 text-center text-sm">
        <div className="grid grid-rows-2 justify-items-center gap-2.5">
          <div className="grid grid-cols-4 gap-8">
            <p>About Us</p>
            <p>Our Services</p>
            <p>Our Products</p>
            <p>Our Stores</p>
          </div>
          ©2024 semicolon projects;
        </div>
      </footer>
    </>
  );
};

export default Footer;
