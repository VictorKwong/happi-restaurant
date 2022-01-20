import React, { Component } from 'react';
import FoodStorageAppetizer from './FoodStorageAppetizer';
import FoodStorageMainMeals from './FoodStorageMainMeals';
import DisplayFood from './DisplayFood';

class Menu extends Component{
    constructor(){
        super();
        this.state = {
            menuAppetizer:FoodStorageAppetizer,
            menuMainMeals:FoodStorageMainMeals
        }
    }
    render(){
        return(
            <div className="txtCenter">
                <h2 className="supTitle">Menu</h2>
                <h4 className="supTitle">Appetizer</h4>
                    <div className="menuWrapper">
                    {
                    this.state.menuAppetizer.map((x) => {
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
                 <h4 className="supTitle">Main Meals</h4>
                    <div className="menuWrapper">
                    {
                    this.state.menuMainMeals.map((y) => {
                            return (
                                <DisplayFood 
                                name={y.name}
                                key={y.id}
                                price={y.price}
                                imageSrc={y.imageSrc}
                            />
                            )
                        })                     
                    }
                    </div>
            </div>
        );
    }
}

export default Menu;