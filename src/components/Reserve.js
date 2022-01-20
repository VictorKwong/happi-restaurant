import React, { Component } from 'react';
import firebase from './firebase';

class Reserve extends Component{
    constructor(){
        super()
        this.state = {
            userReserveDate:'',
            userReserveTDate:'',
            userParty:1,
            userName:'',
            PartyDefault:[1,2,3,4,5,6,7,8,9,10,">10"],
            Display:[]
            
        }
    }
    componentDidMount(){
        // avariable to store a reference to our database
        const dbRef = firebase.database().ref();
        dbRef.on('value',(x)=> {
        //our firebase object with Reserve
        const data = x.val();
        if (data === null) {
            return 0;
        }
        this.setState({
            Display:Object.entries(data),
            userName:'',
            userReserveDate:'',
            userReserveTDate:''
          })
        })
    }

    userReserveFn = (e) => {
        let day = new Date( e.target.value ).getUTCDay()
        let today = new Date();
        let targetday = new Date( e.target.value )
        today.setHours(0,0,0,0);
        if( targetday <= today ){
            alert("Sorry we cannot reserve table on the past or today's date :)")
            this.setState({
                userReserveDate: ""
            })
        }else if (day === 6 || day === 0){
                alert("Sorry we are not open on the weekends! Please pick Mon-Fri :)")
                this.setState({
                    userReserveDate: ""
                })
        }else{
        this.setState({
            userReserveDate: e.target.value
        })
        }
    }
    userReserveTFn = (e) => {
        this.setState({
            userReserveTDate: e.target.value
        })
    }
    userPartySizeFn = (e) => {
        this.setState({
            userParty: e.target.value
        })
    }
    userNameFn = (e) => {
        this.setState({
            userName: e.target.value
        })
    }
    userConfirmReserve =(e) =>{
        e.preventDefault();
        let time = this.state.userReserveTDate.substring(0,2)
        if( this.state.userName.trim() === "" || this.state.userReserveDate.trim() === "" || this.state.userReserveTDate.trim() === ""){
            alert("Please fill out all the information :), Name|Date|Time|PartySize are all required.")
            return ;
        }else if( time < "11" || time >= "21"){
            alert("Hours: Mon - Fri (11:00AM ~ 9:00PM), please pick within the open hours :)")
            this.setState({
                userReserveTDate: ""
            })
            return ;    
        }

        const dbRef = firebase.database().ref();
        const newState = {
            Name: this.state.userName,
            Date: this.state.userReserveDate,
            Time: this.state.userReserveTDate,
            PartySize: this.state.userParty
        };
        dbRef.push(newState);
        alert("Reserved, See you soon!")
    }

    deleteReservationFn = (x) => {
        const dbRef = firebase.database().ref();
        dbRef.child(x).remove();
        dbRef.on('value',(x)=> {
            //check if only value
            const data = x.val();
            if (data === null) {
            this.setState({
                Display:[]
            })
            }
        })
    }


    render(){
        return(
            <div className="supTitle txtCenter wrapper">
                <h3>RESERVATION</h3>
                <p>**PLEASE NOTE: Proof Of COVID-19 vaccination required to enter. Please have your ID ready & proof of full vaccination being received at least 14 days prior to dining. Proof of vaccination not required for persons who provide physician letter, takeout orders or persons under 12 years of age.**</p>
                <div className="supTitle borderBox">
                    <p>Name</p>
                        <input type="text" onChange={this.userNameFn} placeholder="Your Name" value={this.state.userName}/>
                    <p>Date</p>
                        <input type="date" placeholder="yyyy/mm/dd" onChange={this.userReserveFn} value={this.state.userReserveDate} />
                    <p>Time</p>
                        <input type="time" onChange={this.userReserveTFn} value={this.state.userReserveTDate} />
                    <p>Party Size</p>
                    <select name="PartySize" onChange={this.userPartySizeFn}>
                        {
                        this.state.PartyDefault.map((x,index) => (
                                <option value={x} key={index}>{x}</option>
                        ))}
                    </select>
                    <input type="submit" value="Submit" onClick={this.userConfirmReserve} />
                </div>        
                <div>
                    <h4>Reservation List</h4>
                <ul className="menuWrapper">
                            {
                            this.state.Display.map((x) => (
                                <li key={x[0]} className="supTitle borderBox">
                                <p>Name: {(x[1].Name)}</p>
                                <p>Date: {(x[1].Date)}</p>
                                <p>Time: {(x[1].Time)}</p>
                                <p>Party Size: {(x[1].PartySize)}</p>
                                <button onClick={() => this.deleteReservationFn(x[0])}>Cancel</button> 
                                </li>
                            ))}

                </ul>
                </div>
            </div>
        );

    }
}

export default Reserve;