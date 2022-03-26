import React, { useState, useEffect, useContext, useRef } from "react";
import { buttons } from "../../assets/Demodata/Demodata";
import Header from "../../components/Header/Header";
import LeftSideComponent from "../../components/LeftSideCompo/LeftSideComponent";
import WelcomeCompo from "../../components/welcomemessage/WelcomeCompo";
import { LangContext } from "../../Context/LangContext";
import chatRepo from "../../services/chatRepo";
import "./chatbot.css";
import { useHistory } from "react-router-dom";
import TypingBox from "../../components/TypingBox/TypingBox";

const Home = (props) => {
  const [usertypeno, setusertypeno] = useState();
  let history = useHistory();
  // console.log("props", props.location.index);
  const { language, LanguageChangeHandler3, updateValue } = useContext(LangContext);

  if (props.location.index === 2) {
    LanguageChangeHandler3();
  }
  const divRef = useRef(null);

  const [Userinput, setuserInput] = useState("");

  const childToParent = (childdata) => {
    // updateValue(childdata)
   setuserInput(childdata);
  };

  const [Data, setData] = useState({});
  const [ui, setui] = React.useState([]);
  const [visible, setVisisble] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await chatRepo.getFirstData(
        buttons[props.location.index]?.language,
        buttons[props.location.index]?.header
      );

      setData({ ...res.data.data });
      ;
      setui((pre) => {
        return [
          ...pre,
          {
            id: 1,
            component: (postion, result) => {
              return (
                <LeftSideComponent
                  Userinput={Userinput}
                  usertypeno={usertypeno}
                  result={res.data.data.suggestions}
                  setui={(res) => setui(res)}
                  userindex={props.location.index}
                  setVisisble={setVisisble}
                />
              );
            },
            postion: "left",
          },
        ];
      });
    })();
  }, [Userinput]);

 
  return (
    <div style={{ backgroundColor: "#f2f3f7", height: "80vh" }}>
      <Header />
      <WelcomeCompo data={Data} />

      <div
        style={{
          backgroundColor: "#f2f3f7",
          height: "auto",
          position: "relative",
        }}
      >
        {ui.map((item) => {
          return (
            <div key={Math.random()}>
              {item.postion === "left"
                ? item.component("left", Data)
                : item.component("right")}
            </div>
          );
        })}
      </div>

      {/* {visible && (
        <LeftSideComponent
          Userinput={Userinput}
          usertypeno={usertypeno}
          result={Data?.suggestions}
          setui={(res) => setui(res)}
          userindex={props.location.index}
          setVisisble={setVisisble}
        />
      )} */}
      <TypingBox childToParent={childToParent} />
    </div>
  );
};

export default Home;
