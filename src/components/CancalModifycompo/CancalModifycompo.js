import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { LangContext } from "../../Context/LangContext";
import "./CancalModifycompo.css";
const RespondMessageOnly = ({ val }) => {
  const { language } = useContext(LangContext);
  const today = Date.now();
  const Time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(today);

  return (
    <>
      {language === "En" ? (
        <div className="mainContainer">
          {/* <img alt="LOGO" src={KFClogo} className="botlogocancalEn" /> */}
          <div className="dataCOntainer">
            <p className="dataText">{val}</p>
          </div>
          <p className="timecancal">{Time}</p>
        </div>
      ) : (
        <>
          <div className="mainContainerAr">
            <Grid item className="dataCOntainerAr" xs={8}>
              <p className="dataTextAr">{val}</p>
            </Grid>
            {/* <img alt="LOGO" src={KFClogo} className="botlogocancalAr" /> */}
          </div>
          <p className={language === "En" ? "timecancal" : "timecancalAr"}>
            {Time}
          </p>
        </>
      )}
    </>
  );
};

export default RespondMessageOnly;
