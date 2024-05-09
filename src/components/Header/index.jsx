import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contexts";
import frenchIcon from "../../assets/icons/frenchIcon.svg";
import arrowDown from "../../assets/icons/chevronDownIcon.svg";
import questionMark from "../../assets/images/unavailable.svg";
import axios from "axios";

export default function Header() {
  const { headerTitle } = useAppContext();
  const [profileImg, setProfileImg] = useState(questionMark);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        const userData = response.data[0];
        if (userData) {
          setFullName(userData.fullName);
          setProfileImg(userData.profileImg);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <header className="h-[3.5rem] w-full flex justify-center items-center px-3">
      <div className="w-[95%] flex justify-between items-center bg-white">
        <h1 className="font-medium text-[1.25rem]">{headerTitle}</h1>

        <div className="flex justify-end items-center gap-8 pb-3">
          <div className="flex justify-start items-center gap-2">
            <img src={frenchIcon} alt="icon" />
            <h1>French</h1>
            <img src={arrowDown} alt="icon" />
          </div>
          <div className="flex items-center justify-start gap-2 ">
            <img
              src={profileImg}
              alt="img"
              className="w-[50px] h-[50px] rounded-full object-fill"
            />
            <h1 className="font-semibold text-[17px]">{fullName}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
