import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Main from './Main';
import Reserve from './Reserve';
import Menu from './Menu';
import Contact from './Contact';

class Header extends Component{
    render(){
        return(
            <Router>
                <header>
                    <h1 className="wrapper"><Link to="/happi-restaurant/">Happi Restaurant</Link></h1>
                
                <div>
                    <nav>
                        <ul className="headerList wrapper">
                            <li><Link to="/happi-restaurant/reserve">RESERVE</Link></li>
                            <li><Link to="/happi-restaurant/menu">MENU</Link></li>
                            <li><Link to="/happi-restaurant/contact">CONTACT</Link></li>
                        </ul>
                    </nav>
                </div>
                </header>
                <Routes>
                    <Route path="/happi-restaurant/" element={<Main />} />
                    <Route path="/happi-restaurant/reserve" element={<Reserve />} />
                    <Route path="/happi-restaurant/menu" element={<Menu />} />
                    <Route path="/happi-restaurant/contact" element={<Contact />} />
                    <Route path="/" element={<Main />} />
                </Routes>
            </Router>

        )
    }
}

export default Header;