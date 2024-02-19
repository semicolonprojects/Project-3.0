const Footer = () => {
  return (
    <footer className="p-3 self-end inset-x-0 bottom-0 h-16 text-center font-medium text-sm">
      <div className="grid grid-rows-2 justify-items-center gap-2.5">
        <div className="grid grid-cols-4 gap-8">
          <button className="hover:text-[#FFB62B]">About Us</button>
          <button className="hover:text-[#FFB62B]">Our Services</button>
          <button className="hover:text-[#FFB62B]">Our Products</button>
          <button className="hover:text-[#FFB62B]">Our Stores</button>
        </div>
       <p className="pointer-events-none">©2024 semicolon projects; </p>
      </div>
    </footer>
  );
};

export default Footer;
