
import React, { Component } from "react";
import AOS from "aos";

const People = (b) => {
    AOS.init()
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            
<div className="home">
<div className="text"> 
<h1 data-aos="slide-left">{obj.people.heading}</h1>
<img src={obj.people.img} /> 
    <p data-aos="slide-right" data-aos-duration="1000" data-aos-delay="ease">{obj.people.paragraph}</p>
    <h2>{obj.people.h2}</h2>
    <h3>{obj.people.h3}</h3>
    <span>
<button className="b1">{obj.people.b1}</button>
    </span>
    

</div>
</div>
            </div>
        )
    })
    
    return (
        
       <div>{resp}</div>
    
    )
}
export default People;






