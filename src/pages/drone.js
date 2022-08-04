import React from 'react';
import '../styles.css';

import stillwaterOSUPic from '../components/documents/pictures/drone/stillwaterOSUPic_4-11-21.png';
import trunkOrTreatStillwaterOKPic from '../components/documents/pictures/drone/trunkOrTreatStillwaterOKPic_10-24-21.png';
import drumrightOKPic from '../components/documents/pictures/drone/drumrightOK_4-3-21.JPG';
import pitcherOKPic from '../components/documents/pictures/drone/pitcherOK_3-16-22v2.jpg';
import downtownDallasTXPic from '../components/documents/pictures/drone/downtownDallasTX_6-18-21.png';
import businessDistrictOKCOKPic from '../components/documents/pictures/drone/businessDistrictOKCOK_10-13-20.png';
import littleHomeStillwaterOKPic from '../components/documents/pictures/drone/littleHomeStillwaterOK_6-3-21.png';
import mcmurtryLakeStillwaterOKPic from '../components/documents/pictures/drone/mcmurtryLakeStillwaterOK_6-9-21.png';
import snowyStillwaterPic from '../components/documents/pictures/drone/snowyStillwater_1-1-21.JPG';
import tulsaOKPic from '../components/documents/pictures/drone/tulsaOK_6-5-21.png';
import scissortailParkPic from '../components/documents/pictures/drone/scissortailParkOKCOK_9-28-20.png';
import austinTXPic from '../components/documents/pictures/drone/austinTX_6-27-22v2.jpg';

function drone() {
  /* 
    https://webflow.com/made-in-webflow/website/apertureandfocus*
    https://webflow.com/made-in-webflow/website/My-Portfolio-Website
    https://webflow.com/made-in-webflow/website/Ascend-NTNU
  */
  return (
    <div className="drone">
       <div className="mavic2">
        <h1 className="mavic2header">Drone Videography</h1>
      </div>

      <p>some intro stuff blah blah blah</p>

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

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={trunkOrTreatStillwaterOKPic} alt="Downtown Dallas, OK" width="600" height="400" />
            </a>
            <div className="desc">Trunk or Treat Stillwater, OK 6-18-21</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={businessDistrictOKCOKPic} alt="Downtown Dallas, OK" width="600" height="400" />
            </a>
            <div className="desc">Business District OKC, OK</div>
          </div>
        </div>
        
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={littleHomeStillwaterOKPic} alt="Downtown Dallas, OK" width="600" height="400" />
            </a>
            <div className="desc">Little Home Stillwater, OK 6-18-21</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={mcmurtryLakeStillwaterOKPic} alt="Downtown Dallas, OK" width="600" height="400" />
            </a>
            <div className="desc">McMurtry Lake Stillwater, OK 6-18-21</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={snowyStillwaterPic} alt="Downtown Dallas, OK" width="600" height="400" />
            </a>
            <div className="desc">Snowy Stillwater, OK 6-18-21</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={tulsaOKPic} alt="Downtown Dallas, OK" width="600" height="400" />
            </a>
            <div className="desc">Tulsa, OK 6-18-21</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={scissortailParkPic} alt="Scissortail Park, Oklahoma City, OK" width="600" height="400" />
            </a>
            <div className="desc">Scissortail Park OKC, OK 9-28-20</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="/home">
              <img src={austinTXPic} alt="Austin, TX" width="600" height="400" />
            </a>
            <div className="desc">Austin, TX 6-27-22</div>
          </div>
        </div>

    </div>

    <hr />
    </div>
  )
}

export default drone