import React, { useContext } from "react";
import { Grid, Button } from "@material-ui/core";
import LeftSideComponent from "../LeftSideCompo/LeftSideComponent";
import { LangContext } from "../../Context/LangContext";
import "./CheckforrefoundnoItem.css";

const CheckforrefoundnoItem = ({ setui, userindex, data, callcode }) => {
  console.log("datanoitrem", data);
  const { language } = useContext(LangContext);
  const yesHandler = () => {
    setui((pre) => {
      return [
        ...pre,
        {
          id: 1,
          component: (postion, result) => (
            <LeftSideComponent
              result={result.suggestions}
              setui={(res) => setui(res)}
              userindex={userindex}
            />
          ),
          postion: "left",
        },
      ];
    });
  };

  const today = Date.now();
  const Time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(today);
  return (
    <>
      <div className="noItemcontainer">
        <>
          <Grid item className="noitemcontainer" xs={9}>
            <p className="noitemDataR">{data.header}</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 10,
                paddingBottom: 5,
              }}
            >
              <Button
                style={{
                  backgroundColor: "#e4002b",
                  borderRadius: 20,
                  fontWeight: "bold",
                  fontFamily: "Mulish",
                  fontStyle: "normal",
                  color: "white",
                }}
                onClick={yesHandler}
              >
                YES
              </Button>

              <Button
                style={{
                  borderRadius: 20,
                  backgroundColor: "#e4002b",

                  fontWeight: "bold",
                  fontFamily: "Mulish",
                  fontStyle: "normal",
                  color: "white",
                }}
                onClick={() => alert(data.ccodCode + data.customerCareNumber)}
              >
                call
              </Button>
            </div>
          </Grid>
        </>
      </div>
      <p className="timecompo">{Time}</p>
    </>
  );
};

export default CheckforrefoundnoItem;
