import React from 'react'
import { bg } from './imgs/imgs'

const DashboardTop = () => {
    return (
        <div className='dashboard__top-box'>
              <img style={{   height: '680px', width: '100vw' }} src={bg} alt="dev image" />
              <div className='dashboard__top-box-phrase'>
                <h2 className='dashboard__top-box-phrase__text dashboard__top-box-phrase__text--sub'>
                    Always looking forward to <span>writing</span> the most 
                </h2>
                <h2 className='dashboard__top-box-phrase__text'>
                        <span>
                            clean and reusable code
                        </span>
                        
                </h2>
              </div>
              
              
        </div>
    )
}

export default DashboardTop
