import React from 'react';


const DisplayFood = (data) =>{
    return(
        <div>
            <div>
                <img src={data.imageSrc} alt={data.name} />
            </div>
            <div className="txtCenter">
                <p>{data.name}</p>
                <p>{data.price}</p>
            </div>
        </div>
        )
}

export default DisplayFood;