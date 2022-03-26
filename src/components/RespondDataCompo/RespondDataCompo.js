import React from "react";
import CheckforrefoundnoItem from "./CheckforrefoundnoItem";
import CheckforrefoundItem from "./CheckforrefoundItem";
import "./RespondDataCompo.css";

const RespondDataCompo = ({ setui, data, callcode, userindex, seq }) => {
  console.log("datao", data);
  return (
    <>
      {data.header ? (
        <CheckforrefoundnoItem
          setui={setui}
          data={data}
          userindex={userindex}
        />
      ) : (
        <CheckforrefoundItem
          seq={seq}
          data={data}
          setui={setui}
          userindex={userindex}
        />
      )}
    </>
  );
};

export default RespondDataCompo;
