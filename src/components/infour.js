import React, { Component } from "react";
import infour from "../images/infour.gif";

class Infour extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="container">
                    <h4 className="text-center" >Inline-Four Engine</h4>
                    <div className="text-center">
                        <img className="img-fluid" src={infour} alt="Inline four Cylinder Engine GIF"/>
                    </div>
                    <div className="content">
                        <p>
                        An Inline Four Engine consists of four cylinders. It fires once every 180° crank angle, thus 2 of the pistons
                        are in exactly the same position and move in the same direction, while the remaining 2 pistons are also a pair.
                        Inline Four produce less vibrations and more power. It is easy to maintain than other 4 cylinder configurations
                        and also costs less to make. The firing order of the pistons in this type of configuration is 1-3-4-2 as shown
                        above in the gif.                       
                        </p>
                    </div>
                </div>
	        </div>
        );
    }
}

export default Infour;