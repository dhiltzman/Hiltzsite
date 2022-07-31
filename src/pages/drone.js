import React from 'react'
import '../styles.css'

import stillwaterOSUPic from '../components/documents/pictures/stillwaterOSUPic_4-11-21.png'
import drumrightOKPic from '../components/documents/pictures/drumrightOK_4-3-21.JPG'
import pitcherOKPic from '../components/documents/pictures/pitcherOK_3-16-22v2.jpg'
import downtownDallasTXPic from '../components/documents/pictures/downtownDallasTX_6-18-21.png'


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
       {/* Image Modal: https://www.w3schools.com/css/tryit.asp?filename=trycss_image_modal_js */}
      <div className="imageGallery">
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={stillwaterOSUPic} alt="Stillwater, OK" width="600" height="400" />
            </a>
            <div className="desc">Stillwater, OK 4-11-21</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={drumrightOKPic} alt="Drumright, OK" width="600" height="400" />
            </a>
            <div className="desc">Drumright, OK 4-3-21</div>
          </div>
        </div>
        
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={pitcherOKPic} alt="Pitcher, OK" width="600" height="400" />
            </a>
            <div className="desc">Pitcher, OK 3-16-22</div>
          </div>
        </div>
        
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={downtownDallasTXPic} alt="Downtown Dallas, OK" width="600" height="400" />
            </a>
            <div className="desc">Downtown Dallas, OK 6-18-21</div>
          </div>
        </div>
    </div>

    <hr />
    </div>
  )
}

export default drone