import React from 'react'
import { bg } from './imgs/imgs'
import {FormattedMessage} from 'react-intl';

const DashboardTop = () => {
    return (
        <div className='dashboard__top-box'>
              <img style={{   width: '100%', height: '100%' }} src={bg} alt="dev image" />
              <div className='dashboard__top-box-phrase'>
                <h2 className='dashboard__top-box-phrase__text dashboard__top-box-phrase__text--sub'>
                   <FormattedMessage
                        id = "top.title1"
                        defaultMessage="Always looking for"
                    />
                <span>
                    
                        <FormattedMessage
                            id = "top.title2"
                            defaultMessage="writing"
                        />
                </span>
                
                </h2>
                <h2 className='dashboard__top-box-phrase__text'>
                        <FormattedMessage
                            id = "top.title3"
                            defaultMessage="the most"
                        />
                        <span>
                            <FormattedMessage
                            id = "top.title4"
                            defaultMessage="clean and reusable code"
                            />
                        </span>
                        
                </h2>
              </div>
              
              
        </div>
    )
}

export default DashboardTop
