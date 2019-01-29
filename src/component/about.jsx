
import React, { Component } from "react";

const About = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="about">
            <div className="about-container">
            <h1>{obj.about.h1}</h1>
            <p>{obj.about.p}</p>
            <div className="child">
            <p className="p1">{obj.about.p1}</p>
            <h3>{obj.about.h3}</h3>
            <p className="p2">{obj.about.p2}</p>
            <span><img src={obj.about.img1} />
            <img src={obj.about.img2} />
            <img src={obj.about.img3} /></span>
            </div>
            </div>
</div>
            </div>
        )
    })
    
    return (
       <div>{resp}</div>
    
    )
}
export default About;






