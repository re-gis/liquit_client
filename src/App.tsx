import "./App.css";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <div className="flex h-[100%]">
        <div className="w-[15%]  p-5">
          <SideBar />
        </div>
        <div>
          <div className="fixed">
            <Header />
          </div>
          <Routes>
            <Route path="/" />
            <Route path="/borrow" />
            <Route path="/stability" />
            <Route path="/staking" />
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
