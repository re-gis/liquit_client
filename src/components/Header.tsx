/* eslint-disable */
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { LightMode } from "@mui/icons-material";
const Header: React.FC<openSideBarProp> = ({ openSideBar, setOpenSideBar }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const shadowStyle = {
    boxShadow: "0px 0px 12px 0px rgba(118, 47, 193, 0.7)",
  };
  const handleHovered = () => {
    setIsHovered(true);
  };
  const handleUnHovered = () => {
    setIsHovered(false);
  };

  const handleModel = () => {
    setOpenSideBar((prev) => !prev);
  };

  const handleLightClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex xs:flex-row sm:flex-row  items-center sm:justify-between  xs:justify-around  py-2 sm:p-5 lg:p-5 md:p-5 xs:p-3 relative xs:">
      <div className="flex xs:flex-col sm:flex-row gap-2 items-center ">
        <img
          src="/images/logo.png"
          alt="logo"
          className=" h-[40px] w-[40px] md:block sm:block lg:hidden"
        />
        <img
          src="/images/battery.png"
          alt=""
          className="h-[28px] w-[20px] xs:hidden sm:block md:block lg:block"
        />
        <div className="xs:hidden sm:block md:block lg:block">
          <p>
            {" "}
            <span className="text-white sm:text-xs">TCR</span>{" "}
            <span className=" lg:text-sm md:text-sm sm:text-xs">
              (Normal Mode)
            </span>
          </p>
          <div>
            <span className="text-white">22.66% </span>
            <span
              className="hover:cursor-pointer"
              onMouseOver={handleHovered}
              onMouseOut={handleUnHovered}
            >
              <HelpOutlinedIcon sx={{ fontSize: "20px" }} />
            </span>
          </div>
        </div>
      </div>

      <div className="lg:flex flex-row  gap-12 items-center  justify-center md:hidden sm:hidden xs:hidden">
        <div className="flex">
          <div className="flex flex-row  items-center">
            <img
              src="/images/loan.png"
              alt=" loan"
              className="w-[28px] h-[28px]"
            />
            <div>
              <p className="text-white">LOAN</p>
              <p className="text-xs">$0.00001</p>
            </div>
          </div>
          <span className="text-xs text-green-500"> 1.84%</span>
        </div>
        <div className="flex">
          <div className="flex flex-row  items-center">
            <img
              src="/images/usdl.png"
              alt=" loan"
              className="w-[28px] h-[28px]"
            />
            <div>
              <p className="text-white">USDL</p>
              <p className="text-xs">$1.230401</p>
            </div>
          </div>
          <span className="text-xs text-red-500"> 0.84%</span>
        </div>

        <div className="flex sm:text-xs">
          <div className="flex flex-row  items-center">
            <img
              src="/images/PLs.png"
              alt=" loan"
              className="w-[28px] h-[28px]"
            />
            <div>
              <p className="text-white sm:text-xs">PLS</p>
              <p className="text-xs">$0.00001</p>
            </div>
          </div>
          <span className="text-xs text-green-500"> 2.33%</span>
        </div>
      </div>

      <div className="flex xs:flex-row xs:w-[100%] sm:w-[auto] sm:flex-row xs:px-5 flex-row gap-8 xs:gap-1 sm:gap-3 xs:justify-between">
        <Link
          to="#"
          className=" rounded-md bg-[#762fc1] text-white sm:text-xs xs:text-xs  lg:p-2 md:p-2 sm:p-1 xs:p-1 hover:bg-[#3e334b] flex justify-center items-center "
        >
          <span>
            <AccountBalanceWalletOutlinedIcon />
          </span>
          Connect To your Wallet
        </Link>
        <Link
          to="#"
          className="rounded-md text-center bg-[#3e334b] text-white  p-2 lg:flex items-center justify-center  hover:bg-[#762fc1] md:hidden sm:hidden  xs:hidden"
        >
          Tour{" "}
          <span>
            <PlayCircleFilledOutlinedIcon />
          </span>
        </Link>
        <button
          className={
            isClicked
              ? "bg-[#3e334b]  xs:w-[auto] rounded-3xl flex items-center justify-center p-2"
              : "bg-black  xs:w-[auto] rounded-3xl flex items-center justify-center p-2 hover:bg-[#3e334b]"
          }
          onClick={handleLightClick}
        >
          {!isClicked ? (
            <DarkModeIcon
              sx={{
                color: "#762fc1 ",
                ":hover": { color: "white" },
                fontSize: "32px",
              }}
            />
          ) : (
            <LightMode
              sx={{
                color: "white",
                ":hover": { color: "white" },
                fontSize: "32px",
              }}
            />
          )}
        </button>
        <button
          onClick={handleModel}
          className="md:flex sm:flex lg:hidden  items-center relative z-50 opacity-100"
        >
          {openSideBar ? (
            <CloseIcon sx={{ fontSize: "30px" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "30px" }} />
          )}
        </button>
      </div>

      {/* when you hover help icon */}
      {isHovered ? (
        <div
          style={shadowStyle}
          className="p-2 text-sm font-extralight absolute top-16 bg-[#16121a]"
        >
          <p> TCR : Total Collateral Ratio and is shown as : </p>
          <p> 1 red bar - less than 110% -recovery mode</p>
          <p> 2 orange -between 150% and 110% -recovery</p>
          <p> 3 yellow - between 200% and 150% -normal</p>
          <p> 4-6 green - above 200% -normal mode</p>
          <div>
            <p>You can be liquidated below 150% . In order to </p>
            <p>help avoid liquidation in Normal Mode and </p>
            <p>Recovery Mode , it is strongly recommended that</p>
            <p>users keep their individual collateral ratio</p>
            <p>significantly above 150%</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
