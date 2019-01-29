
import React, { Component } from "react";
import AOS from "aos";

const Team = (b) => {
    AOS.init()
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            
<div className="home">
<img src={obj.team.img} className="img"/>
<div className="cover">
<div className="text"> 
<h1 data-aos="slide-left" data-aos-duration="1000" data-aos-delay="ease">{obj.team.heading}</h1>
   
   <ul>
<li>
<img src={obj.team.arr[0].img} className="img1" />
<h2>{obj.team.arr[0].h2}</h2>
<h4>{obj.team.arr[0].h4}</h4>

</li>
<li>
<img src={obj.team.arr[1].img} className="img1" />
<h2>{obj.team.arr[1].h2}</h2>
<h4>{obj.team.arr[1].h4}</h4>

</li>
<li>
<img src={obj.team.arr[2].img} className="img1" />
<h2>{obj.team.arr[2].h2}</h2>
<h4>{obj.team.arr[2].h4}</h4>

</li>
<li>
<img src={obj.team.arr[3].img} className="img1" />
<h2>{obj.team.arr[3].h2}</h2>
<h4>{obj.team.arr[3].h4}</h4>

</li>
   
   </ul>
   
   
   
   
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
export default Team;






