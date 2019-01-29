
import React, { Component } from "react";
import AOS from "aos";

const Celebrate = (b) => {
    AOS.init()
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            
<div className="home">
<div className="text"> 
<h1 data-aos="slide-left" data-aos-duration="1000" data-aos-delay="ease">{obj.celebration.heading}</h1> 
    <h2 data-aos="slide-right" data-aos-duration="1000" data-aos-delay="ease">{obj.celebration.paragraph}</h2>
    
    <span>
<button className="b1">{obj.celebration.b1}</button>
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
export default Celebrate;






