import React from "react";
import "./NopeRespoCompo.css";
import logo from "../../assets/images/botlogo.svg";
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";
const NopeRespoCompo = () => {
  let history = useHistory();
  return (
    <div style={{}}>
      <img src={logo} alt="wait" className="botdemo" />
      <div className="thank">
        <p className="thanktext">Thank you for using KFCare. 😇</p>
        <Button
          variant="outlined"
          style={{
            borderRadius: 6.1,
            fontWeight: "bold",
            fontFamily: "Rubik",
            fontStyle: "normal",
            width: 120,
            border: "solid 1.2 #d2edff",
            marginLeft: 25,
            fontSize: 12,
          }}
          onClick={() => history.goBack()}
        >
          close
        </Button>
      </div>
    </div>
  );
};

export default NopeRespoCompo;
