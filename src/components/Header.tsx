import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const shadowStyle = {
    boxShadow: "0px 0px 12px 0px rgba(118, 47, 193, 0.7)",
  };
  const handleHovered =()=>{
    
    setIsHovered(true)
  }
  const handleUnHovered = () =>{

     setIsHovered(false)
  }
  
  return (
    <div className="flex flex-row  items-center justify-between  py-2 p-5 relative">
      <div className="flex flex-row gap-2">
        <img src="/images/battery.png" alt="" className="h=[14px] w-[20px]" />
        <div>
          <p>
            {" "}
            <span className="text-white">TCR</span>{" "}
            <span className="text-sm">(Normal Mode)</span>
          </p>
          <div>
            <span className="text-white">22.66% </span>
            <span
            className="hover:cursor-pointer"
              onMouseOver={handleHovered }
              onMouseOut={ handleUnHovered}
            >
              <HelpOutlinedIcon sx={{ fontSize: "20px" }} 
             
              />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row  gap-12 items-center  justify-center">
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

      <div className="flex flex-row gap-4">
        <Link
          to="#"
          className=" rounded-md bg-[#762fc1] text-white  p-2 hover:bg-[#3e334b] flex justify-center items-center "
        >
          <span>
            <AccountBalanceWalletOutlinedIcon />
          </span>
          Connect To your Wallet
        </Link>
        <Link
          to="#"
          className="rounded-md bg-[#3e334b] text-white  p-2 flex items-center justify-center  hover:bg-[#762fc1]"
        >
          Tour{" "}
          <span>
            <PlayCircleFilledOutlinedIcon />
          </span>
        </Link>
        <button className="bg-black rounded-3xl flex items-center justify-center p-2 hover:bg-[#3e334b]">
          <DarkModeIcon
            sx={{
              color: "#762fc1 ",
              ":hover": { color: "white" },
              fontSize: "32px",
            }}
          />
        </button>
      </div>

      {/* when you hover help icon */}
      {isHovered  ? <div style={shadowStyle} className="p-2 text-sm font-extralight absolute top-16 bg-[#16121a]">
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
 :""}
    </div>
  );
};

export default Header;
