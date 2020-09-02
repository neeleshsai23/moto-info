import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import Basics from './components/basics';
import Single from './components/single';
import Inline from './components/inline';
import Parallel from './components/parallel';
import Vtwin from './components/vtwin';
import Boxer from './components/boxer';
import Infour from './components/infour';
import Mods from './components/mods';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <div>
            <Route path='/' component={Home} />
            <Route path='/basics' component={Basics} />
            <Route path='/engines' component={Single} />
            <Route path='/single' component={Single} />
            <Route path='/inline' component={Inline} />
            <Route path='/parallel' component={Parallel} />
            <Route path='/vtwin' component={Vtwin} />
            <Route path='/boxer' component={Boxer} />
            <Route path='/infour' component={Infour} />
            <Route path='/mods' component={Mods} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
