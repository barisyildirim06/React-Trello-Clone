import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from 'pages/home-page';

function App() {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
          </BrowserRouter>
        </div>
    );
};

export default App;
