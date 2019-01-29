
import React, { Component } from "react";

const Cities = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="cities">
            <div className="cities-container">
            <h1>{obj.cities.h1}</h1>

<div className="worksto">
<span><h4>NAME: <span>*</span></h4>
<input type="text" /></span>
<span className="s"><h4 className="h">PHONE: <span>*</span></h4>
<input type="text" className="in1" /></span>
<span ><h4>MESSAGE: <span>*</span></h4>
<input type="text" className="in2"/></span>
<button>CALL ME BACK</button>
</div>
            <ul>
                <li>
                    <img src={obj.cities.arr[0].img} />
                    <h2>{obj.cities.arr[0].h2}</h2>
                </li>
                <li>
                    <img src={obj.cities.arr[1].img} />
                    <h2>{obj.cities.arr[1].h2}</h2>
                </li>
           
                <li>
                    <img src={obj.cities.arr[2].img} />
                    <h2>{obj.cities.arr[2].h2}</h2>
                </li>
                <li>
                    <img src={obj.cities.arr[3].img} />
                    <h2>{obj.cities.arr[3].h2}</h2>
                </li>
                <li>
                    <img src={obj.cities.arr[4].img} />
                    <h2>{obj.cities.arr[4].h2}</h2>
                </li>
                <li>
                    <img src={obj.cities.arr[5].img} />
                    <h2>{obj.cities.arr[5].h2}</h2>
                </li>
                <li>
                    <img src={obj.cities.arr[2].img} />
                    <h2>{obj.cities.arr[2].h2}</h2>
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
export default Cities;






