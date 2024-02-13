const Footer = () => {
  return (
    <>
      <div className="px-32 w-full flex justify-end pb-20">
        <div className="flex-col">
          <p className="text-[#FFB62A] font-bold text-[40px] text-end">
            Check Promo Kami Bulan Ini !
          </p>
          <p className="text-[#4EAEFD] font-bold text-end">
            Ada Promo-promo yang menunggu kamu, cek dibawah ini
          </p>
          <div className="py-5 flex justify-end">
            <button
              type="button"
              className="text-white bg-[#4EAEFD] hover:bg-[#FFB62B] focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-[14px] px-14 py-3 me-2 mb-2 focus:outline-none"
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
