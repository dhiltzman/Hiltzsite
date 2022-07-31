import React from 'react'
import mavic2Picture from '../components/documents/pictures/mavic_2_profile_v2.jpg'
import mavic2Picturev2 from '../components/documents/pictures/mavic_2_profile_v3.jpg'
import stillwaterOSUPic from '../components/documents/pictures/stillwaterOSUPic.png'
import '../styles.css'

function drone() {
  /* 
    https://webflow.com/made-in-webflow/website/apertureandfocus*
    https://webflow.com/made-in-webflow/website/My-Portfolio-Website
    https://webflow.com/made-in-webflow/website/Ascend-NTNU
  */

  return (
    <div className="drone">
       <div className="mavic2">
        <h1>Drone Videography</h1>
        <p>some intro stuff blah blah blah</p>
      </div>

      <hr /> 

     {/* https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_images_text_top_left
      <div class="container">
        <img src={mavic2Picture}
          alt="mavic2" width="1000" height="300" />
        <div class="topleft">Top Left wording yada yada</div>
      </div>

      <hr /> */}

      {/* https://www.w3schools.com/css/tryit.asp?filename=trycss_css_image_overlay_slideleft */}
      <div className="rotatedImageGallery">
        <p className="rotatedImageGalleryText">
          Stillwater OK, overlooking Oklahoma State University. 4-11-21
        </p>
        <div className="swipeLeft">

          <img 
            src={stillwaterOSUPic} 
            alt="Stillwater OK, overlooking Oklahoma State University. 4-11-21" 
            className="image" 
          />
          <div className="overlay">
            <div className="text">Stillwater OK, overlooking Oklahoma State University. 4-11-21</div>
          </div>
        </div>
      </div>
      <hr />
       {/* Image Modal: https://www.w3schools.com/css/tryit.asp?filename=trycss_image_modal_js */}

    </div>

  )
}

export default drone