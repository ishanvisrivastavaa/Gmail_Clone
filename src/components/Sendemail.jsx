import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpens } from "../redux/appSlice";
import { formatProdErrorMessage } from "@reduxjs/toolkit";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const Sendemail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const open = useSelector((store) => store.appSlice.open);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
    });
    dispatch(setOpens(false));
    setFormData({
      to: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div
      className={` ${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md `}
    >
      <div className="flex items-center px-3 py-2 bg-[#f2f6fc] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpens(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross2 size={20} />
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col bg-white p-3 gap-3"
        action=""
      >
        <input
          type="text"
          name="to"
          value={formData.to}
          onChange={changeHandler}
          placeholder="To"
          className="outline-none py-1 "
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={changeHandler}
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={changeHandler}
          cols={30}
          rows={10}
          className="outline-none bg-white py-1"
        />
        <button
          type="submit"
          className="bg-[#0b57d0] rounded-full w-fit px-4 py-1 text-white font-md "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Sendemail;
