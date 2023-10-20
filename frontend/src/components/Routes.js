import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';


function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                   
                </ul>
            </nav>

            <Switch>
               
                <Route path="/" exact>
                    <p>Selecciona una opción en el menú de arriba.</p>
                </Route>
            </Switch>
        </div>
    );
}

export default Dashboard;