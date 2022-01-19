import React from 'react';


const DisplayFood = (data) =>{
    return(
        <div>
            <div className="txtCenter">
                <img className="menuFoodPicture" src={data.imageSrc} alt={data.name} />
                <p>{data.name}</p>
                <p>{data.price}</p>
            </div>
        </div>
        )
}

export default DisplayFood;