import React, { useState } from "react";

import Discount from "../../assets/images/Discount.svg";
import { Divider } from "@material-ui/core";
import "./ViewDeals.css";

const ViewDeals = ({ data, userindex }) => {
  
  const [itemtoshow, setitemtoshow] = useState(3);
  return (
    <div className="viewcontainer">
      {data
        ? data?.list?.slice(0, itemtoshow)?.map((item) => {
            console.log("itemarray", item);
            return (
              <>
                <div
                  style={{ display: "flex", alignItems: "center", padding: 5 }}
                >
                  <img
                    style={{ height: 30, width: 30 }}
                    src={Discount}
                    alt="discoount"
                  />
                  <p className="ccode">{item.ruleName}</p>
                  <p className="kfc20"> {}</p>
                </div>
                <Divider style={{ width: "90%", marginLeft: 12 }} />
              </>
            );
          })
        : null}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          marginTop: 10,
          fontFamily: "Mulish",
          color: "#11b5fd",
          fontSize: 12,
          fontWeight: 800,
        }}
      >
        {itemtoshow === 3 ? (
          <p onClick={() => setitemtoshow(data?.length)}>View more</p>
        ) : (
          <p onClick={() => setitemtoshow(3)}>View less</p>
        )}
      </div>
    </div>
  );
};

export default ViewDeals;
