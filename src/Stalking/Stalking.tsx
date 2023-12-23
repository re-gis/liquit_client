import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import React, { useState, ChangeEvent } from "react";

const Stalking: React.FC<openSideBarPropValue> = ({ openSideBar }) => {
  const [stake, setStake] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [loan, setLoan] = useState("0.00");
  const shadowStyle = {
    boxShadow: "0px 0px 12px 0px rgba(118, 47, 193, 0.7)",
    // Add other styles as needed
  };
  const shadowStyle1 = {
    boxShadow: isActive ? "0px 0px 12px 0px rgba(118, 47, 193, 0.7)" : " none",
    // Add other styles as needed
  };

  const handleInputFocus = () => {
    setIsActive(true);
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };

  const handleStake = () => {
    setStake(true);
  };
  const handleUnstake = () => {
    setStake(false);
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoan(e.target.value);
  };

  //   hovering handling
  const handleHovered = () => {
    setIsHovered(true);
  };
  const handleUnHovered = () => {
    setIsHovered(false);
  };

  //   handle hove of footer ones







  return (
    <div>
      <div
        className={`flex  flex-col  justify-center mt-16 lg:gap-16 md:gap-16 sm:gap-8 pb-6 `}
      >
        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center   justify-center   lg:gap-12 md:gap-5 sm:gap-3 xs:gap-3 lg:px-0 md:px-0 sm:px-8 xs:px-4">
          <hr className="   border-[#3e334b] lg:w-56 md:w-28  sm:w-0" />
          <p className=" font-semibold md:text-3xl sm:w-full sm:text-xl self-center   text-white ">
            Stake your LOAN token to earn USDL and PLS
          </p>
          <hr className="h-2   lg:w-96 md:w-28 border-[#3e334b] sm:w-full xs:w-full" />
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:gap-24 md:gap-8 sm:gap-5 lg:items-center md:items-center sm:items-start md:justify-center lg:justify-center sm:justify-start relative  ">
          <div className="flex flex-col sm:gap-5 xs:gap-8  items-center  flex-1 lg:max-w-[500px] md:max-w-[500px] sm:w-full">
            <h1 className="text-2xl text-white font-semibold ">Stake LOAN</h1>
            <div
              className="w-[100%] border border-[#762fc1] rounded-lg   flex flex-col lg:gap-16 md:gap-16 sm:gap-10 xs:gap-6 p-4 bg-black"
              style={shadowStyle}
            >
              <div className="flex flex-row lg:gap-10 md:gap-2 xs:gap-1 justify-between">
                <button
                  className={` ${
                    stake ? "lg:bg-[#2e2834] md:bg-[#2e2834] sm:border-b-4 xs:border-b-2 border-[#2e2834]" : ""
                  } text-gray-500 hover:text-white py-0 lg:px-8 md:px-5 sm:px-12 lg:rounded-lg md:rounded-lg sm:rounded-none`}
                  onClick={handleStake}
                >
                  Stake
                </button>
                <button
                  className={`  hover:text-white py-3 lg:px-12 md:px-5 sm:px-12 lg:rounded-lg md:rounded-lg sm:rounded-none ${
                    stake ? "text-gray-500" : "lg:bg-[#2e2834] md:bg-[#2e2834] sm:border-b-4 xs:border-b-2 border-[#2e2834]"
                  }`}
                  onClick={handleUnstake}
                >
                  UnStake
                </button>
                <div className="flex flex-col lg:ap-2 md:gap-2 sm:gap-0">
                  <span className="font-extralight">Current APR</span>
                  <span className="text-white">64.70%</span>
                </div>
              </div>
              <div className="relative flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="0.00"
                  className="bg-[#100d14] border border-[#3e334b]  rounded-lg hover:outline-none text-right placeholder:text-right px-2 py-4 w-full "
                  onChange={handleOnChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  style={shadowStyle1}
                />
                <div className="flex flex-row absolute items-center top-4 text-xs left-2">
                  <p>{stake ? "STAKE LOAN" : "UNSTAKE LOAN"}</p>
                  <img src="/images/loan.png" alt="" className="w-6 h-6" />
                </div>
                <p className="self-end font-extralight text-sm">
                  {stake ? "Wallet" : "Staked"} : 0.00 LOAN
                </p>
              </div>
              <div className="flex flex-row lg:gap-3 md:gap-3 sm:gap-1 xs:gap-1 w-full justify-between items-center">
                <button className="rounded-md max-w-[25%]  hover:bg-[#3e334b] bg-[#2e2834] text-[#727379] hover:text-white font-extralight text-sm py-1 px-10">
                  25%
                </button>
                <button className="rounded-md max-w-[25%]   hover:bg-[#3e334b] bg-[#2e2834] text-[#727379] hover:text-white font-extralight text-sm py-1 px-10">
                  50%
                </button>
                <button className="rounded-md max-w-[25%]   hover:bg-[#3e334b] bg-[#2e2834] text-[#727379] hover:text-white font-extralight text-sm py-1 px-10">
                  75%
                </button>
                <button className="rounded-md max-w-[25%] hover:bg-[#3e334b] bg-[#2e2834] text-[#727379] hover:text-white font-extralight text-sm py-1 px-10">
                  100%
                </button>
              </div>
              <button className="bg-[#762fc1] text-white p-3 rounded-md hover:bg-[#3e334b]">
                Connect Your Wallet
              </button>
            </div>
          </div>
          <div className={` ${openSideBar?"xs:hidden sm:hidden md:flex lg:flex":""} flex flex-1 flex-col gap-5  items-center lg:max-w-[500px] md:max-w-[500px] sm:w-full xs:w-full lg:bg-inherit md:bg-inherit sm:bg-[#16121A] xs:bg-[#16121A] `}>
            <h1 className="text-2xl text-white font-semibold ">Staking Pool</h1>
            <div className="w-full flex flex-col gap-12 p-4">
              <div className="flex flex-col gap-5">
                <div className="flex lg:flex-row md:flex-row sm:flex-col  xs:flex-col justify-between items-center">
                  <p className="text-sm font-light">
                    Your {stake ? "New Stake" : "Unstake"}
                  </p>
                  <p className="text-white">{loan}LOAN</p>
                </div>
                <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col  justify-between items-center">
                  <p className="text-sm font-light">Your Existing Stakes</p>
                  <p className="text-white">0.00 LOAN</p>
                </div>
                <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col  justify-between items-center">
                  <p className="text-sm font-light">
                    Your Total Staking Balance
                  </p>
                  <p className="text-white">{loan}LOAN</p>
                </div>
                <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col  justify-between items-center">
                  <p className="text-sm font-light flex flex-row gap-2">
                    <span>Your Pool Share</span>
                    <span
                      onMouseOver={handleHovered}
                      onMouseOut={handleUnHovered}
                    >
                      <HelpOutlinedIcon sx={{ fontSize: "15px" }} />
                    </span>
                  </p>
                  <p className="text-white">0.00 %</p>
                </div>
              </div>

              <h1 className="text-2xl text-white font-semibold  self-center">
                Your Rewards
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-between items-center">
                  <p className="text-sm font-light">Redemption Fees</p>
                  <p className="text-white">0.00 PLS</p>
                </div>
                <div className="flex lg:flex-row md:flex-row sm:flex-col  xs:flex-col justify-between items-center">
                  <p className="text-sm font-light">Issuance Gain</p>
                  <p className="text-white">0.00 USDL</p>
                </div>
              </div>

              <button
                className="bg-[#762fc1] text-white p-3 rounded-md opacity-60"
                disabled
              >
                Claim
              </button>
            </div>
          </div>
          {isHovered ? (
            <div
              style={shadowStyle}
              className="p-3 text-sm font-extralight absolute  min-w-fit lg:top-48 md:top-48 sm:bottom-72  lg:left-96 sm:left-48   z-50 bg-[#16121a]"
            >
              <p> If your pool share size smaller than </p>
              <p> 0.000000% the system will display 0.00%</p>
            </div>
          ) : (
            ""
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Stalking;
