import React from 'react';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import ContentRowCenter from './ContentRowCenter';
import Proyectos from "./Proyectos";

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- End of Sidebar -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentRowCenter />
                </Route>
                <Route exact path="/proyectos">
                    <Proyectos/>
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;