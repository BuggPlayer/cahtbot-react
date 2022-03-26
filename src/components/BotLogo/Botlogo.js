import React, { useContext } from "react";
import { LangContext } from "../../Context/LangContext";

import KFClogo from "../../assets/images/Kfc_logo.png";
import "./Botlogo.css";
const Botlogo = () => {
  const { language } = useContext(LangContext);
  return <img alt="LOGO" src={KFClogo} className={language === "En" ? "botlogoEn" : "botlogoAr"} />;
};

export default Botlogo;
