import React, {Component} from 'react';
import {HashRouter, NavLink, Route} from "react-router-dom";
import Home from "./home";
import Basics from "./components/basics";
import Single from "./components/single";
import Inline from "./components/inline";
import Parallel from "./components/parallel";
import Vtwin from "./components/vtwin";
import Boxer from "./components/boxer";
import Infour from "./components/infour";
import Mods from "./components/mods";

class App extends Component{
  render(){
    return(
      <HashRouter>
        <div>
        
          <nav className="nav-bar">       
            <div className="navitem">
			        <NavLink exact to="/" className="navlink active" > Home </NavLink>
		        </div>

            <div className="navitem">
			        <NavLink exact strict to="/basics" className="navlink" > Basics </NavLink>
		        </div>

            <div className="navitem dropdown">           
              <NavLink to="/engines" className="navlink" href="" > Engines </NavLink>
              <div className="dropdown-content">
				        <NavLink to="/single" className="droplink"  > Single </NavLink>												
				        <NavLink to="/inline" className="droplink"  > Inline-Twin </NavLink>										
				        <NavLink to="/parallel" className="droplink"  > Parallel-Twin </NavLink>												
				        <NavLink to="/vtwin" className="droplink"  > V-Twin </NavLink>						
                <NavLink to="/boxer" className="droplink"  > Boxer-Twin </NavLink>					
                <NavLink to="/infour" className="droplink"  > Inline-Four </NavLink>                						  															           
              </div>        
            </div>                
        
            <div className="navitem">
			        <NavLink to="/mods" className="navlink"  > Modifications </NavLink>
		        </div>	
	    
          </nav>
      
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/basics" component={Basics}/>
            <Route path="/engines" component={Single}/>
            <Route path="/single" component={Single}/>
            <Route path="/inline" component={Inline}/>
            <Route path="/parallel" component={Parallel}/>
            <Route path="/vtwin" component={Vtwin}/>
            <Route path="/boxer" component={Boxer}/>
            <Route path="/infour" component={Infour}/>
            <Route path="/mods" component={Mods}/>
          </div>

        </div>
      </HashRouter>
    );
  }
}

export default App;
