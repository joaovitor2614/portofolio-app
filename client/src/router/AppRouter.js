import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import SideBar from '../components/layout/sidebar/SideBar';
import { SnackbarProvider } from 'notistack';
import { Slide } from '@material-ui/core';





const AppRouter = () => {



   
    return(
    <Router >
        <SnackbarProvider maxSnack={3} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            TransitionComponent={Slide}
        
        >
            <div className='app'>
                
        
        
            
                <SideBar />

                <Switch>
            
                    <Route exact path="/" component={Dashboard} />
                
                </Switch >
            
    

            </div>
        </SnackbarProvider>
        
        


    </Router>
)
    };

export default AppRouter;
