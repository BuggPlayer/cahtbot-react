import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./TypingBox.css";
import { buttons } from "../../assets/Demodata/Demodata";

import { FaTelegramPlane } from "react-icons/fa";

const TypingBox = ({ Userinput, setuserInput, childToParent }) => {
  const [value, setvalue] = useState("");
  function onChange(e) {
    console.log("e", e.target.value);

    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setvalue(e.target.value);
      // this.setState({ value: e.target.value });
    }
  }
  const datachange = (e) => {
    setvalue(e.target.value);
    // console.log("valuee01", value);
    childToParent(value);
  };
  return (
    <footer
      style={{
        padding: 10,
        height: 60,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",

        width: "auto",
        // top: 651,
        position: "fixed",
        bottom: 0,
        backgroundColor: "white",
        marginTop: 100,
        zIndex: 1,
      }}
    >
      <input
        onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
        style={{
          borderRadius: 10,
          border: "none",
          width: 260,
          marginLeft: 14,
          padding: 20,
          fontSize: 16,
          backgroundColor: "#f2f3f7",
          marginTop: 5,
        }}
        placeholder="please type your option here(eg.1.2.3)"
        onChange={onChange}
        value={value}
      />
      <div
        style={{
          background: "red",
          height: 50,
          width: 50,
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        }}
        onClick={datachange}
      >
        <FaTelegramPlane style={{ height: 25, width: 30 }} />
      </div>
    </footer>
  );
};

export default TypingBox;
