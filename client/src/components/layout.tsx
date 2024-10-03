import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function LayoutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutPage;
