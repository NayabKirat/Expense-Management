
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Nav = (b) => {
    console.log(b.a);
    var c=b.a;
    
    var resp =c.map((obj, index)=> {
        console.log(obj);
        return(
            <div key={index}>
            <div className="navs">
            <img src={obj.nav.img} />
<ul>
    <li><Link to="/">{obj.nav.about}</Link></li>
    <li><Link to="/feature">{obj.nav.listing}</Link></li>
    <li><Link to="/Services">{obj.nav.details}</Link></li>
    <li><Link to="/Portfolio">{obj.nav.users}</Link></li>
    <li><Link to="/Contact">{obj.nav.pages}</Link></li>
    <li><Link to="/Contact">{obj.nav.shopes}</Link></li>
</ul>
</div>

            </div>
        )
    })
    
    return (
       <div>{resp}</div>
    
    )
}
export default Nav;






