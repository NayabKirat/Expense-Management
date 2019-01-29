
import React, { Component } from "react";

const Visite = (b) => {
    console.log(b);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="visite">
            <div className="visite-container">
            <h1>{obj.services.h1}</h1>
            <p>{obj.services.p}</p>
            <ul>
                <li>
	<div className="placethumb">
    	<img src={obj.services.arr[0].img} alt="" />
		<button>{obj.services.arr[0].b}</button>
		<h3>{obj.services.arr[0].h3}</h3>
		<h2>{obj.services.arr[0].h2}</h2>
			</div>
		<p>{obj.services.arr[0].p}</p>
		<h4>{obj.services.arr[0].h4}</h4>
      </li>
      <li>
	<div className="placethumb">
    	<img src={obj.services.arr[1].img} alt="" />
		<button>{obj.services.arr[0].b}</button>
		<h3>{obj.services.arr[0].h3}</h3>
		<h2>{obj.services.arr[1].h2}</h2>
				</div>
		<p>{obj.services.arr[0].p}</p>
		<h4>{obj.services.arr[1].h4}</h4>
		
      </li>     
	  <li>
	<div className="placethumb">
    	<img src={obj.services.arr[2].img} alt="" />
		<button>{obj.services.arr[0].b}</button>
		<h3>{obj.services.arr[0].h3}</h3>
		<h2>{obj.services.arr[2].h2}</h2>
				</div>
		<p>{obj.services.arr[0].p}</p>
		<h4>{obj.services.arr[2].h4}</h4>
		
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
export default Visite;






