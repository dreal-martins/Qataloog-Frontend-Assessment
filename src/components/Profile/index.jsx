import React from "react";
import profileImg from "../../assets/images/profile.svg";
import removeIcon from "../../assets/icons/removeIcon.svg";
import pagination from "../../assets/images/pagination.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Profile = () => {
  return (
    <div className="h-[70vh] overflow-auto py-5">
      <div className="flex justify-start items-center gap-5 ">
        <div>
          <img src={profileImg} alt="img" />
        </div>
        <div className="flex flex-col justify-start items-center gap-4">
          <button className="border border-[#F14119] p-2 rounded-full bg-[#F14119] text-white ">
            Upload New Picture
          </button>
          <button
            className="border border-[#F14119] p-2 rounded-full flex justify-center items-center w-[100%] gap-2 font-semibold text-[#F14119]
        "
          >
            <img src={removeIcon} alt="icon" />
            Remove
          </button>
        </div>
      </div>

      <div className="pt-8">
        <label>
          <span className="text-[#323233] text-[16px] ">Full Name</span>
          <br />
          <input
            type="text"
            className="w-[35%] outline-none border border-[#D0D0D4] py-2 px-3 mt-1 rounded-full"
            placeholder="John Doe"
          />
        </label>
      </div>
      <div className="pt-3">
        <label>
          <span className="text-[#323233] text-[16px] ">Email</span>
          <br />
          <input
            type="text"
            className="w-[35%] outline-none border border-[#D0D0D4] py-2 px-3 mt-1 rounded-full"
            placeholder="Johhd@gmail.com"
          />
        </label>
      </div>
      <div className="pt-3">
        <label>
          <span className="text-[#323233] text-[16px] ">Phone Number</span>
          <br />
          <PhoneInput
            country={"ng"}
            countryCodeEditable
            inputStyle={{
              width: "35%",
              outline: "none",
              border: "1px solid #D0D0D4",
              paddingLeft: "52px",
              paddingRight: "12px",
              paddingTop: "8px",
              paddingBottom: "8px",
              borderRadius: "9999px",
              marginTop: "4px",
            }}
            buttonStyle={{
              padding: "5px",
              border: "1px solid #D0D0D4",
              borderRadius: "9999px",
            }}
          />
        </label>
      </div>
      <div className="pt-5 flex justify-between items-center pr-8">
        <button className="border border-[#F14119] p-2 w-[15%] rounded-full bg-[#F14119] text-white ">
          Update
        </button>
        <div className="cursor-pointer">
          <img src={pagination} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
