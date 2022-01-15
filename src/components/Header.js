import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <header>
                <h1>Happi Restaurant</h1>
                <div>
                    <ul className="headerList">
                        <li><a href='#'>RESERVE</a></li>
                        <li><a href='#'>ORDER ONLINE</a></li>
                        <li><a href='#'>MENU</a></li>
                        <li><a href='#'>CONTACT</a></li>
                    </ul>
                </div>

            </header>
        )
    }
}

export default Header;