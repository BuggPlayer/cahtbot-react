import React, { useContext, useEffect, useRef } from "react";
import { Grid, Typography } from "@material-ui/core";
import { LangContext } from "../../Context/LangContext";
import "./RightSideComponent.css";

const RightSideComponent = ({ title }) => {
  // console.log("tite", title);
  const today = Date.now();
  const Time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(today);

  const { language } = useContext(LangContext);
  const divRref = useRef(null);
  useEffect(() => {
    divRref.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <Grid
        ref={divRref}
        className={language === "En" ? "containerright" : "containerrightAr"}
      >
        {title ? (
          <>
            <Grid
              className={
                language === "En" ? "itemContainer" : "itemContainerAr"
              }
            >
              <Typography
                className={language === "En" ? "itemdata" : "itemdata_Ar"}
              >
                {language === "En" ? title.En : title.Ar}
              </Typography>
            </Grid>
          </>
        ) : null}
      </Grid>
      <p className={language === "En" ? "timeright" : "timerightAr"}>{Time}</p>
    </>
  );
};

export default RightSideComponent;
