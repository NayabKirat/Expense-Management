
import React, { Component } from "react";
import Data from "./Data";
import { MyData } from "./myData";
import Slider from "./slider";



// import { Route } from "react-router-dom";
class App extends Component{
    state = {
    data: MyData
        }
    
    render()
    {
        
return (
    <div>
       <Data data={this.state.data}/>
       <Slider />
       


    </div>
)
    }
}
export default App;