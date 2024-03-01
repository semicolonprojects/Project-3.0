"use client"
import Image from "next/image";
import WhiteShoes from "../../public/img/sepatu_putih(home).png";
import Logo2 from "../../public/img/logo1.png";



const About = () => {


  return (
    <>
      <div className="w-screen h-auto">
        <div className="hidden tablet:block inset-0">
          <Image
            src={WhiteShoes}
            alt="White Shoes"
            className=" w-full h-full tablet:h-3/4 desktop:h-full object-fill"
          />
        </div>
      </div>

      <div className="text-[#FFB62B] font-bold absolute tablet:px-32 px-3 py-10 tablet:py-32 ">
        <div className="block tablet:hidden">
        <Image
            src={Logo2}
            alt="logo2"
            className="items-center w-80 h-full pb-5"
          />
        </div>
        <div className="inline-flex tablet:grid tablet:grid-rows-2">
          <p className="text-4xl tablet:text-5xl lg:text-5xl xl:text-6xl">
            Nettoyer
          </p>
          <div className="block px-3 tablet:px-0 tablet:relative tablet:flex items-center">
            <p className="text-4xl tablet:text-5xl lg:text-5xl xl:text-6xl">
              Shoes
            </p>
            <div className="hidden tablet:block tablet:h-10 bg-blue-500 w-1 ml-1.5 tablet:ml-2 mt-2 "></div>
            <div className="pl-0 tablet:pl-1">
              <p className="text-[#FFB62B] text-base mt-1 tablet:mt-2 -ml-[175px] tablet:ml-0 tablet:relative tablet:text-base ">
                Make Your Foot <br /> Sparks
              </p>
            </div>
          </div>
        </div>
        <div className="pt-2 font-semibold tablet:font-semibold tablet:pt-5 px-1 tablet:px-0 text-[#4EAEFD] text-sm tablet:text-base tracking-tighter leading-relaxed max-w-96">
          <p>
            Nettoyer Shoes merupakan usaha di bidang jasa laundry sepatu, tas,
            dan topi yang berdiri di kota Malang sejak tahun 2019.
            Nettoyer.Shoes beralamatkan di Jl. Danau Ranau VI G5i7 sawojajar,
            Kota Malang, Jawa Timur. Saat ini kami sudah berhasil menangani
            lebih dari ribuan pasang Sepatu, ratusan tas dan topi, yang berarti
            sudah dipercaya oleh Masyarakat kota Malang untuk menjadi partner
            mereka dalam perawatan Sepatu, tas, dan topi. Pada tahun 2022
            Nettoyer.Shoes mulai melebarkan sayapnya ke Kota Purwokerto untuk
            membantu Masyarakat Purwokerto merawat Sepatu, tas, dan topinya.
            Cabang ke 2 ini mulai diperkenalkan pada tanggal 24 September 2022.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
