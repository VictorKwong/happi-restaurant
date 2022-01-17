import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Main from './Main';
import Reserve from './Reserve';
import Order_online from './Order_online';
import Menu from './Menu';
import Contact from './Contact';

class Header extends Component{
    render(){
        return(
            <Router>
                <header>
                    <h1><Link to="/">Happi Restaurant</Link></h1>
                </header>
                <div>
                    <nav>
                        <ul className="headerList">
                            <li><Link to="/reserve">RESERVE</Link></li>
                            <li><Link to="/order_online">ORDER ONLINE</Link></li>
                            <li><Link to="/menu">MENU</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/reserve" element={<Reserve />} />
                    <Route path="/order_online" element={<Order_online />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Main />} />
                </Routes>
            </Router>

        )
    }
}

export default Header;