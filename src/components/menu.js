import React, {Component} from "react";
import {Link, HashRouter} from 'react-router-dom';




class Menu extends Component {
    render() {
        return (
            <HashRouter >
            <div className='container menu'>

                <ul className='menu__navigation'>
                    <li className='navigation__item'>
                        <Link to='/game' className='navigation__item--link'>Play</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='/settings' className='navigation__item--link'>Settings</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='/credits' className='navigation__item--link'>Credits</Link>
                    </li>
                </ul>



            </div>
            </HashRouter>
        );
    }
}

export default Menu;