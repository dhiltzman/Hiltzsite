import React from 'react'
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
  { //axeInProgress
    original: axeInProgress,
    thumbnail: axeInProgress,
    originalAlt: 'axeInProgress',
    thumbnailAlt: 'axeInProgress',
    description: 'Assassin\'s Creed Vahalla Axe in progress, Resin Printed',
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

  { //Creality
    original: Creality,
    thumbnail: Creality,
    originalAlt: 'Creality',
    thumbnailAlt: 'Creality',
    description: 'Creality',
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

  { //ForgeSetUp
    original: ForgeSetUp,
    thumbnail: ForgeSetUp,
    originalAlt: 'ForgeSetUp',
    thumbnailAlt: 'ForgeSetUp',
    description: 'ForgeSetUp',
  },

  { //KenobiLightSaber
    original: KenobiLightSaber,
    thumbnail: KenobiLightSaber,
    originalAlt: 'KenobiLightSaber',
    thumbnailAlt: 'KenobiLightSaber',
    description: 'KenobiLightSaber',
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

  { //MandoWithDarkSaber
    original: MandoWithDarkSaber,
    thumbnail: MandoWithDarkSaber,
    originalAlt: 'MandoWithDarkSaber',
    thumbnailAlt: 'MandoWithDarkSaber',
    description: 'MandoWithDarkSaber',
  },

  { //PrusaWIP
    original: PrusaWIP,
    thumbnail: PrusaWIP,
    originalAlt: 'PrusaWIP',
    thumbnailAlt: 'PrusaWIP',
    description: 'PrusaWIP',
  },

  { //ResinBenchy
    original: ResinBenchy,
    thumbnail: ResinBenchy,
    originalAlt: 'ResinBenchy',
    thumbnailAlt: 'ResinBenchy',
    description: 'ResinBenchy',
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
]
function printing() {
  return (
    <div>
      <h1>3D Printing and Design</h1>
      <ImageGallery items={images} />
    </div>

  )
}

export default printing