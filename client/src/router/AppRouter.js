import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import SideBar from '../components/layout/sidebar/SideBar';






const AppRouter = () => {



   
    return(
    <Router >
        
        <div className='app'>
      
       
           
                <SideBar />
  
                <Switch>
              
                    <Route exact path="/" component={Dashboard} />
                   
                </Switch >
              
       

        </div>


    </Router>
)
    };

export default AppRouter;
