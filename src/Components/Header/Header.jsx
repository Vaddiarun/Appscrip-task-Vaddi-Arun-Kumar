import React from "react";
import { FaSignal } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { RiAlarmFill } from "react-icons/ri";
import { IoMdBluetooth } from "react-icons/io";
import { IoIosBatteryFull } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";

export default function Header() {
  return (
    <>
      <div className="bg-black w-screen h-[68px] lg:h-20">
        <Headerstart />
        <HeaderDown />
      </div>
    </>
  );
}

const Headerstart = () => {
  return (
    <>
      <div className="flex justify-between items-center font-bold bg-white md:hidden p-1 lg:hidden">
        <div className="flex justify-around gap-3 items-center">
          <FaSignal />
          <h1>Figma</h1>
          <FaWifi />
        </div>
        <div className="flex">
          <h1>9:41Am</h1>
        </div>
        <div className="flex justify-around gap-3 items-center">
          <RiAlarmFill />
          <IoMdBluetooth />
          <h5>100%</h5>
          <IoIosBatteryFull />
        </div>
      </div>
      <div className="flex md:hidden items-center lg:hidden justify-center mt-2">
        <PiSquaresFourFill className="text-red-500" />

        <h1 className="text-red-500">Lermo Ipsum dolor</h1>
      </div>
    </>
  );
};

const HeaderDown = () => {
  return (
    <div className="hidden md:flex  justify-evenly p-5 items-center sm:hidden ">
      <div className="flex space-x-40  ">
        <div className="flex items-center  ">
          <PiSquaresFourFill className="text-red-500" />
          <h1 className="text-red-500">Lermo Ipsum dolor</h1>
        </div>
        <div className="flex items-center ">
          <PiSquaresFourFill className="text-red-500" />
          <h1 className="text-red-500">Lermo Ipsum dolor</h1>
        </div>
        <div className="flex items-center ">
          <PiSquaresFourFill className="text-red-500" />
          <h1 className="text-red-500">Lermo Ipsum dolor</h1>
        </div>
      </div>
    </div>
  );
};
