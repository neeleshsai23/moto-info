import React, { Component } from 'react';

class Mods extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='container'>
          <h4 className='text-center'>Modifications</h4>
          <div className='content'>
            <h5>
              <b>Using Sprockets:</b>
            </h5>
            <p>
              We can increase Low-end performance or High speed by modifying the
              sprocket sizes.
              <br />
              To increase the Low end performance, we need to increase the teeth
              count in Front/Countershaft/Drive sprocket or decrease the count
              in Rear/Driven sprocket.
              <br />
              To increase the High speed, we need to decrease the teeth count in
              Front/Countershaft/Drive sprocket or increase the count in
              Rear/Driven sprocket.
            </p>
            <h6>
              <b>How does the Sprocket teeth count change the Performance:</b>
            </h6>
            <p>
              Let's consider a motorcycle with Sprocket teeth ratio as 14/43, 14
              being the front teeth and 43 being the rear teeth. So, it takes
              3.07 rotations for front sprocket to rotate the rear sprocket
              once. If we increase the front sprocket size to 15, it takes 2.86
              rotations for front sprocket to rotate the rear sprocket once.
              Thereby, increasing the top speed.
            </p>
            <h5>
              <b>Upgrading Engine's Components:</b>
            </h5>
            <h6>
              <b>Air Filter:</b>
            </h6>
            <p>
              Changing the stock Air Filter to a High-Flow air filter can result
              in increasing performance. The high-flow air filter drags more air
              to the engine, thereby the fuel gets more air to burn. It results
              in a better combustion process that leads to actually increase the
              maximum power as well as peak torque output of your bike.
            </p>
            <h6>
              <b>Full Sysytem Exhaust:</b>
            </h6>
            <p>
              A performance exhaust frees up some of the power in your engine,
              allowing for a quicker, more efficient path for exhaust gases to
              escape. This allows your engine to breathe better, and therefore
              create more power.
            </p>
            <h6>
              <b>ECU Remap:</b>
            </h6>
            <p>
              Upgrading the Air filter and Exhaust doesn't increase performance
              to the level they can achieve. To achieve the right performance
              upgrade, we need to remap the ECU, which can control the fuel-air
              ratio, spark ignition timing, Valve timings and many.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mods;
