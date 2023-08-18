import { IntlProvider, FormattedMessage } from "react-intl";

import "./App.css";
import { useEffect, useState } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba React",
    description: "React Öğreniyorum",
    //parameter: "3 yeni mesaj...",
    parameter: `{count} yeni mesaj...`,
  },

  "en-US": {
    title: "Hello React",
    description: "I am learning React",
    parameter: `{count} new messages...`,
  },
};

function App() {
  const isLocale = localStorage.getItem("locale");
  //const defaultLocale=navigator.language;
  const defaultLocale = isLocale ? isLocale : navigator.language;
  //const [locale, setLocale] = useState("tr-TR");
  const [locale, setLocale] = useState({ defaultLocale });

  console.log(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      {/* <IntlProvider messages={messages}> */}
      {/* <IntlProvider messages={messages["tr-TR"]}> */}
      {/* <IntlProvider messages={messages[lang]}> */}
      <IntlProvider locale={locale} messages={messages[locale]}>
        <h1>
          <FormattedMessage id="title" />
        </h1>
        <p>
          <FormattedMessage id="description" />
        </p>
        <p>
          <FormattedMessage
            id="parameter"
            values={{ count: 35 }}
          ></FormattedMessage>
        </p>

        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
