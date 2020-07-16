import React, { Component } from "react";
import vtwin from "../images/vtwin.jpg";

class Vtwin extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="container">
                    <h4 className="text-center" >V-Twin Engine</h4>
                    <div className="text-center">
                        <img className="img-fluid" src={vtwin} alt="V-twin Cylinder Engine Picture"/>
                    </div>
                    <div className="content">
                        <p>
                        A V-Twin Engine consists of two cylinders which are arranged in 'v' formation. Most of the Cruisers use less than 90 degree
                        angle between both the cylinders and few sportsbikes which use v-twin engine configuration has 90 degree angle between them.
                        Engines with 90 degree angle produce lesser vibrations than the lesser angled engine.                        
                        </p>
                    </div>
                </div>
	        </div>
        );
    }
}

export default Vtwin;