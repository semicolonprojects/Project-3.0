import React from "react";

const Maps = () => {
  return (
    <div className="relative w-auto flex justify-end px-32">
      <div className="grid grid-flow-col gap-36">
        <div></div>
        <div>
          <p className="text-[#FFB62B] font-bold text-[45px]">Our Store </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15804.924498217451!2d112.6598634!3d-7.9750483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629546317a943%3A0xab55c9dea35e5044!2snettoyer.shoes!5e0!3m2!1sen!2sid!4v1707764046040!5m2!1sen!2sid"
            width="550"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Maps;
