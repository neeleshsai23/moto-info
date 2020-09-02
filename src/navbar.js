import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  opennav = () => {
    document.getElementById('mobilenav').style.left = '0vw';
  };

  closenav = () => {
    document.getElementById('mobilenav').style.left = '-100vw';
    document.getElementById('dropdown-mobile').style.left = '-100vw';
  };

  opendropdown = () => {
    document.getElementById('dropdown-mobile').style.left = '0vw';
  };

  closedropdown = () => {
    document.getElementById('dropdown-mobile').style.left = '-100vw';
  };

  render() {
    return (
      <div>
        <nav className='nav-bar'>
          <div className='navitem'>
            <NavLink exact to='/' className='navlink'>
              Home
            </NavLink>
          </div>

          <div className='navitem'>
            <NavLink exact strict to='/basics' className='navlink'>
              Basics
            </NavLink>
          </div>

          <div className='navitem dropdown'>
            <NavLink to='/engines' className='navlink' onClick={this.dropdown}>
              Engines
            </NavLink>
            <div className='dropdown-content'>
              <NavLink to='/single' className='droplink'>
                Single
              </NavLink>
              <NavLink to='/inline' className='droplink'>
                Inline-Twin
              </NavLink>
              <NavLink to='/parallel' className='droplink'>
                Parallel-Twin
              </NavLink>
              <NavLink to='/vtwin' className='droplink'>
                V-Twin
              </NavLink>
              <NavLink to='/boxer' className='droplink'>
                Boxer-Twin
              </NavLink>
              <NavLink to='/infour' className='droplink'>
                Inline-Four
              </NavLink>
            </div>
          </div>

          <div className='navitem'>
            <NavLink to='/mods' className='navlink'>
              Modifications
            </NavLink>
          </div>
        </nav>
        {/*-------------------------------- Navigation bar Mobile*---------------------------------*/}
        <button id='navbtn' className='navbutton' onClick={this.opennav}>
          <i class='fa fa-bars fa-2x' aria-hidden='true'></i>
        </button>
        <nav className='navbar-mobile'>
          <div id='mobilenav' className='navdiv-mobile'>
            <NavLink
              exact
              to='/'
              className='navlink-mobile'
              onClick={this.closenav}
            >
              Home
            </NavLink>

            <NavLink
              exact
              strict
              to='/basics'
              className='navlink-mobile'
              onClick={this.closenav}
            >
              Basics
            </NavLink>

            <NavLink
              to='/engines'
              className='navlink-mobile'
              onClick={this.opendropdown}
            >
              Engines
            </NavLink>
            <div id='dropdown-mobile' className='dropdown-content-mobile'>
              <NavLink
                to='/single'
                className='navlink-mobile'
                onClick={this.closenav}
              >
                Single
              </NavLink>
              <NavLink
                to='/inline'
                className='navlink-mobile'
                onClick={this.closenav}
              >
                Inline-Twin
              </NavLink>
              <NavLink
                to='/parallel'
                className='navlink-mobile'
                onClick={this.closenav}
              >
                Parallel-Twin
              </NavLink>
              <NavLink
                to='/vtwin'
                className='navlink-mobile'
                onClick={this.closenav}
              >
                V-Twin
              </NavLink>
              <NavLink
                to='/boxer'
                className='navlink-mobile'
                onClick={this.closenav}
              >
                Boxer-Twin
              </NavLink>
              <NavLink
                to='/infour'
                className='navlink-mobile'
                onClick={this.closenav}
              >
                Inline-Four
              </NavLink>
              <button className='backbtn' onClick={this.closedropdown}>
                <i class='fa fa-arrow-left fa-2x' aria-hidden='true'></i>
              </button>
              <button className='closebtn' onClick={this.closenav}>
                <i className='fa fa-times fa-2x' aria-hidden='true'></i>
              </button>
            </div>

            <NavLink
              to='/mods'
              className='navlink-mobile'
              onClick={this.closenav}
            >
              Modifications
            </NavLink>
            <button className='closebtn' onClick={this.closenav}>
              <i className='fa fa-times fa-2x' aria-hidden='true'></i>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
