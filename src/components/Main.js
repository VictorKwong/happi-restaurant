import React, { Component } from 'react';
import Mainimg from "../assets/Main.jpg";

class Main extends Component{

    render(){
        return(
            <div className="txtCenter supTitle wrapper mainFlex">
                <p className="supTitle">Promotion - follow the twitter link below, buy 2 get 1 item for free!</p>
                <p className="supTitle">Link: <a className="myWeb" href="https://twitter.com/VictorkaiWong1" target="_blank"  rel="noreferrer">Visit the website and follow me! :)</a></p>
                <img className="mainPageImg" src={Mainimg} alt="Cartoon person eating a burger, saying Yum" />
            </div> 

            
        );
    }
}


export default Main;