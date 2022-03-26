import React, { useState, useContext } from "react";
import { LangContext } from "../../Context/LangContext";
import "./TrackCompo.css";

const TrackCompo = ({ data, userindex }) => {
   console.log("DATAsrhy ", data);
  const { language } = useContext(LangContext);
  const [uiOpen, setUiOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleOpen = (i) => {
    setSelectedIndex(i);
    setUiOpen(true);
  };

  const today = Date.now();
  const Time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(today);

  return (
    <>
      <div
        className={language === "En" ? "containerTrack" : "containerTrackAr"}
      >
        {data.map((i, index) => {
          // console.log("11", i);
          const Totalnum = i.items.length;

          return (
            <div key={Math.random()} className="datalist">
              <div>
                <p
                  onClick={() => handleOpen(index)}
                  className={language === "En" ? "orderNO" : "orderNOAr"}
                >
                  {language === "En"
                    ? "Order No:" + i.sdmOrderRef
                    : i.sdmOrderRef + ": رقم الطلب"}
                </p>

                <p
                  className={
                    language === "En" ? "orderstatus" : "orderstatusAr"
                  }
                >
                  {language === "En" ? i.status : "ريثما"}
                </p>
                {index === selectedIndex && uiOpen ? null : (
                  <div
                    className={
                      language === "En"
                        ? "containeramount"
                        : "containeramountAr"
                    }
                  >
                    <p className="amount">{i.payment.amount}</p>
                    <p className="sar">
                      {language === "En"
                        ? userindex === 1
                          ? "SAR"
                          : "AED"
                        : "درهم إماراتي"}
                    </p>
                  </div>
                )}
              </div>
              {index === selectedIndex && uiOpen ? (
                <>
                  {language === "En" ? (
                    <div className="totalcontainer">
                      <div className="subtotalcontainer">
                        <h2 className="amount">{Totalnum}</h2>
                        <p className="amount">
                          {Totalnum === 1 ? "item" : "items"}
                        </p>
                      </div>
                      <div className="detailsContainer">
                        {i.items.map((item) => {
                          // console.log("itemm", item.id);
                          return (
                            <div key={item.id} className="qtycontainer">
                              <p className="amount">
                                {item.qty}x {item.name}
                              </p>
                              <p className="amount"> {item.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="totalcontainer">
                      <div className="detailsContainer">
                        {i.items.map((item) => (
                          <div key={item._id} className="qtycontainer">
                            <p className="amount">
                              {item.qty}x {item.name}
                            </p>
                            <p className="amount"> {item.description}</p>
                          </div>
                        ))}
                      </div>
                      <div className="subtotalcontainer">
                        <h2 className="amount">{Totalnum}</h2>
                        <p className="amount">
                          {Totalnum === 1 ? "العنصر" : "أغراض"}
                        </p>
                      </div>
                    </div>
                  )}

                  <hr />
                  {language === "En" ? (
                    <div className="sarcontainer">
                      <div className="containeramount">
                        <p className="amount">{i.payment.amount}</p>

                        <p className="sar">{userindex === 1 ? "SAR" : "AED"}</p>
                      </div>

                      <h3 className="amount"> {i.status}</h3>
                    </div>
                  ) : (
                    <div className="sarcontainer">
                      <div className="containeramount">
                        <p className="amount">{i.payment.amount}</p>
                        <p className="sar">درهم إماراتي</p>
                      </div>

                      <h3 className="amount">
                        {language === "En" ? i.status : "ريثما"}{" "}
                      </h3>
                    </div>
                  )}
                </>
              ) : null}
            </div>
          );
        })}
      </div>

      <p className={language === "En" ? "timetrack" : "timetrackAr"}>{Time}</p>
    </>
  );
};

export default TrackCompo;
