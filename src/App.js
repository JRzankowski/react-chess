import React from 'react';
// import {HashRouter, Switch, Route} from 'react-router-dom';
import Menu from './components/menu';
import Game from './components/game';
import Settings from './components/settings';
import Credits from './components/credits';
import {HashRouter, Route, Switch} from "react-router-dom";



function App() {

        return (
            <>
                <HashRouter>
                    <Switch>
                        <Route exact path={"/"} component={Menu} />
                        <Route path="/game" component={Game}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/credits" component={Credits}/>
                    </Switch>
                </HashRouter>
            </>
        )




}

export default App;
