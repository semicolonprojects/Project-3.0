import About from "./About";
import Artikel from "./Artikel";
import Maps from "./Maps";
import Partnership from "./Partnership";
import Resi from "./Resi";
import ServicesProducts from "./ServicesProducts";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <div className="w-full min-h-full flex flex-col gap-6">
      <Navbar />
      <About />
      <ServicesProducts />
      <Maps />
      <Resi />
      <Artikel />
      <Partnership />
    </div>
  );
};

export default Page;
