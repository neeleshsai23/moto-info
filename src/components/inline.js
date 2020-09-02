import React, { Component } from 'react';
import ivsp from '../images/ivsp.webp';

class Inline extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='container'>
          <h4 className='text-center'>Inline-Twin Engine</h4>
          <div className='text-center'>
            <img
              className='img-fluid'
              src={ivsp}
              alt='Inline twin Cylinder Engine Picture'
            />
          </div>
          <div className='content'>
            <p>
              An Inline Twin Engine consists of two cylinders which has
              alternatively moving pistons, which means the pistons stroke one
              after other but not simultaneously. Therefore, the crankshaft
              angle is 180 degrees. An Inline twin engine produces less
              vibrations as the vibrates produced by each piston are cancelled
              out to an extent because of alternating piston movement.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Inline;
