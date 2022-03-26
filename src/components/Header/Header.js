import { Grid } from "@material-ui/core";
import React, { useContext } from "react";

import { ImCross } from "react-icons/im";
import { LangContext } from "../../Context/LangContext";
import { useHistory } from "react-router-dom";
import "./Header.css";
import Headerimage from "../../assets/images/BG.svg";
import kfcarelogo from "../../assets/images/KFCareLogo.svg";

const Header = ({ data }) => {
  let history = useHistory();
  const { language } = useContext(LangContext);

  return (
    <Grid item xs={12} md={6}>
      {language === "En" ? (
        <div
          style={{
            backgroundImage: "url(" + `${Headerimage}` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            display: "flex",
            paddingTop: 20,
            paddingBottom: 20,
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img src={kfcarelogo} alt="" className="kfcarelogo" />
            <p className="weltext">Welcome to KFCare</p>
          </div>

          <ImCross className="crossicon" onClick={() => history.goBack()} />
        </div>
      ) : (
        <div
          style={{
            backgroundImage: "url(" + `${Headerimage}` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            display: "flex",
            paddingTop: 20,
            paddingBottom: 20,
            justifyContent: "space-between",
          }}
        >
          <ImCross className="crossicon" onClick={() => history.goBack()} />
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <p className="weltext">مرحبا بك في KFCare</p>
            <img src={kfcarelogo} alt="" className="kfcarelogo" />
          </div>
        </div>
      )}
    </Grid>
  );
};

export default Header;
