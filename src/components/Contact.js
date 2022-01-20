import React, { Component } from 'react';

class Contact extends Component{
    render(){
        return(
            <div className="wrapper">
                <h3 className="supTitle txtCenter">VISIT US</h3>
                <div className="borderBox">
                    <p>123 King St E, Toronto, Ontario</p>
                    <p>416-xxx-xxxx</p>
                    <h4 className="supTitle">Hours: Mon - Fri (11:00AM ~ 9:00PM)</h4>
                </div>
                <div className="borderBox">
                    <p>420 Queen St E, Toronto, Ontario</p>
                    <p>416-xxx-xxxx</p>
                    <h4 className="supTitle">Hours: Mon - Fri (11:00AM ~ 9:00PM)</h4>
                </div>
                <div className="borderBox">
                    <p>589 Bedford Hwy, Halifax, NS</p>
                    <p>happirestaurant2022@gmail.com</p>
                    <p>902-xxx-xxxx</p>
                    <a className="myWeb" href="https://victorkaiwong.com/" target="_blank"  rel="noreferrer">https://victorkaiwong.com</a>
                    <h4 className="supTitle">Office Hours: Mon - Fri (9:00AM ~ 5:00PM)</h4>
                </div>
            </div>
        );
    }
}

export default Contact;