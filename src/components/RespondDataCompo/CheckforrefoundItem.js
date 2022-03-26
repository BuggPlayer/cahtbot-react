import React, { useState, useContext } from "react";
import { LangContext } from "../../Context/LangContext";
import orderlogo from "../../assets/images/DeliveryAgentIcon.svg";
import OptionCard from "../TrackCompo/OptionCard";
import StatusMessage from "./StatusMessage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import Cancelled from "../../assets/images/Cancelled.svg";
import "./CheckforrefoundItem.css";
import chatRepo from "../../services/chatRepo";
import { buttons } from "../../assets/Demodata/Demodata";

const CheckforrefoundItem = ({ data, setui, userindex, seq }) => {
  const [messageData, setMessageData] = useState("");
  const [show, setshow] = useState(false);

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

  const handlerMessage = async (item) => {
    const name = item.payment.name;
    const noonpayOrderId = item.payment.noonpayOrderId;
    const res = await chatRepo.getRefundStatus(
      seq,
      buttons[userindex]?.language,
      buttons[userindex]?.header,
      name,
      noonpayOrderId
    );
    setshow(true);
    setMessageData(res.data.data);
    console.log("res", res.data.data);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1.3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        {data
          ? data.map((item) => {
              const dat1 = item.createdAt;
              const date = new Date(dat1 * 1000).toGMTString();
              return (
                <SwiperSlide>
                  <div className="ordertrackmainecancel">
                    <div className="cardplatecancel">
                      <p className="textorderidcancel">
                        Order ID: {item.sdmOrderRef}
                      </p>
                    </div>
                    <img
                      src={orderlogo}
                      alt="wait"
                      className="orderimglogocancel"
                    />
                    <div className="main-ordercancel">
                      <img
                        style={{ position: "absolute", top: 74, left: 197 }}
                        src={Cancelled}
                        alt="Cancelled"
                      />
                      <div style={{ marginTop: 50 }}>
                        {item.items.map((item) => {
                          return (
                            <div style={{ display: "flex" }}>
                              <p>{item.name}</p>
                            </div>
                          );
                        })}
                      </div>
                      <p className="timedatecancel">Placed on {date}</p>
                    </div>
                    <div className="selctbtnrefund">
                      <p
                        className="selectbtntextrefund"
                        onClick={() => handlerMessage(item)}
                      >
                        SELECT
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>

      {show && (
        <>
          <StatusMessage data={messageData} />
          <OptionCard setui={setui} userindex={userindex} />
        </>
      )}
    </>
  );
};

export default CheckforrefoundItem;
