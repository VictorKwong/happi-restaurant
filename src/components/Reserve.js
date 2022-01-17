import React, { Component } from 'react';


class Reserve extends Component{
    constructor(){
        super()
        this.state = {
            userReserveDate:''
        }
    }
    userReserveFn = (e) => {
        console.log(e.target.value);
        this.setState({
            userReserveDate: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>RESERVATION</h3>
                <p>**PLEASE NOTE: Proof Of COVID-19 vaccination required to enter. Please have your ID ready & proof of full vaccination being received at least 14 days prior to dining. Proof of vaccination not required for persons who provide physician letter, takeout orders or persons under 12 years of age.**</p>
                <p>Date</p>
                    <input type="text" name="reserveDateID" placeholder="yyyy/mm/dd" onChange={this.userReserveFn} value={this.state.userReserveDate} />
                {/* drop down menu */}
                <p>Party Size</p>
            </div>
        );
    }
}

export default Reserve;