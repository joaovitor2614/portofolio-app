import React, { useState } from 'react'


import English from './English.json'
import Portuguese from './Portuguese.json'
import {IntlProvider} from 'react-intl';
import getLang from './lang'

export const Context = React.createContext();

// getting currnt user's lang
const local = navigator.language;

let { lang } = getLang(local, English, Portuguese)


const Wrapper = (props) => {

  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);
  function selectLanguage(e) {
    const newLocale = e.target.value;

    setLocale(newLocale);
    if (newLocale === 'en') {
          setMessages(English)
    } else {
        if (newLocale === 'pt-PT') {
            setMessages(Portuguese)
    } else {
        setMessages(English)
    }
  }
}
  return (
      <Context.Provider value={{locale, selectLanguage}}>
              <IntlProvider messages={messages} locale={locale}>
                 {props.children}
              </IntlProvider>
      </Context.Provider>
  )
}

export default Wrapper