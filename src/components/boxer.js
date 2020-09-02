import React, { Component } from 'react';
import boxer from '../images/boxer.jpg';

class Boxer extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='container'>
          <h4 className='text-center'>Boxer-Twin Engine</h4>
          <div className='text-center'>
            <img
              className='img-fluid'
              src={boxer}
              alt='Boxer twin Cylinder Engine Picture'
            />
          </div>
          <div className='content'>
            <p>
              A Boxer type engine (also known as flat twin engine) typically has
              horizontally opposed pistons(180 degrees). The cylinders are
              present on the opposite sides connected to a common crankshaft. It
              is called as a Boxer engine because the movement of the engine's
              pistons resemble the movement of a boxer's fists while fighting.
            </p>
            <p>
              The key benefit of the 'Boxer' engine's horizontally opposed
              layout is not generally about its power output or performance. But
              its contribution to the handling and stability of the motorcycle,
              since the weight is evenly distributed on the either sides. It is
              most widely used for all terrain adventure motorcycles where the
              above mentioned characteristics goes very hand in hand.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Boxer;
