
import React, { Component } from "react";

const Company = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="company">
            <div className="company-container">
            <ul>
                <li><img src={obj.company.img1} /></li>
                <li><img src={obj.company.img2} /></li>
                <li><img src={obj.company.img3} /></li>
                <li><img src={obj.company.img4} /></li>
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
export default Company;






