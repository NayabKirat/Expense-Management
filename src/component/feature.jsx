
import React, { Component } from "react";

const Feature = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="feature">
            <div className="feature-container">
            <h1>{obj.feature.h1}</h1>
            <p>{obj.feature.p}</p>
            <ul>
                <li>
                    
                    <img src={obj.feature.arr[0].img} />
                <h2>{obj.feature.arr[0].h1}</h2>
            <p>{obj.feature.arr[0].p}</p>
                </li> 
                <li className="li"><img src={obj.feature.arr[1].img} />
                <h2>{obj.feature.arr[1].h1}</h2>
            <p>{obj.feature.arr[1].p}</p>
                </li>
                <li><img src={obj.feature.arr[2].img} />
                <h2>{obj.feature.arr[2].h1}</h2>
            <p>{obj.feature.arr[2].p}</p>
                </li>
                <li><img src={obj.feature.arr[3].img} />
                <h2>{obj.feature.arr[3].h1}</h2>
            <p>{obj.feature.arr[3].p}</p>
                </li>
                <li><img src={obj.feature.arr[4].img} />
                <h2>{obj.feature.arr[4].h1}</h2>
            <p>{obj.feature.arr[4].p}</p>
                </li>
            
            </ul>
            
            </div>
</div>
            </div>
        )
    })
    
    return (
       <div>{resp}</div>
    
    )
}
export default Feature;






