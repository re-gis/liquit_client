import "./App.css";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Stalking from "./Stalking/Stalking";

const App: React.FC = () => {
  return (
    <>
      <div className="flex h-[100%] main">
        <div className="w-[15%]   ">
          <SideBar />
        </div>
        <div className="w-full">
          <div className="">
            <Header />
          </div>
          <Routes>
            <Route path="/" />
            <Route path="/borrow" />
            <Route path="/stability" />
            <Route path="/staking" element={<Stalking/>} />
            <Route path="/lp" />
            <Route path="/redemptions" />
            <Route path="/liquidations" />
            <Route path="/analytics" />
            <Route path="/knowledge" />
            <Route path="/tokens" />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
