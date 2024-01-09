import "./App.css";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Stalking from "./Stalking/Stalking";
import { useState } from "react";
import Footer from "./components/Footer";
import NotFoundPage from "./NotFoundScreen/NotFoundPage";

const App: React.FC = () => {
  const [openSideBar, setOpenSidebar] = useState(false);

 
  return (
    <>
      <div className="flex main">
        <div className="lg:w-[15%]  lg:flex">
          <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSidebar}/>
        </div>
        <div className="w-full">
          <div className="">
            <Header openSideBar={openSideBar} setOpenSideBar={setOpenSidebar} />
          </div>
          <Routes>
            <Route path="/" element={<Stalking openSideBar={openSideBar} />}/>
            {/* <Route path="/borrow" />
            <Route path="/stability" /> */}
            <Route
              path="/staking"
              element={<Stalking openSideBar={openSideBar} />}
            />
            <Route path="/*" element={<NotFoundPage />} />
            {/* <Route path="/redemptions" />
            <Route path="/liquidations" />
            <Route path="/analytics" />
            <Route path="/knowledge" />
            <Route path="/tokens" /> */}
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
