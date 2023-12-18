import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <div className="flex flex-row  items-center justify-between  p-2">
      <div className="flex flex-row gap-2">
       <img src="/images/battery.png" alt="" className="h=[18px] w-[28px]" />
        <div>
          <p>
            {" "}
            <span className="text-white">TCR</span>{" "}
            <span className="text-sm">(Normal Mode)</span>
          </p>
          <p>
            <span className="text-white">22.66% </span>
            <span>
              <HelpOutlinedIcon sx={{ fontSize: "20px" }} />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-row  gap-12 items-center  justify-center">
        <div className="flex">
          <div className="flex flex-row  items-center">
            <img src="/images/loan.png" alt=" loan"   className="w-[28px] h-[28px]"/>
            <div>
              <p className="text-white">LOAN</p>
              <p className="text-xs">$0.00001</p>
            </div>
          </div>
          <span className="text-xs text-green-500"> 1.84%</span>
        </div>
        <div className="flex">
          <div className="flex flex-row  items-center">
            <img src="/images/usdl.png" alt=" loan"  className="w-[28px] h-[28px]"/>
            <div>
              <p className="text-white">USDL</p>
              <p className="text-xs">$1.230401</p>
            </div>
          </div>
          <span className="text-xs text-red-500"> 0.84%</span>
        </div>

        <div className="flex">
          <div className="flex flex-row  items-center">
            <img src="/images/PLs.png" alt=" loan"   className="w-[28px] h-[28px]"/>
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
    </div>
  );
};

export default Header;
