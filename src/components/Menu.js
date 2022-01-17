import React, { Component } from 'react';
import FoodStorage from './FoodStorage';
import DisplayFood from './DisplayFood';

class Menu extends Component{
    constructor(){
        super();
        this.state = {
            Food:FoodStorage,
        }
    }
    render(){
        return(
            <div>
                <p>Menu</p>
                {console.log(this.state.Food)}
                {
                this.state.Food.map((x) => {
                return (
                    <DisplayFood 
                    name={x.name}
                    key={x.id}
                    price={x.price}
                    imageSrc={x.imageSrc}
                />
                )
            })
        }
            </div>
        );
    }
}

export default Menu;