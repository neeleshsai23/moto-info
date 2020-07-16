import React, {Component} from "react";
import stroke from "../images/StrokeCycle.jpg";
import compression from "../images/CompressionRatio.png";

class Basics extends Component{
	gratio = () =>{
		const num1 = document.getElementById("fcount").value;
		const num2 = document.getElementById("rcount").value;
		const res = num2/num1;
		document.getElementById("result").innerHTML=res;
	}
    render(){
        return(
			<div>
            <div className="container-fluid">
				<div className="container">
					<h4 className="text-center" >Basic info about Engines</h4>
					<div className="content">
						<div className="liststyle">
							<h5><b>Four strokes in an Engine:</b></h5>
							<a>Intake Stroke</a>
							<a>Compression stroke</a>
							<a>Power Stroke</a>
							<a>Exhaust Stroke</a>
						</div>				
						<div className="content">
							<h5><b>Intake Stroke:</b></h5>
							<p>The intake event occurs when the piston moves from TDC to BDC and the intake valve is open.
							The Air-Fuel mixture then enters the cylinder through the Intake valve.
							In case of Diesel Engines, only Air is sent from Intake valve.
							</p>
							<h5><b>Compression Stroke:</b></h5>
							<p>The compression stroke is when the trapped air-fuel mixture is compressed inside the cylinder.
							In case of Diesel engines, air is compressed inside the cylinder which produces heat and fuel
							is sent right before the compression stroke ends and it ignites automatically due to heat generated
							and then it continues to power stroke. 						
							</p>
							<h5><b>Power Stroke:</b></h5>
							<p>Before Power Stroke, the Ignition event occurs where the spark plug ignites the Air-Fuel Mixture. (In petrol Engines)
							The power stroke is an engine operation Stroke in which hot expanding gases force the piston head away from the cylinder head.
							During the power Stroke, both valves are closed.
							Piston force and subsequent motion are transferred through the connecting rod to apply torque to the crankshaft. 
							The torque applied initiates crankshaft rotation. 
							*The amount of torque produced is determined by the pressure on the piston, the size of the piston, and the throw of the engine. 						
							</p>
							<h5><b>Exhaust Stroke:</b></h5>
							<p>The exhaust stroke occurs when spent gases are expelled from the combustion chamber and released to the atmosphere. 
							The exhaust stroke is the final stroke and occurs when the exhaust valve is open and the intake valve is closed. 
							Piston movement evacuates exhaust gases to the atmosphere.						
							</p>
						</div>
					</div>
					<div className="text-center">
						<img className="img-fluid" src={stroke} alt="Four Strokes of an Engine"/>
					</div>
					<div className="content">
						<h5><b>Compression Ratio:</b></h5>
						<p>
						The ratio of Volume of a cylinder when the piston is at BDC (Bottom dead centre) to the Volume of cylinder 
						when the piston is at the TDC (Top dead centre) in Compression stroke. 
						In simple terms, A compression ratio (CR) of an I C engine is the ratio of the total volume of the combustion
						chamber to the volume left after complete compression i.e. clearance volume. 
						</p>
					</div>
					<div className="text-center">
						<img className="img-fluid" src={compression} alt="Compression ratio Diagram"/>
					</div>
					<div className="content">
						<h5><b>How is CC (Cubic Centimetres) calculated?</b></h5>
						<p>Bore and stroke of a cylinder are the diameter and distance the piston travels in the cylinder (from TDC to BDC) respectively.
						<br/>
						Volume of Cylinder(V) = π(r*r)h = π(d*d)h/4.
						If there are ‘n’ cylinders, then multiply n to V.
						</p>
					</div>
					<div className="content">
						<h5><b>How is Gear Ratio calculated?</b></h5>
						<p>To calculate the ratio, we need to know the teeth couth of Front and Rear Sprocket. Dividing the Rear/Front, we get the Gear ratio. 
						Most of the Motorcycle maintain ratio near to 3.  
						<br/>
						Example:
						<br/>
						Front sprocket teeth - 14, Rear sprocket teeth - 43
						<br/>
						Gear Ratio = 43/14 = 3.07							
						</p>
					</div>
					<div className="content">
						<h5><b>Calculate Your Gear Ratio:</b></h5>
						<p>Front Sprocket teeth count: <input type="number" id="fcount" /></p>
						<p>Rear Sprocket teeth count: <input type="number" id="rcount" /></p>
						<p>
						<button className="btn-primary" type="submit" onClick={this.gratio}>Calculate</button>
						</p>
						<p>Gear Ratio: <span id="result"></span></p>
					</div>
				</div>
			</div>
			</div>
        );
    };
}

export default Basics;