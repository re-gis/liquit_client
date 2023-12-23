import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import { useState } from "react";

const Footer: React.FC = () => {
  const [isHoveredPLS, setIsHoveredPLS] = useState(false);
  const [isHoveredRatio, setIsHoveredRatio] = useState(false);
  const [isHoveredStake, setIsHoveredStake] = useState(false);
  const [isHoveredStability, setIsHoveredStability] = useState(false);
  const [isHoveredLoan, setIsHoveredLoan] = useState(false);
  const [isHoveredStaking, setIsHoveredStaking] = useState(false);
  const [isHoveredSupply, setIsHoveredSupply] = useState(false);
  //   handle hove of footer ones
  const handleHoveredPLS = () => {
    setIsHoveredPLS(true);
  };
  const handleUnHoveredPLS = () => {
    setIsHoveredPLS(false);
  };

  const handleHoveredRatio = () => {
    setIsHoveredRatio(true);
  };
  const handleUnHoveredRatio = () => {
    setIsHoveredRatio(false);
  };

  const handleHoveredStake = () => {
    setIsHoveredStake(true);
  };
  const handleUnHoveredStake = () => {
    setIsHoveredStake(false);
  };

  const handleHoveredStability = () => {
    setIsHoveredStability(true);
  };
  const handleUnHoveredStability = () => {
    setIsHoveredStability(false);
  };

  const handleHoveredLoan = () => {
    setIsHoveredLoan(true);
  };
  const handleUnHoveredLoan = () => {
    setIsHoveredLoan(false);
  };

  const handleHoveredStaking = () => {
    setIsHoveredStaking(true);
  };
  const handleUnHoveredStaking = () => {
    setIsHoveredStaking(false);
  };

  const handleHoveredSupply = () => {
    setIsHoveredSupply(true);
  };
  const handleUnHoveredSupply = () => {
    setIsHoveredSupply(false);
  };

  const shadowStyle = {
    boxShadow: "0px 0px 12px 0px rgba(118, 47, 193, 0.7)",
    // Add other styles as needed
  };
  return (
    <div className="flex mt-9 md:w-[90%] lg:w-[90%] sm:w-full xs:w-full justify-center flex-col md:gap-3 lg:gap-3 sm:gap-0">
      <h1 className="self-center font-semibold text-3xl text-white">
        Protocol Performance
      </h1>

      <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col rounded-md py-3 justify-center lg:items-start md:items-start sm:items-center xs:items-start lg:gap-0 md:gap-0 sm:gap-8 xs:gap-10 lg:bg-[#111017]   sm:bg-[#0a0c12]  xs:bg-[#0a0c12] lg:w-[100%]">
        <div className="flex flex-col gap-1 md:w-[20%]  sm:w-full xs:w-full items-center text-xs   lg:border-r  md:border-r sm:border-none  xs:border-none border-[#cac2f3]">
          <p className="text-sm">Total Value</p>
          <p className="text-sm">
            <span>Locked</span>{" "}
            <span
              onMouseOver={handleHoveredPLS}
              onMouseOut={handleUnHoveredPLS}
            >
              <HelpOutlinedIcon sx={{ fontSize: "18px" }} />
            </span>
          </p>
          <p className="text-white">717.18B PLS</p>
          <p className="text-white">(41.41M USD)</p>
          {isHoveredPLS ? (
            <div
              style={shadowStyle}
              className="p-2 text-sm font-extralight absolute   rounded-md left-[29rem]  z-50 bg-[#16121a]"
            >
              <p> The total value of PLS locked as collateral </p>
              <p>in the system . Shown as total PLS and</p>
              <p>USD value.</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1 md:w-[20%]  sm:w-full xs:w-full items-center text-xs  lg:border-r  md:border-r sm:border-none xs:border-none border-[#272531]">
          <p className="text-sm">Total Collateral</p>
          <p className="text-sm">
            <span>Ratio</span>{" "}
            <span
              onMouseOver={handleHoveredRatio}
              onMouseOut={handleUnHoveredRatio}
            >
              <HelpOutlinedIcon sx={{ fontSize: "18px" }} />
            </span>
          </p>
          <p className="text-white">228.21%</p>
          <p className="text-white">(41.41M USD)</p>
          {isHoveredRatio ? (
            <div
              style={shadowStyle}
              className="p-2 text-sm font-extralight absolute   rounded-md left-[40rem]  z-50 bg-[#16121a]"
            >
              <p> The ration of the USD value of the entire </p>
              <p> system collateral divided by the entire</p>
              <p>system debt.</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1 md:w-[20%]  sm:w-full xs:w-full items-center text-xs  lg:border-r  md:border-r sm:border-none xs:border-none border-[#272531]">
          <p className="text-sm">Staked</p>
          <p className="text-sm">
            <span>USDL</span>{" "}
            <span
              onMouseOver={handleHoveredStake}
              onMouseOut={handleUnHoveredStake}
            >
              <HelpOutlinedIcon sx={{ fontSize: "18px" }} />
            </span>
          </p>
          <p className="text-white">13.58M</p>
          <p className="text-white">(74.85%)</p>
          {isHoveredStake ? (
            <div
              style={shadowStyle}
              className="p-2 text-sm font-extralight absolute  bottom-10  rounded-md left-[40rem]  z-50 bg-[#16121a]"
            >
              <p> The amount of USDL currently held in the </p>
              <p> Stability Pool and percentage of the total</p>
              <p>amount in circulation</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1 md:w-[20%]  sm:w-full xs:w-full items-center text-xs  lg:border-r  md:border-r sm:border-none xs:border-none border-[#272531]">
          <p className="text-sm">Stability Pool</p>
          <p className="text-sm">
            <span>APR</span>{" "}
            <span
              onMouseOver={handleHoveredStability}
              onMouseOut={handleUnHoveredStability}
            >
              <HelpOutlinedIcon sx={{ fontSize: "18px" }} />
            </span>
          </p>
          <p className="text-white">265.13%</p>
          <p className="text-white">(41.41M USD)</p>
          {isHoveredStability ? (
            <div
              style={shadowStyle}
              className="p-2 text-sm font-extralight absolute    rounded-md left-[40rem]  z-50 bg-[#16121a]"
            >
              <p> An estimate of the LOAN token and PLS </p>
              <p> returns to Stability Pool participants . This</p>
              <p>includes PLS gains from liquidations.</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1 md:w-[20%]  sm:w-full xs:w-full items-center text-xs  lg:border-r  md:border-r sm:border-none xs:border-none border-[#272531]">
          <p className="text-sm">Staked</p>
          <p className="text-sm">
            <span>LOAN</span>{" "}
            <span
              onMouseOver={handleHoveredLoan}
              onMouseOut={handleUnHoveredLoan}
            >
              <HelpOutlinedIcon sx={{ fontSize: "18px" }} />
            </span>
          </p>
          <p className="text-white">354.17B</p>
          <p className="text-white">(41.41M USD)</p>
          {isHoveredLoan ? (
            <div
              style={shadowStyle}
              className="p-2 text-sm font-extralight absolute rounded-md left-[52rem]  z-50 bg-[#16121a]"
            >
              <p> The total amount of LOAN tokens staked </p>
              <p> in the Staking Pool .</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1 md:w-[20%]  sm:w-full xs:w-full items-center text-xs  lg:border-r  md:border-r sm:border-none xs:border-none border-[#272531]">
          <p className="text-sm">Staking Pool</p>
          <p className="text-sm">
            <span>APR</span>{" "}
            <span
              onMouseOver={handleHoveredStaking}
              onMouseOut={handleUnHoveredStaking}
            >
              <HelpOutlinedIcon sx={{ fontSize: "18px" }} />
            </span>
          </p>
          <p className="text-white">64.70%</p>
          <p className="text-white">(41.41M USD)</p>
          {isHoveredStaking ? (
            <div
              style={shadowStyle}
              className="p-2 text-sm font-extralight absolute    rounded-md right-[40rem]  z-50 bg-[#16121a]"
            >
              <p>An estimate of the annual returns of USDL </p>
              <p> and PLS paid to staked LOAN holders</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-1 md:w-[20%]  sm:w-full xs:w-full items-center text-xs  ">
          <p className="text-sm">USDL</p>
          <p className="text-sm">
            <span>Supply</span>{" "}
            <span
              onMouseOver={handleHoveredSupply}
              onMouseOut={handleUnHoveredSupply}
            >
              <HelpOutlinedIcon sx={{ fontSize: "18px" }} />
            </span>
          </p>
          <p className="text-white">18.14M</p>
          <p className="text-white">(41.41M USD)</p>
          {isHoveredSupply ? (
            <div
              style={shadowStyle}
              className="p-2 text-sm font-extralight absolute    rounded-md right-[26rem] bottom-0  z-50 bg-[#16121a]"
            >
              <p>The total USDL minted by the system. </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="md:flex lg:hidden lg:flex-row  sm:flex xs:flex-col xs:justify-center xs:items-center xs:w-[100%] sm:w-[auto] sm:flex-row bg-black items-center justify-center md:gap-12 sm:gap-8 xs:gap-2  md:p-10 sm:p-8 xs:p-6 rounded-lg mb-5">
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

        <div className="flex">
          <div className="flex flex-row  items-center">
            <img
              src="/images/PLs.png"
              alt=" loan"
              className="w-[28px] h-[28px]"
            />
            <div>
              <p className="text-white">PLS</p>
              <p className="text-xs">$0.00001</p>
            </div>
          </div>
          <span className="text-xs text-green-500"> 2.33%</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
