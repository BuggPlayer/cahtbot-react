import React, { useState, useContext } from "react";
import { LangContext } from "../../Context/LangContext";
import "./TrackmyorderCard.css";
import orderlogo from "../../assets/images/DeliveryAgentIcon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ConfirmOrderCard from "./ConfirmOrderCard";
import OptionCard from "./OptionCard";
import RightSideComponent from "../RightSideCompo/RightSideComponent";
import Demotext from "./Demotext";
import { Grid } from "@material-ui/core";
const TrackmyorderCard = ({ data, userindex, setui }) => {
  const { language } = useContext(LangContext);
  const [show, setShow] = useState(false);

  const [status, setstatus] = useState("");

  const handlerShow = (item) => {
    // console.log("mitem", item);
    setstatus(item);
    setShow(true);
  };
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        {data.map((item) => {
          const dat1 = item.createdAt;
          const date = new Date(dat1 * 1000).toGMTString();
          return (
            <SwiperSlide>
              <Grid
              // className={
              //   language === "En" ? "ordertrackmaine" : "main-order_ar"
              // }
              >
                <div
                  className={language === "En" ? "cardplate" : "cardplate_ar"}
                >
                  <p
                    className={
                      language === "En" ? "textorderid" : "textorderid_ar"
                    }
                  >
                    {language === "En"
                      ? ` Order ID: ${item.sdmOrderRef}`
                      : `${item.sdmOrderRef} رقب: `}
                  </p>
                </div>
                <img
                  src={orderlogo}
                  alt="wait"
                  className={
                    language === "En" ? "orderimglogo" : "orderimglogo_ar"
                  }
                />
                <div
                  className={language === "En" ? "main-order" : "main-order_ar"}
                >
                  <div style={{ marginTop: 60 }}>
                    {item.items.map((item) => {
                      var str = item?.name;
                      return (
                        <p
                          className={
                            language === "En" ? "itemname" : "itemname_ar"
                          }
                        >{`${str},`}</p>
                      );
                    })}
                  </div>
                  <div
                    className={language === "En" ? "ordertype" : "ordertype_ar"}
                  >
                    <p
                      className={
                        language === "En" ? "ordertypetext" : "ordertypetext_ar"
                      }
                    >
                      {item.orderType}
                    </p>
                  </div>
                  <p className={language === "En" ? "timedate" : "timedate_ar"}>
                    Placed on {date}
                  </p>
                </div>
                <div className={language === "En" ? "selctbtn" : "selctbtn_ar"}>
                  <p
                    className={
                      language === "En" ? "selectbtntext" : "selectbtntext_ar"
                    }
                    onClick={() => handlerShow(item)}
                  >
                    SELECT
                  </p>
                </div>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {show === true && (
        <>
          <RightSideComponent title={`Order ID - ${status.sdmOrderRef}`} />
          <Demotext title="cool! let me check..." />
          <ConfirmOrderCard status={status.status} />
          
          <OptionCard setui={setui} userindex={userindex} />
        </>
      )}
    </>
  );
};

export default TrackmyorderCard;
