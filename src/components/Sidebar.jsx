import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import {
  MdOutlineDrafts,
  MdOutlineKeyboardArrowDown,
  MdOutlineWatchLater,
} from "react-icons/md";
import { RiInboxFill } from "react-icons/ri";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpens } from "../redux/appSlice";

const sidebarItems = [
  {
    icon: <RiInboxFill size={24} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={24} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={24} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={24} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={24} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={24} />,
    text: "More",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button
          onClick={() => dispatch(setOpens(true))}
          className="flex items-center gap-3 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]"
        >
          <LuPencil size={24} />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2"
          >
            {item.icon}
            <p>{item.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
