import React from 'react'
import mavic2Picture from '../components/documents/mavic_2_profile_v2.jpg'
import mavic2Picturev2 from '../components/documents/mavic_2_profile_v3.jpg'
import '../styles.css'

function drone() {
  {/* https://webflow.com/made-in-webflow/website/apertureandfocus*/}
  {/* https://webflow.com/made-in-webflow/website/My-Portfolio-Website*/}
  {/* https://webflow.com/made-in-webflow/website/Ascend-NTNU*/}

  return (
    <div className="drone">
       <div className="mavic2">
        <h1>Drone Videography</h1>
        <p>some intro stuff blah blah blah</p>
      </div>

      <hr /> 

     {/*https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_images_text_top_left
      <div class="container">
        <img src={mavic2Picture}
          alt="mavic2" width="1000" height="300" />
        <div class="topleft">Top Left wording yada yada</div>
      </div>

      <hr /> */}

      {/* https://www.w3schools.com/css/tryit.asp?filename=trycss_css_image_overlay_slideleft */}
      <div class="swipeLeft">
        <img src={mavic2Picturev2} alt="mavic2Picturev2" class="image" />
        <div class="overlay">
          <div class="text">Hello World</div>
        </div>
      </div>

      <hr />
       {/* Image Modal: https://www.w3schools.com/css/tryit.asp?filename=trycss_image_modal_js */}

    </div>

  )
}

export default drone