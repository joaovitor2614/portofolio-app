import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import English from './lang/English.json'
import Portuguese from './lang/Portuguese.json'
import Wrapper from './lang/Wrapper'
import {IntlProvider} from 'react-intl';
import store from './store/configStore'
import AppRouter from './router/AppRouter'
import './styles/main.scss'
import getLang from './lang/lang'



const jsx = (
    <Provider store={store}> 
        <Wrapper>
           <AppRouter />
        </Wrapper>
       
 
          
       
    </Provider>
)
ReactDOM.render(jsx, document.getElementById("app"))