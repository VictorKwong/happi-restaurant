import React, { Component } from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <h3 className="supTitle">VISIT US</h3>
                <div className="contactTitle">
                    <p>123 King St E, Toronto, Ontario</p>
                    <p>416-xxx-xxxx</p>
                    <h4 className="supTitle">Hours: Mon - Fri (11:00AM ~ 9:00PM)</h4>
                </div>
                <div className="contactTitle">
                    <p>420 Queen St E, Toronto, Ontario</p>
                    <p>416-xxx-xxxx</p>
                    <h4 className="supTitle">Hours: Mon - Fri (11:00AM ~ 9:00PM)</h4>
                </div>
                <div className="contactTitle">
                    <h4 className="supTitle">Contact Office</h4>
                    <p>589 Bedford Hwy, Halifax, NS</p>
                    <p>happirestaurant2022@gmail.com</p>
                    <p>902-xxx-xxxx</p>
                    <h4 className="supTitle">Hours: Mon - Fri (9:00AM ~ 5:00PM)</h4>
                </div>
            </div>
        );
    }
}

export default Contact;