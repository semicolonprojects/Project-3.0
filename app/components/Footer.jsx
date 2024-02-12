const Footer = () => {
  return (
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
  );
};

export default Footer;
