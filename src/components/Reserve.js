import React, { Component } from 'react';
import firebase from './firebase';

class Reserve extends Component{
    constructor(){
        super()
        this.state = {
            userReserveDate:'',
            userReserveTDate:'',
            userParty:'',
            userName:'',
            PartyDefault:[1,2,3,4,5,6,7,8,9,10,">10"],
            Display:[]
            
        }
    }
    componentDidMount(){

        // avariable to store a reference to our database
        const dbRef = firebase.database().ref();

        dbRef.on('value',(x)=> {

        //our firebase object with books
        const data = x.val();
        console.log(x.val());
        console.log(Object.entries(data));
        this.setState({
            Display:Object.entries(data)
          })
        })

    }
      





    userReserveFn = (e) => {
        let day = new Date( e.target.value ).getUTCDay()
        console.log(day);
        if (day == 6 || day == 0){
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
        console.log(time);
        if ( time < "11" || time >= "21"){
            alert("Hours: Mon - Fri (11:00AM ~ 9:00PM), please pick within the open hours :)")
            this.setState({
                userReserveTDate: ""
            })
        }
        const dbRef = firebase.database().ref();
        const newState = {
            Name: this.state.userName,
            Date: this.state.userReserveDate,
            Time: this.state.userReserveTDate,
            PartySize: this.state.userParty
        };
        dbRef.push(newState);

        this.setState({
            // Reset
            userReserveDate:'',
            userReserveTDate:'',
            Display:Object.entrie(newState)
          })
    }

    deleteReservationFn = (x) => {
        const dbRef = firebase.database().ref();
        // dbRef.child(x).remove();
    }


    render(){
        return(
            <div>
                <h3>RESERVATION</h3>
                <p>**PLEASE NOTE: Proof Of COVID-19 vaccination required to enter. Please have your ID ready & proof of full vaccination being received at least 14 days prior to dining. Proof of vaccination not required for persons who provide physician letter, takeout orders or persons under 12 years of age.**</p>
                <p>Name</p>
                    <input type="text" onChange={this.userNameFn} placeholder="Your Name" />
                <p>Date</p>
                    <input type="date" placeholder="yyyy/mm/dd" onChange={this.userReserveFn} value={this.state.userReserveDate} />
                    {console.log(this.state.userReserveDate)}
                <p>Time</p>
                    <input type="time" onChange={this.userReserveTFn} value={this.state.userReserveTDate} />
                    {console.log(this.state.userReserveTDate)}
                <p>Party Size</p>
                <select name="PartySize" onChange={this.userPartySizeFn}>
                    {
                    this.state.PartyDefault.map((x,index) => (
                            <option value={x} key={index}>{x}</option>
                    )
                    )}
                </select>
                <input type="submit" value="Submit" onClick={this.userConfirmReserve} />

                <div>
                <ul>
                            {
                            this.state.Display.map((x, index) => (
                                <li key="index">
                                <p>{(x[1].Name)}</p>
                                <p>{(x[1].Date)}</p>
                                <p>{(x[1].Time)}</p>
                                <p>{(x[1].PartySize)}</p>
                                </li>
                            )
                            )}

                </ul>
                </div>
            </div>
        );

    }
}

export default Reserve;