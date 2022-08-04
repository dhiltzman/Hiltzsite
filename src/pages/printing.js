import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles.css';

import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import axeInProgress from '../components/documents/pictures/3dprinting/AxeInProgress.jpg';
import BadBatchWIP from '../components/documents/pictures/3dprinting/BadBatchWIP.jpg';
import BadBatchWIPArm from '../components/documents/pictures/3dprinting/BadBatchWIPArm.jpg';
import BadBatchWIPHelmetAndArm from '../components/documents/pictures/3dprinting/BadBatchWIPHelmetAndArm.jpg';
import Creality from '../components/documents/pictures/3dprinting/Creality.jpg';
import ExpanseMarine from '../components/documents/pictures/3dprinting/ExpanseMarine.jpg';
import FirstBobaFett from '../components/documents/pictures/3dprinting/FirstBobaFett.jpg';
import FirstLookAtDamageCasting from '../components/documents/pictures/3dprinting/FirstLookAtDamageCasting.jpg';
import ForgeSetUp from '../components/documents/pictures/3dprinting/ForgeSetUp.jpg';
import KenobiLightSaber from '../components/documents/pictures/3dprinting/KenobiLightSaber.jpg';
import LowPolyThinker from '../components/documents/pictures/3dprinting/LowPolyThinker.jpg';
import MandoWIP from '../components/documents/pictures/3dprinting/MandoWIP.jpg';
import MandoWithDarkSaber from '../components/documents/pictures/3dprinting/MandoWithDarkSaber.jpg';
import PrusaWIP from '../components/documents/pictures/3dprinting/PrusaWIP.jpg';
import ResinBenchy from '../components/documents/pictures/3dprinting/ResinBenchy.jpg';
import VaderWIP from '../components/documents/pictures/3dprinting/VaderWIP.jpg';
import VahallaAxe from '../components/documents/pictures/3dprinting/VahallaAxe.jpg';
import ViveBaseStation from '../components/documents/pictures/3dprinting/ViveBaseStation.jpg';


