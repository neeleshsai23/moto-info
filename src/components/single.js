import React,{ Component } from "react";
import single from "../images/single.jpg";

class Single extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="container">
                    <h4 className="text-center" >Single Cylinder Engine</h4>
                    <div className="text-center">
                        <img className="img-fluid" src={single} alt="Single Cylinder Engine Picture"/>
                    </div>
                    <div className="content">
                        <p>
                        A Single Cylinder engine consists of a Single Cylinder as the name implies. Usually, most of
                        the single cylinder engines have SOHC(Single Overhead Camshaft) whereas Performance based single cylinder engines have DOHC
                        (Double Overhead Camshaft). Most of these are air-cooled engines and the Performance motorbikes are oil cooled or liquid cooled.
                        Above picture is a air-cooled engine as it has fins to pass air into the engine components.    
                        </p>
                    </div>
                </div>
	        </div>
        );
    }
}

export default Single;