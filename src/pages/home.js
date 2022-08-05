import React from 'react';
import TypeAnimation from 'react-type-animation';

const home = () => {
  return (
    <div>
      <h1>
        Welcome!
      </h1>
      <h2>
        My name is David Hiltzman, and I am 
      </h2>

      <div >
        <TypeAnimation
          cursor={true}
          sequence={[
            'a Computer Science Major.',
            2000,
            'a Certified Front-End Developer.',
            2000,
            'a Part 107 Certified Drone Pilot.',
            2000,
            'a 3D printing enthusiast.',
            2000,
            'a builder.',
            2000,
            'a creator.',
            2000
          ]}
          wrapper="h2"
          repeat={Infinity}
        />
      </div>

      <p>
        This website is intended as my generalized viewing of my technical skills, current ongoing projects,
        drone work, and 3D printing. 
      </p>

      <p>
        If you want to get some drone videography, website design, or a project in mind, don't hesitate to reach out!
        Check the Contact tab to leave me a message!
      </p>
    </div>
  );
};
  
export default home;