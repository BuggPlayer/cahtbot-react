import React, { useState } from "react";
import { IntlProvider } from "react-intl";
const Context = React.createContext();

const local = navigator.language;
// console.log("local", local);

let lang;
if (local === "en-US") {
  lang = "English";
} else {
  lang = "arabic";
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  return (
    <Context.Provider value={{}}>
      <IntlProvider messages={messages} locale={local}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
