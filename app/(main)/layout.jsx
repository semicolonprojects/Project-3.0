import Footer from "../components/Sidebar/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

export default function HomeLayout({ children }) {
  return (
    <div className="grid grid-cols-8">
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
}
