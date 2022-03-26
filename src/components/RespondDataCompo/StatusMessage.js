import React from "react";
import "./StatusMessage.css";

const StatusMessage = ({ data }) => {
  return (
    <div className="statusmessage">
      <p className="messageStatus">
        {data.header} {data.ccodCode} {data.customerCareNumber}
      </p>
    </div>
  );
};

export default StatusMessage;
