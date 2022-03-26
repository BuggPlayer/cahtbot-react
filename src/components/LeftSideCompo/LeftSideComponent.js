import React, { useContext, useEffect } from "react";
import { Grid, Divider } from "@material-ui/core";

import RightSideComponent from "../RightSideCompo/RightSideComponent";
import chatRepo from "../../services/chatRepo";
import RespondDataCompo from "../RespondDataCompo/RespondDataCompo";
import TrackCompo from "../TrackCompo/TrackCompo";
import CancalModifycompo from "../CancalModifycompo/CancalModifycompo";
import PromoCompo from "../PromoCompo/PromoCompo";
import { LangContext } from "../../Context/LangContext";
import { buttons } from "../../assets/Demodata/Demodata";
import "./LeftSideComponent.css";
import Botlogo from "../BotLogo/Botlogo";
import TrackmyorderCard from "../TrackCompo/TrackmyorderCard";
import ConfirmOrderCard from "../TrackCompo/ConfirmOrderCard";
import OptionCard from "../TrackCompo/OptionCard";
import Demotext from "../TrackCompo/Demotext";

import ViewDeals from "../PromoCompo/ViewDeals";

const LeftSideComponent = ({
  result,
  setui,
  userindex,
  Userinput,
  ui,
  setVisisble,
}) => {
  const { language } = useContext(LangContext);
  //  const value = 3;
  // console.log("testuserinput>>>>>>>>>>", Userinput);
  const demodata = [
    { En: "here are some of the offers...", Ar: "هذه بعض العروض ..." },
  ];

  const processRefund = async (item, index, seq) => {
    const res = await chatRepo.getresponse(
      seq,
      buttons[userindex]?.language,
      buttons[userindex]?.header
    );
    // console.log("res", res);

    setui((pre) => [
      ...pre,
      {
        id: 4,
        component: (postion) => (
          <>
            <RightSideComponent title={item} />
            <RespondDataCompo
              result={result}
              setui={setui}
              data={res.data.data}
              userindex={userindex}
              seq={seq}
            />
          </>
        ),
        postion: "right",
      },
    ]);
  };

  const processTrackmyorder = async (item, index, seq) => {
    // setVisisble(false)
    const res = await chatRepo.getTrack(
      seq,
      buttons[userindex]?.language,
      buttons[userindex]?.header
    );
    setui((pre) => [
      ...pre,
      {
        id: 4,
        component: (postion) => (
          <>
            <RightSideComponent title={item} />
            <Demotext title={demodata} />
            <TrackmyorderCard
              data={res.data.data.list}
              userindex={userindex}
              setui={setui}
            />
          </>
        ),
        postion: "right",
      },
    ]);
  };
  const processCancaelmyorder = async (item, index, seq) => {
    const res = await chatRepo.getcancalmyOrder(
      seq,
      buttons[userindex]?.language,
      buttons[userindex]?.header
    );
    // console.log("resssscanclmyorder", res);
    // setVisisble(false)
    setui((pre) => [
      ...pre,
      {
        id: 4,
        component: (postion) => (
          <>
            <RightSideComponent title={item} />
            <CancalModifycompo val={res.data.data.header} />
            <LeftSideComponent
              result={result}
              setui={setui}
              userindex={userindex}
            />
          </>
        ),
        postion: "right",
      },
    ]);
  };
  const processofferdeals = async (item, index, seq) => {
    const res = await chatRepo.getPromo(
      seq,
      buttons[userindex]?.language,
      buttons[userindex]?.header
    );

    setui((pre) => [
      ...pre,
      {
        id: 4,
        component: (postion) => (
          <>
            <RightSideComponent title={item} />
            <Demotext title={demodata} />
            <ViewDeals data={res.data.data} userindex={userindex} />
            <OptionCard setui={setui} userindex={userindex} />
            {/* <PromoCompo data={res.data.data} userindex={userindex} /> */}
            {/* <LeftSideComponent
              result={result}
              setui={setui}
              userindex={userindex}
            /> */}
          </>
        ),
        postion: "right",
      },
    ]);
  };
  useEffect(() => {
    // console.log("userinoputeff", value);
    const index = Userinput - 1;
    const item = result[index];
    // console.log("item", item);
    var seq = item ? item.sequence : "";
    if (index === 0) {
      processTrackmyorder(item, index, seq);
    } else if (index === 2) {
      processRefund(item, index, seq);
    } else if (index === 3) {
      processofferdeals(item, index, seq);
    } else if (index === 1) {
      processCancaelmyorder(item, index, seq);
    }
  }, []);

  const selectHandler = async (item, index) => {
    var temp;
    var seq = item.sequence;
    if (index === 0) {
      processTrackmyorder(item, index, seq);
    } else if (index === 2) {
      processRefund(item, index, seq);
    } else if (index === 3) {
      processofferdeals(item, index, seq);
    } else if (index === 1) {
      processCancaelmyorder(item, index, seq);
    }
  };
  const today = Date.now();
  const Time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(today);

  // console.log("language", language);

  return (
    <div className="main">
      {language === "En" ? (
        <div style={{ marginLeft: 10 }}>
          <Grid item className="btn-container" xs={10}>
            {result
              ? result.map((item, index) => {
                  // console.log("item", item);
                  return (
                    <div key={Math.random()}>
                      <p
                        onClick={() => selectHandler(item, index)}
                        className="btnEn"
                      >
                        {item.En}
                      </p>

                      {index === 4 ? null : (
                        <Divider style={{ width: "90%", marginLeft: 12 }} />
                      )}
                    </div>
                  );
                })
              : "NO data"}
          </Grid>
          <p className={language === "En" ? "timeleft" : "timeleftAr"}>
            {Time}
          </p>
        </div>
      ) : (
        <>
          <div style={{ marginLeft: 10 }}>
            <Grid item className="btn-container_ar" xs={10}>
              {result
                ? result.map((item, index) => {
                    // console.log("item", item);
                    return (
                      <div key={Math.random()}>
                        <p
                          onClick={() => selectHandler(item, index)}
                          className="btnEn_ar"
                        >
                          {item.Ar}
                        </p>

                        {index === 4 ? null : (
                          <Divider style={{ width: "90%", marginLeft: 12 }} />
                        )}
                      </div>
                    );
                  })
                : "NO data"}
            </Grid>
            <p className={language === "En" ? "timeleft" : "timeleft_ar"}>
              {Time}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default LeftSideComponent;
