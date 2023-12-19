import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import { useState, ChangeEvent } from "react";

const Stalking = () => {
  const [stake, setStake] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPLS, setIsHoveredPLS] = useState(false);
  const [isHoveredRatio, setIsHoveredRatio] = useState(false);
  const [isHoveredStake, setIsHoveredStake] = useState(false);
  const [isHoveredStability, setIsHoveredStability] = useState(false);
  const [isHoveredLoan, setIsHoveredLoan] = useState(false);
  const [isHoveredStaking, setIsHoveredStaking] = useState(false);
  const [isHoveredSupply, setIsHoveredSupply] = useState(false);
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

  return (
    <div>
      <div className="flex flex-col  justify-center mt-16 gap-16 pb-6">
        <div className="flex flex-row  items-center   justify-center   gap-12">
          <hr className="   border-[#3e334b] w-56" />
          <p className=" font-semibold text-3xl text-white ">
            Stake your LOAN token to earn USDL and PLS
          </p>
          <hr className="h-2   w-56 border-[#3e334b]" />
        </div>
        <div className="flex flex-row gap-24 items-center justify-center relative ">
          <div className="flex flex-col gap-5  items-center">
            <h1 className="text-2xl text-white font-semibold ">Stake LOAN</h1>
            <div
              className="w-full border border-[#762fc1] rounded-lg   flex flex-col gap-16 p-4 bg-black"
              style={shadowStyle}
            >
              <div className="flex flex-row gap-10">
                <button
                  className={` ${
                    stake ? "bg-[#2e2834]" : ""
                  } text-gray-500 hover:text-white py-3 px-12 rounded-lg`}
                  onClick={handleStake}
                >
                  Stake
                </button>
                <button
                  className={`  hover:text-white py-3 px-12 rounded-lg ${
                    stake ? "text-gray-500" : "bg-[#2e2834] text-white"
                  }`}
                  onClick={handleUnstake}
                >
                  UnStake
                </button>
                <div className="flex flex-col gap-2">
                  <span className="font-extralight">Current APR</span>
                  <span className="text-white">64.70%</span>
                </div>
              </div>
              <div className="relative flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="0.00"
                  className="bg-[#100d14] border border-[#3e334b]  rounded-lg hover:outline-none text-right placeholder:text-right px-2 py-4 w-full"
                  onChange={handleOnChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  style={shadowStyle1}
                />
                <div className="flex flex-row absolute top-5 text-xs left-2">
                  <p>STAKE LOAN</p>
                  <img src="/images/loan.png" alt="" className="w-6 h-6" />
                </div>
                <p className="self-end font-extralight text-sm">
                  {stake ? "Wallet" : "Staked"} : 0.00 LOAN
                </p>
              </div>
              <div className="flex flex-row gap-3 w-full justify-between items-center">
                <button className="rounded-md bg-[#2e2834] text-[#727379] hover:text-white font-extralight text-sm py-1 px-10">
                  25%
                </button>
                <button className="rounded-md bg-[#2e2834] text-[#727379] hover:text-white font-extralight text-sm py-1 px-10">
                  50%
                </button>
                <button className="rounded-md bg-[#2e2834] text-[#727379] hover:text-white font-extralight text-sm py-1 px-10">
                  75%
                </button>
                <button className="rounded-md bg-[#2e2834] text-[#727379] hover:text-white font-extralight text-sm py-1 px-10">
                  100%#3e334b
                </button>
              </div>
              <button className="bg-[#762fc1] text-white p-3 rounded-md hover:bg-[#3e334b]">
                Connect Your Wallet
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5  items-center w-[30%] ">
            <h1 className="text-2xl text-white font-semibold ">Staking Pool</h1>
            <div className="w-full     flex flex-col gap-12 p-4">
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-44 justify-between items-center">
                  <p className="text-sm font-light">
                    Your {stake ? "New Stake" : "Unstake"}
                  </p>
                  <p className="text-white">{loan}LOAN</p>
                </div>
                <div className="flex flex-row gap-44 justify-between items-center">
                  <p className="text-sm font-light">Your Existing Stakes</p>
                  <p className="text-white">0.00 LOAN</p>
                </div>
                <div className="flex flex-row gap-44 justify-between items-center">
                  <p className="text-sm font-light">
                    Your Total Staking Balance
                  </p>
                  <p className="text-white">{loan}LOAN</p>
                </div>
                <div className="flex flex-row gap-44 justify-between items-center">
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
                <div className="flex flex-row gap-44 justify-between items-center">
                  <p className="text-sm font-light">Redemption Fees</p>
                  <p className="text-white">0.00 PLS</p>
                </div>
                <div className="flex flex-row gap-44 justify-between items-center">
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
              className="p-2 text-sm font-extralight absolute  top-48  z-50 bg-[#16121a]"
            >
              <p> If your pool share size smaller than </p>
              <p> 0.000000% the system will display 0.00%</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="self-center  font-semibold text-3xl text-white">
            Protocol Performance
          </h1>

          <div className="flex flex-row gap-3 items-center  rounded-md  justify-center bg-[#111017] ml-16 p-2 mb-2 w-[80%]">
            <div className="flex flex-col gap-1 border-r border-[#272531] px-4 mx-5">
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
            <div className="flex flex-col gap-1 border-r border-[#272531] px-4 mx-5">
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
            <div className="flex flex-col gap-1 border-r border-[#272531] px-4 mx-5">
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
            <div className="flex flex-col gap-1 border-r border-[#272531] px-4 mx-5">
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
            <div className="flex flex-col gap-1 border-r border-[#272531] px-4 mx-5">
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
                  className="p-2 text-sm font-extralight absolute    rounded-md left-[52rem]  z-50 bg-[#16121a]"
                >
                  <p> The total amount of LOAN tokens staked </p>
                  <p> in the Staking Pool .</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col gap-1 border-r border-[#272531] px-4 mx-5">
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
            <div className="flex flex-col gap-1  px-4 mx-5">
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
        </div>
      </div>
    </div>
  );
};

export default Stalking;
