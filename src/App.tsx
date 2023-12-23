import "./App.css";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Stalking from "./Stalking/Stalking";
import { useState } from "react";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [openSideBar, setOpenSidebar] = useState(false);

 
  return (
    <>
      <div className="flex main">
        <div className="lg:w-[15%]  lg:flex">
          <SideBar openSideBar={openSideBar} />
        </div>
        <div className="w-full">
          <div className="">
            <Header openSideBar={openSideBar} setOpenSideBar={setOpenSidebar} />
          </div>
          <Routes>
            <Route path="/" />
            <Route path="/borrow" />
            <Route path="/stability" />
            <Route
              path="/staking"
              element={<Stalking openSideBar={openSideBar} />}
            />
            <Route path="/lp" />
            <Route path="/redemptions" />
            <Route path="/liquidations" />
            <Route path="/analytics" />
            <Route path="/knowledge" />
            <Route path="/tokens" />
          </Routes>

          <div
            className={`w-[100%] flex justify-center items-center ${
              openSideBar ? "xs:hidden sm:hidden md:hidden lg:flex" : ""
            }`}
          >
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
