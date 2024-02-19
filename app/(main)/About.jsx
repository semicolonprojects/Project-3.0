import Image from "next/image";
import WhiteShoes from "../../public/img/sepatu_putih(home).png";

const About = () => {
  return (
    <>
      <div className="px-32 flex h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src={WhiteShoes}
            alt="White Shoes"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-[#FFB62B] font-semibold absolute px-28">
        <div className="grid grid-rows-2">
          <p className="text-[50px] md:text-[70px]">Nettoyer</p>
          <div className="relative flex items-center">
            <p className="text-[50px] md:text-[70px]">Shoes</p>
            <div className="h-10 bg-[#4EAEFD] w-1 ml-2 mt-2"></div>
            <div className="pt-2 px-2">
              <p className="text-[#FFB62B] text-[14px]">
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
