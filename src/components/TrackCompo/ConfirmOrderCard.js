import React from "react";
import "./ConfirmOrderCard.css";

const ConfirmOrderCard = ({ status }) => {
  console.log("status", status);
  return (
    <div>
      <div className="confirmedorder">
        <div
          style={{ display: "flex", textAlign: "center", alignItems: "center" }}
        >
          <p className="textstatus">The order is </p>
          <p
            className="textstatusred"
            style={{ color: "#e4002b", marginLeft: 7, textAlign: "center" }}
          >
            {status}🤞
          </p>
        </div>

        <p className="textoption">
          Sit back and relax and your order will be confirmed soon. Can we help
          you with anything else?
        </p>
      </div>
    </div>
  );
};

export default ConfirmOrderCard;
