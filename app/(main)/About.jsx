import Image from "next/image";
import WhiteShoes from "../../public/img/sepatu_putih(home).png";

const About = () => {
  return (
    <>
      <div className="md:px-32 flex h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src={WhiteShoes}
            alt="White Shoes"
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </div>

      <div className="text-[#FFB62B] font-bold absolute md:px-28 px-3 py-7">
        <div className="grid grid-rows-2">
          <p className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            Nettoyer
          </p>
          <div className="relative flex items-center">
            <p className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
              Shoes
            </p>
            <div className="h-10 bg-blue-500 w-1 ml-2 mt-2 md:mt-0"></div>
            <div className="md:pl-2">
              <p className="text-[#FFB62B] text-sm md:text-base">
                Make Your Foot <br />
                Sparks
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5 text-[#4EAEFD] text-xs max-w-72">
          <p>
            Nettoyer.Shoes merupakan usaha di bidang jasa laundry sepatu, tas,
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
