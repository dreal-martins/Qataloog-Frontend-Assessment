import React, { useEffect, useState } from "react";
import removeIcon from "../../assets/icons/removeIcon.svg";
import pagination from "../../assets/images/pagination.svg";
import questionMark from "../../assets/images/unavailable.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [profileImg, setProfileImg] = useState(questionMark);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        const userData = response.data[0];
        if (userData) {
          setFullName(userData.fullName);
          setEmail(userData.email);
          setPhoneNumber(userData.phoneNumber);
          setProfileImg(userData.profileImg);
          setIsDataLoaded(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const img = new Image();
    img.onload = () => {
      if (img.height > img.width) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setProfileImg(reader.result);
        };
      } else {
        alert("Please upload a portrait image.");
      }
    };
    img.src = URL.createObjectURL(file);
  };

  const handleRemove = () => {
    setProfileImg(questionMark);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = () => {
    setLoading(true);
    const userData = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      profileImg: profileImg,
    };

    axios
      .put("http://localhost:3000/users/1", userData)
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        toast.success(`User updated successfully🎉`);
        setLoading(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        setLoading(false);
      });
  };

  return (
    <div className="h-[70vh] overflow-auto py-5">
      {isDataLoaded && (
        <div className="flex justify-start items-center gap-5">
          <div className="w-[18%]">
            <img
              src={profileImg}
              alt="Profile"
              className="w-[150px] h-[150px] rounded-full object-fill border-[2px] border-[#D0D0D4]"
            />
          </div>
          <div className="flex flex-col justify-start items-center gap-4">
            <label
              htmlFor="upload"
              className="border border-[#F14119] p-2 rounded-full bg-[#F14119] text-white cursor-pointer"
            >
              Upload New Picture
              <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={handleUpload}
                style={{ display: "none" }}
              />
            </label>
            <button
              className="border border-[#F14119] p-2 rounded-full flex justify-center items-center w-[100%] gap-2 font-semibold text-[#F14119]"
              onClick={handleRemove}
            >
              <img src={removeIcon} alt="Remove" />
              Remove
            </button>
          </div>
        </div>
      )}

      <div className="pt-8">
        <label>
          <span className="text-[#323233] text-[16px] ">Full Name</span>
          <br />
          <input
            type="text"
            className="w-[35%] outline-none border border-[#D0D0D4] py-2 px-3 mt-1 rounded-full"
            onChange={(e) => setFullName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={handlePhoneChange}
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
        <button
          onClick={handleSubmit}
          className="border border-[#F14119] p-2 w-[15%] rounded-full bg-[#F14119] text-white "
        >
          {loading ? "Loading..." : "Update"}
        </button>
        <div className="cursor-pointer">
          <img src={pagination} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
