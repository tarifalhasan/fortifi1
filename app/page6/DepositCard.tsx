import { usdc } from "@/assets/images";
import RSelect from "@/components/RSelect";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import Rebalance from "../../components/Rebalance";

const DepositCard = () => {
  return (
    <div className="  space-y-5">
      <div>
        <RSelect />
        <div className="flex justify-center">
          <div className=" relative z-10 px-5 pt-9 grid grid-cols-2 gap-2">
            <Button className="h-[55px] !rounded-b-none rounded-[15px]">
              Deposit
            </Button>
            <Button
              className="h-[55px] !rounded-b-none rounded-[15px]"
              variant={"secondary"}
            >
              Withdraw
            </Button>
          </div>
        </div>
        <div
          className={`  relative z-40 overflow-hidden -mt-[4px]  bg-[#fff] border border-bb  rounded-[15px] card space-y-5`}
        >
          <p className="text-t-18 font-semibold">Amount</p>
          <div
            style={{ padding: "10px 15px" }}
            className="bg-transparent rounded-[10px] border border-primary flex items-center justify-between"
          >
            <h3 className="text-t-18 font-semibold">6.09</h3>
            <button
              style={{ padding: "10px 15px" }}
              className=" text-t-18 bg-secondary rounded-lg font-extrabold  text-dark"
            >
              + MAX
            </button>
          </div>
          <Slider defaultValue={[33]} max={100} step={1} />
          <div className=" grid grid-cols-4 gap-1">
            <button className=" h-[46px] text-t-16  text-white sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center">
              25%
            </button>
            <button className="h-[46px] text-t-16  text-white  sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center">
              50%
            </button>
            <button className=" h-[46px] text-t-16 text-white   sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center">
              75%
            </button>
            <button className=" h-[46px] text-t-16 text-white  sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center">
              100%
            </button>
          </div>
          <ul className=" space-y-4">
            <li className=" flex  items-center justify-between text-t-16 font-semibold font-comforta">
              <span className=" block">Deposit Fee</span>
              <span className=" block">0%</span>
            </li>
            <li className=" flex items-center justify-between text-t-16 font-semibold font-comforta">
              <span className=" block">Withdraw Fee</span>
              <span className=" block">0%</span>
            </li>
            <li className=" flex items-center justify-between text-t-16 font-semibold font-comforta">
              <span className=" block">Performance Fee</span>
              <span className=" block">0%</span>
            </li>
          </ul>
          <button
            style={{ padding: "15px 24px" }}
            className="border-2 border-secondary rounded-lg text-t-18 font-bold text-white  w-full inline-flex  items-center justify-center  bg-primary"
          >
            Deposit
          </button>
        </div>
      </div>
      <div
        style={{ padding: "15px 25px 15px 25px" }}
        className=" bg-[#101E33]  rounded-[10px]"
      >
        <div className="flex items-center justify-between">
          <div>
            <h5 className=" text-t-17 lg:text-t-20 font-bold text-secondary">
              Need USDC?
            </h5>
            <p className=" text-t-16  sm:text-t-18 font-normal text-white">
              Get the best price with one click!
            </p>
          </div>
          <div>
            <Image
              src={usdc}
              alt=""
              className=" w-[65px] h-[65px] rounded-full"
            />
          </div>
        </div>
      </div>
      <Rebalance />
    </div>
  );
};

export default DepositCard;
