import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
export default function Layout() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 2000);
  }, []);
  if (!pageLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
