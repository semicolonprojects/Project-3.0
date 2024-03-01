import About from "./About";
import Artikel from "./Artikel";
import Maps from "./Maps";
import Partnership from "./Partnership";
import ServicesProducts from "./ServicesProducts";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <div className=" min-h-full flex flex-col gap-6">
      <Navbar />
      <About />
      <ServicesProducts />
      <Artikel />
      <Maps />
      <Partnership />
    </div>
  );
};

export default Page;
