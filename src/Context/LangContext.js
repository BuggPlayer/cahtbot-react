import React, { createContext, useEffect, useState } from "react";
export const LangContext = createContext();
export const LangProvider = ({ children }) => {
  const [recievedMessage, setRecievedMessage] = useState("");
  const [user1, setUser1] = useState("");
  const [currentLang, setcurrentLang] = React.useState("En");
  // const [value, setValue] = useState("")

  const LanguageChangeHandler1 = () => {
    setcurrentLang("En");
  };
  const LanguageChangeHandler2 = () => {
    setcurrentLang("En");
  };
  const LanguageChangeHandler3 = () => {
    setcurrentLang("Ar");
  };

  const userhandler1 = () => {
    setUser1("usser1");
  };

  // const updateValue = (v) =>{
  //   setValue(v)
  // }

  // useEffect(() => {
  //   window.addEventListener("message", function (e) {
  //     // console.log("e", e);
  //     if (e.origin !== "http://localhost:3000") return;
  //     setRecievedMessage(e.data);
  //   });
  // }, []);
  return (
    <LangContext.Provider
      value={{
        language: currentLang,
        LanguageChangeHandler1,
        LanguageChangeHandler2,
        LanguageChangeHandler3,
        userhandler1,
        // updateValue,
        // value,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
