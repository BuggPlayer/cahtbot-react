import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { buttons } from "../../assets/Demodata/Demodata";
const UserTest = () => {
  return (
    <div
      style={{
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {buttons.map((item, i) => {
        // console.log("i", item);
        return (
          <Button
            key={item.id}
            component={Link}
            to={{
              pathname: "/chatbot",
              // state: "usser1",
              index: i,
            }}
            style={{
              fontFamily: "Mulish",
              fontStyle: "normal",
              fontWeight: "bold",
              margin: 15,
            }}
            variant="outlined"
            // onClick={handler(item)}
          >
            {item.title}
          </Button>
        );
      })}
    </div>
  );
};

export default UserTest;
