import React, { Component } from 'react';
import ivsp from '../images/ivsp.webp';

class Parallel extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='container'>
          <h4 className='text-center'>Parallel-Twin Engine</h4>
          <div className='text-center'>
            <img
              className='img-fluid'
              src={ivsp}
              alt='Parallel twin Cylinder Engine Picture'
            />
          </div>
          <div className='content'>
            <p>
              A Parallel Twin Engine consists of two cylinders which has
              simultaneously moving pistons, which means the pistons stroke at
              same time. Therefore, the crankshaft angle is 360 degrees. A
              parallel twin engine produces more vibrations compared to an
              Inline-Twin as the vibrates produced by each piston are occur at
              the same time.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Parallel;
