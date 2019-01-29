
import React, { Component } from "react";

const Find = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="find">
            <div className="find-container">
           <img src={obj.find.img} />
            <ul>
                <li>{obj.find.li}</li>
                <li>{obj.find.li1}</li>
                <li>{obj.find.li2}</li>
                <li>{obj.find.li3}</li>
                <li>{obj.find.li4}</li>
            </ul>
            <p>{obj.find.p1}</p>
            <p>{obj.find.p2}</p>
            <p>{obj.find.p3}</p>
            <span>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-dribbble"></i>
            <i class="fab fa-google"></i>
            </span>
            <p>{obj.find.p4}</p>
            
            </div>
</div>
            </div>
        )
    })
    
    return (
       <div>{resp}</div>
    
    )
}
export default Find;






