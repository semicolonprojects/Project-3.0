import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="h-full flex">
        <Sidebar />
        <main className="inline-flex h-full overflow-y-auto">{children}</main>
      </div>
      <Footer />
    </>
  );
}
