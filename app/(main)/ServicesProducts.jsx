import TravelKit from "../../public/img/travel_kit.png";
import Services from "../../public/img/services(sepatu&sikat).jpg";
import Image from "next/image";

const ServicesProducts = () => {
  return (
    <div className="relative px-32 w-full">
      <p className="text-[#FFB62B] font-bold text-[45px]">
        Our Services & Products{" "}
      </p>
      <div className="grid grid-flow-col gap-5">
        <div className="w-[680px] h-auto rounded overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/e_04ZrNroTo?si=Kfp32-YaVymTGwG8"
            title="YouTube video player"
            frameBorder="0"
            width={703.77}
            height={760}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="grid grid-flow-row gap-5">
          <div className="relative w-[300px] h-fit rounded overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <Image
              src={TravelKit}
              alt="..."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-end text-white p-4 [writing-mode:vertical-rl] rotate-180">
              <p className="text-center text-[40px]">TRAVEL KIT</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative w-[300px] h-auto rounded overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <Image
                src={Services}
                alt="..."
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-end text-white p-4 [writing-mode:vertical-rl] rotate-180">
                <p className="text-center text-[40px]">SERVICES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesProducts;