const images = [
  { //MandoWithDarkSaber
    original: MandoWithDarkSaber,
    thumbnail: MandoWithDarkSaber,
    originalAlt: 'MandoWithDarkSaber',
    thumbnailAlt: 'MandoWithDarkSaber',
    description: 'MandoWithDarkSaber',
  },

  { //KenobiLightSaber
    original: KenobiLightSaber,
    thumbnail: KenobiLightSaber,
    originalAlt: 'KenobiLightSaber',
    thumbnailAlt: 'KenobiLightSaber',
    description: 'KenobiLightSaber',
  },

  { //PrusaWIP
    original: PrusaWIP,
    thumbnail: PrusaWIP,
    originalAlt: 'PrusaWIP',
    thumbnailAlt: 'PrusaWIP',
    description: 'PrusaWIP',
  },

  { //Creality
    original: Creality,
    thumbnail: Creality,
    originalAlt: 'Creality',
    thumbnailAlt: 'Creality',
    description: 'Creality',
  },

  { //axeInProgress
    original: axeInProgress,
    thumbnail: axeInProgress,
    originalAlt: 'axeInProgress',
    thumbnailAlt: 'axeInProgress',
    description: 'Assassin\'s Creed Vahalla Axe in progress, Resin Printed',
  },

  { //ResinBenchy
    original: ResinBenchy,
    thumbnail: ResinBenchy,
    originalAlt: 'ResinBenchy',
    thumbnailAlt: 'ResinBenchy',
    description: 'ResinBenchy',
  },
  
  { //BadBatchWIP
    original: BadBatchWIP,
    thumbnail: BadBatchWIP,
    originalAlt: 'BadBatchWIP',
    thumbnailAlt: 'BadBatchWIP',
    description: 'BadBatchWIP',
  },

  { //BadBatchWIPArm
    original: BadBatchWIPArm,
    thumbnail: BadBatchWIPArm,
    originalAlt: 'BadBatchWIPArm',
    thumbnailAlt: 'BadBatchWIPArm',
    description: 'BadBatchWIPArm',
  },

  { //BadBatchWIPHelmetAndArm
    original: BadBatchWIPHelmetAndArm,
    thumbnail: BadBatchWIPHelmetAndArm,
    originalAlt: 'BadBatchWIPHelmetAndArm',
    thumbnailAlt: 'BadBatchWIPHelmetAndArm',
    description: 'BadBatchWIPHelmetAndArm',
  },

  { //ExpanseMarine
    original: ExpanseMarine,
    thumbnail: ExpanseMarine,
    originalAlt: 'ExpanseMarine',
    thumbnailAlt: 'ExpanseMarine',
    description: 'ExpanseMarine',
  },

  { //FirstBobaFett
    original: FirstBobaFett,
    thumbnail: FirstBobaFett,
    originalAlt: 'FirstBobaFett',
    thumbnailAlt: 'FirstBobaFett',
    description: 'FirstBobaFett',
  },

  { //FirstLookAtDamageCasting
    original: FirstLookAtDamageCasting,
    thumbnail: FirstLookAtDamageCasting,
    originalAlt: 'FirstLookAtDamageCasting',
    thumbnailAlt: 'FirstLookAtDamageCasting',
    description: 'FirstLookAtDamageCasting',
  },

  { //LowPolyThinker
    original: LowPolyThinker,
    thumbnail: LowPolyThinker,
    originalAlt: 'LowPolyThinker',
    thumbnailAlt: 'LowPolyThinker',
    description: 'LowPolyThinker',
  },

  { //MandoWIP
    original: MandoWIP,
    thumbnail: MandoWIP,
    originalAlt: 'MandoWIP',
    thumbnailAlt: 'MandoWIP',
    description: 'MandoWIP',
  },

  { //VaderWIP
    original: VaderWIP,
    thumbnail: VaderWIP,
    originalAlt: 'VaderWIP',
    thumbnailAlt: 'VaderWIP',
    description: 'VaderWIP',
  },

  { //VahallaAxe
    original: VahallaAxe,
    thumbnail: VahallaAxe,
    originalAlt: 'VahallaAxe',
    thumbnailAlt: 'VahallaAxe',
    description: 'VahallaAxe',
  },

  { //ViveBaseStation
    original: ViveBaseStation,
    thumbnail: ViveBaseStation,
    originalAlt: 'ViveBaseStation',
    thumbnailAlt: 'ViveBaseStation',
    description: 'ViveBaseStation',
  },

  { //ForgeSetUp
    original: ForgeSetUp,
    thumbnail: ForgeSetUp,
    originalAlt: 'ForgeSetUp',
    thumbnailAlt: 'ForgeSetUp',
    description: 'ForgeSetUp',
  },
]
function printing() {
  return (
    <div>
      <h1>3D Printing and Design</h1>
      <hr />
      <p>I have three printers capable of a wide range of printing abilities and designing rapid prototypes</p>
      <p>If you have a prototype, or design idea, drop me a contact in the Contact (link later) page!</p>
      <p>If you want a look at some more in depth info about the project, 
          take a look at the Projects tab!</p>

      <h2>FDM (Fused Deposition Modeling) printers:</h2>
      <dl>
        <dt><h3>Prusa MK3S</h3></dt>
        <dd>This is my first investment.</dd>
        <dd>I have had this printer active since 2018, and it's served faithfully!</dd>
        <dd><i>Multi Material Upgrade Immenient!</i></dd>
        <br />
        <dt><h3>Tenlog TD-D3 Pro</h3></dt>
        <dd>Dual printer head, capable of two colors at a time or support materials</dd>
        <dd>This is an ongoing project, the Tenlog is a work in progress!!</dd>
      </dl>
        
      <h2>SLA (Stereolithography) printer:</h2>
        <dl>
          <dt><h3>Creality LD002R</h3></dt>
          <dd>This printer has been mostly used for precise molded parts for clients</dd>
          <dd>I also use this printer for Miniature Figurines </dd>
        </dl>

      <h2>The Printing Area:</h2>
      <p><i>Missing the Tenlog</i></p>
      <img src={ForgeSetUp} alt="ForgeSetUp" width="50%" height="30%"/>
      <hr />
      <h1>Printing Photos:</h1>

      {/* React-Image-Gallery 
        https://www.npmjs.com/package/react-image-gallery 
      */}

      <ImageGallery items={images} thumbnailPosition="left"/>
    </div>

  )
}

export default printing