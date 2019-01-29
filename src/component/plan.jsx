
import React, { Component } from "react";

const Plan = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="plan">
            <img src={obj.plan.img} />
            <div className="plan-container">
            <h1>{obj.plan.p2}</h1>
            <p>{obj.plan.h3}</p>
            <button>{obj.plan.b}</button>
            <ul>
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
export default Plan;






