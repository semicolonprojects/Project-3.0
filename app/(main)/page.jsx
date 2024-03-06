import About from "./About";
import Artikel from "./Artikel";
import Maps from "./Maps";
import Partnership from "./Partnership";
import ServicesProducts from "./ServicesProducts";

const Page = () => {
  return (
    <div className=" min-h-full flex flex-col gap-6">
      <About />
      <div className="container w-screen mx-auto">
        <ServicesProducts />
        <Artikel />
      </div>
      <Maps />
      <Partnership />
    </div>
  );
};

export default Page;
