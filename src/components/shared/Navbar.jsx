import React, { useEffect, useState } from "react";
import GoogleLogo from "../../assets/gmail.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../redux/appSlice";

const Navbar = () => {
  const [Input, SearchInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchText(Input));
  }, [Input, dispatch]);
  return (
    <div className="flex items-center justify-between mx-3 h-16 ">
      <div className="flex items-center gap-10 ">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={20} />
          </div>
          <img className="w-8" src={GoogleLogo} alt="Gmail-logo" />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] md:mr-30">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={24} className="text-gray-700" />
          <input
            type="text"
            value={Input}
            onChange={(e) => SearchInput(e.target.value)}
            className="rounded-full w-full bg-transparent outline-none px-1"
            placeholder="Search Mail"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={24} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiSettings size={24} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={24} />
          </div>
          <div className="cursor-pointer">
            <Avatar
              src="https://marketplace.canva.com/EAFuJ5pCLLM/1/0/1600w/canva-black-and-gold-simple-business-man-linkedin-profile-picture-BM_NPo97JwE.jpg"
              size="40"
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
