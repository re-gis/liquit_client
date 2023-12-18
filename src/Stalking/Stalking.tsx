import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";

const Stalking = () => {
  const shadowStyle = {
    boxShadow: "0px 0px 12px 0px rgba(118, 47, 193, 0.7)",
    // Add other styles as needed
  };
  return (
    <div>
      <div className="flex flex-col  justify-center mt-16 gap-16">
        <div className="flex flex-row  items-center   justify-center   gap-12">
          <hr className="   border-[#3e334b] w-56" />
          <p className=" font-semibold text-3xl text-white ">
            Stake your LOAN token to earn USDL and PLS
          </p>
          <hr className="h-2   w-56 border-[#3e334b]" />
        </div>
        <div className="flex flex-row gap-24 items-center justify-center">
          <div className="flex flex-col gap-5  items-center">
            <h1 className="text-2xl text-white font-semibold ">Stake LOAN</h1>
            <div
              className="w-full border border-[#762fc1] rounded-lg   flex flex-col gap-16 p-4 bg-black"
              style={shadowStyle}
            >
              <div className="flex flex-row gap-10">
                <button className="bg-[#2e2834] text-white py-3 px-12 rounded-lg">
                  Stake
                </button>
                <button className="bg-[#2e2834] text-white py-3 px-12 rounded-lg">
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
                />
                <div className="flex flex-row absolute top-5 text-xs left-2">
                  <p>STAKE LOAN</p>
                  <img src="/images/loan.png" alt="" className="w-6 h-6" />
                </div>
                <p className="self-end font-extralight text-sm">
                  Wallet: 0.00 LOAN
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
                  100%
                </button>
              </div>
              <button className="bg-[#762fc1] text-white p-3 rounded-md">
                Connect Your Wallet
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5  items-center">
            <h1 className="text-2xl text-white font-semibold ">Staking Pool</h1>
            <div className="w-full     flex flex-col gap-12 p-4">
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-44 justify-between items-center">
                  <p className="text-sm font-light">Your New Stake</p>
                  <p className="text-white">0.00 LOAN</p>
                </div>
                <div className="flex flex-row gap-44 justify-between items-center">
                  <p className="text-sm font-light">Your Existing Stakes</p>
                  <p className="text-white">0.00 LOAN</p>
                </div>
                <div className="flex flex-row gap-44 justify-between items-center">
                  <p className="text-sm font-light">
                    Your Total Staking Balance
                  </p>
                  <p className="text-white">0.00 LOAN</p>
                </div>
                <div className="flex flex-row gap-44 justify-between items-center">
                  <p className="text-sm font-light">
                    <span>Your Pool Share</span>
                    <span>
                      <HelpOutlinedIcon />
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

              <button className="bg-[#762fc1] text-white p-3 rounded-md">
                Claim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Stalking.propTypes = {};

export default Stalking;
