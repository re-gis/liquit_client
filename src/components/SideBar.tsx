import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.6d8c97d9.png";
import home from "../assets/home.png";
import ana from "../assets/anapng.png";
import know from "../assets/knowpng.png";
import liq from "../assets/liqpng.png";
import lp from "../assets/lppng.png";
import rede from "../assets/redepng.png";
import stak from "../assets/stakpng.png";
import stap from "../assets/stapng.png";
import token from "../assets/tokens.png";
import bor from "../assets/bopng.png";

const SideBar: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="w-[100%]">
        <img src={logo} className="h-[35px]" alt="" />
      </div>
      <div>
        <ul className="flex flex-col gap-9">
          <li className="cursor-pointer">
            <Link
              className="flex items-center w-[100%] gap-4 hover:text-white text-sm font-[600]"
              to={"/"}
            >
              <img className="hover:text-white w-[20px] h-[20px]" src={home} />
              Start Here
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              className="flex items-center w-[100%] gap-4 hover:text-white text-sm font-[600]"
              to={"/borrow"}
            >
              <img className="hover:text-white w-[20px] h-[20px]" src={stak} />
              Borrow USDL
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              className="flex items-center w-[100%] gap-4 hover:text-white text-sm font-[600]"
              to={"/stability"}
            >
              <img className="hover:text-white w-[20px] h-[20px]" src={stap} />
              Stability Pool
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              className="flex items-center w-[100%] gap-4 hover:text-white text-sm font-[600]"
              to={"/staking"}
            >
              <img className="hover:text-white w-[20px] h-[20px]" src={bor} />
              Staking Pool
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              className="flex items-center w-[100%] gap-4 hover:text-white text-sm font-[600]"
              to={"/lp"}
            >
              <img className="hover:text-white w-[20px] h-[20px]" src={lp} />
              LP Rewards
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              className="flex items-center w-[100%] gap-4 hover:text-white text-sm font-[600]"
              to={"/redemptions"}
            >
              <img className="hover:text-white w-[20px] h-[20px]" src={rede} />
              Redemptions
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              className="flex items-center w-[100%] gap-4 hover:text-white text-sm font-[600]"
              to={"/liquidations"}
            >
              <img className="hover:text-white w-[20px] h-[20px]" src={liq} />
              LIquidations
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              className="flex items-center w-[100%] gap-4 hover:text-white text-sm font-[600]"
              to={"/analytics"}
            >
              <img className="hover:text-white w-[20px] h-[20px]" src={ana} />
              Analytics
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              className="flex items-center w-[100%] gap-4 hover:text-white text-sm font-[600]"
              to={"/knowledge"}
            >
              <img className="hover:text-white w-[20px] h-[20px]" src={know} />
              Knowledge Base
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              className="flex items-center w-[100%] gap-4 hover:text-white text-sm font-[600]"
              to={"/tokens"}
            >
              <img className="hover:text-white w-[20px] h-[20px]" src={token} />
              Add Tokens
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Social Media</h2>
        <ul className="flex items-center gap-7">
          <li className="cursor-pointer">
            <svg
              className="w-[15px] h-[15px]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
            </svg>
          </li>
          <li className="cursor-pointer">
            <svg
              className="w-[15px] h-[15px]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
          </li>

          <li className="cursor-pointer">
            <svg
              className="w-[15px] h-[15px]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </li>

          <li className="cursor-pointer">
            <svg
              className="w-[15px] h-[15px]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 496 512"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
            </svg>
          </li>
        </ul>
      </div>
      <div className="text-[12px] font-[500]">
        <h1>
          2023 &copy;{" "}
          <Link className="hover:text-white" to={"/#"}>
            Crave Management
          </Link>
        </h1>
        <h1>
          <Link to={"/#"}>Read The Protocol Disclaimer</Link>
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
