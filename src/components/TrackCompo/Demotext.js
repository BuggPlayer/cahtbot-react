import React, { useContext } from "react";
import "./Demotext.css";
import { LangContext } from "../../Context/LangContext";
import logo from "../../assets/images/botlogo.svg";

const Demotext = ({ title }) => {
  const { language } = useContext(LangContext);
  return (
    <div>
      <img
        src={logo}
        alt="wait"
        className={language === "En" ? "botdemo" : "botdemoar"}
      />

      <div className={language === "En" ? "welcomename" : "welcomenamear"}>
        <p className={language === "En" ? "username" : "usernamear"}>
          {language === "En" ? title[0].En : title[0].Ar}
        </p>
      </div>
    </div>
  );
};

export default Demotext;
