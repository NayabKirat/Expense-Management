import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./home";
import Feature from "./feature";
import Visite from "./services";
import Works from "./works";
import About from "./about";
import News from "./news";
import Cities from "./cities";
import Find from "./find&go";
import Celebrate from "./celebrate";
import Plan from "./plan";
import Company from "./company";
import People from "./people";
import Team from "./team";

class Data extends Component{
   
    
    render(){

console.log(this.props.data);
const r=this.props.data.map((obj,index) => {
    return <div key={index}></div>
})
return(
    <div>
        <div>{r}</div>
        <Nav a={this.props.data}/>
        {/* <Home a={this.props.data}/>
        <Works a={this.props.data}/>
        <Celebrate a={this.props.data}/> */}
        {/* <Feature a={this.props.data}/> */}
        {/* <Visite a={this.props.data}/>
        <Plan a={this.props.data} />
        <People a={this.props.data}/> */}
        {/* <About a={this.props.data}/> */}
        {/* <News a={this.props.data}/>
        <Team a={this.props.data}/>
        <Company a={this.props.data}/>
        <Cities a={this.props.data}/>
        <Find a={this.props.data}/> */}
        
</div>
) 
    }
}
export default Data;