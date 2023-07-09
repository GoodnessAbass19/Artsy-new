import { Outlet } from "react-router-dom";
import Footer from "../Components/UI/Footer";
import Nav from "../Components/UI/Nav";

const Rootlayouts = () => {
  return (
    <>
      <Nav />

      <Outlet />

      <Footer />
    </>
  );
};

export default Rootlayouts;
