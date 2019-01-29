
import React, { Component } from "react";

const Works = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="works">
            <div className="works-container">
            <h1>{obj.works.h1}</h1>
            <p>{obj.works.p}</p>
            <ul>
                <li>
                    <i class="fas fa-user-friends"></i>
                <h2>{obj.works.arr[0].h2}</h2>
            <p>{obj.works.arr[0].p}</p>
            <h3>{obj.works.arr[0].h3}</h3>
                </li>
                <li>
                {/* <img src="https://img.icons8.com/ios/50/000000/champagne-filled.png" className="i" /> */}
               
                <i class="fas fa-bowling-ball"></i>
                 <h2>{obj.works.arr[1].h2}</h2>
            <p>{obj.works.arr[1].p}</p>
            <h3>{obj.works.arr[1].h3}</h3>
                </li>
                <li>
                    <i class="fas fa-glass-cheers"></i>
                <h2>{obj.works.arr[2].h2}</h2>
            <p>{obj.works.arr[2].p}</p>
            <h3>{obj.works.arr[2].h3}</h3>
                </li>
                <li><i class="fab fa-untappd"></i>
                <h2>{obj.works.arr[3].h2}</h2>
            <p>{obj.works.arr[3].p}</p>
            <h3>{obj.works.arr[3].h3}</h3>
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
export default Works;






