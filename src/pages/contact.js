import React from 'react'
import {SocialMediaButtons} from 'react-social-media-buttons';

function contact() {
/*   const buttonComponents = () => {
    const links=['https://www.linkedin.com/in/david-hiltzman/','https://www.github.com/dhiltzman','https://www.youtube.com/channel/UCCFGvxwKVb6LosVxLl3oAsQ/featured'];

    const socialButtonStyle={
      width: '62px', 
      height: '62px', 
      margin: '0px 16px', 
      backgroundColor: '#ffffff', 
      borderRadius: '50%', 
      border: '1px groove #000000',
    };
  }

  const iconStyle={color:'#000000'}; */

  return (
    <div>
      <h1>Contact Me!</h1>
      <p>Do not hesitate to reach out to me!</p>

      <SocialMediaButtons
        links={
          [
            'https://www.linkedin.com/in/david-hiltzman/','https://www.github.com/dhiltzman',
          ]
        } 
        buttonStyle={{
          width: '62px', 
          height: '62px', 
          margin: '0px 16px', 
          backgroundColor: '#ffffff', 
          borderRadius: '50%', 
          border: '1px groove #000000',
        }}
        iconStyle={{
          color:'#000000',
        }}
        openNewTab={true}
      />


      
    </div>
  )
}

export default contact