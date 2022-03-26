import React, { useState } from "react";
import "./OptionCard.css";
import { Grid, Button } from "@material-ui/core";
import LeftSideComponent from "../LeftSideCompo/LeftSideComponent";
import NopeRespoCompo from "./NopeRespoCompo";

const OptionCard = ({ userindex, setui }) => {
  const [show, setshow] = useState(false);
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

  return (
    <div>
      <div className="optioncard">
        <p className="texthelp"> Can we help you with anything else?</p>

        <div className="btndiv">
          <Button
            variant="outlined"
            style={{
              borderRadius: 10,
              fontWeight: "bold",
              fontFamily: "Mulish",
              fontStyle: "normal",
              width: 100,
            }}
            onClick={yesHandler}
          >
            YES
          </Button>
          <Button
            variant="outlined"
            style={{
              borderRadius: 10,
              fontWeight: "bold",
              fontFamily: "Mulish",
              fontStyle: "normal",

              width: 100,
            }}
            onClick={() => setshow(true)}
          >
            Nope
          </Button>
        </div>
      </div>
      {show === true ? <NopeRespoCompo /> : null}
    </div>
  );
};

export default OptionCard;
