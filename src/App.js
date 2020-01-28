import React from 'react';
// import {HashRouter, Switch, Route} from 'react-router-dom';
import Menu from './components/menu';
import Game from './components/game';
import Settings from './components/settings';
import Credits from './components/credits';
import {HashRouter, Route, Switch} from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';


function App() {

    return (
        <>
            <HashRouter>
                <AnimatedSwitch
                    atEnter={{opacity: 0}}
                    atLeave={{opacity: 0}}
                    atActive={{opacity: 1}}
                    className="switch-wrapper"
                >
                    <Route exact path={"/"} component={Menu}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/credits" component={Credits}/>
                </AnimatedSwitch

            >
            </HashRouter>
        </>
    )


}

export default App;
