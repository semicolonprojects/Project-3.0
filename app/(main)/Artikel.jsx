import Image from "next/image";

const Artikel = () => {
  return (
    <div className="py-5 px-4 md:px-8 lg:px-16 xl:px-32 w-auto">
      <p className="py-5 text-[#FFB62B] font-bold text-3xl md:text-4xl lg:text-5xl">
        Artikel
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-8">
        <div className="w-[66%] h-fit tablet:w-[96%] rounded overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1682687219612-b12805df750d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
            width={300}
            height={300}
            className="object-fill w-full "
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              lore ipsum dolor sit amet.
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="w-[66%] h-fit tablet:w-[96%] rounded overflow-hidden mx-6 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1682687219612-b12805df750d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
            width={300}
            height={300}
            className="object-fill w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              lore ipsum dolor sit amet.
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="w-[66%] h-fit tablet:w-[96%] rounded overflow-hidden mx-6 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1682687219612-b12805df750d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
            width={300}
            height={300}
            className="object-fill w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              lore ipsum dolor sit amet.
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
