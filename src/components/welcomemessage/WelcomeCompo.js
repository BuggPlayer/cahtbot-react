import React, { useContext } from "react";
import "./WelcomeCompo.css";
import logo from "../../assets/images/botlogo.svg";
import { LangContext } from "../../Context/LangContext";
import { Grid } from "@material-ui/core";

const WelcomeCompo = ({ data }) => {
  const { language } = useContext(LangContext);
  return (
    <Grid>
      {language === "En" ? (
        <div style={{}}>
          <img src={logo} alt="wait" className="Col_Chat_Head" />

          <div className="welcomename">
            <p className="username">
              {data.lineOne}
              <br />
              {data.lineTwo}
            </p>
          </div>
        </div>
      ) : (
        <div style={{}}>
          <div className="welcomenamear">
            <p className="usernamear">
              أهلا Anant!
              <br />
              كيف يمكنني مساعدتك في طلبك؟
            </p>
          </div>
          <img src={logo} alt="wait" className="Col_Chat_Headar" />
        </div>
      )}
    </Grid>
  );
};

export default WelcomeCompo;
