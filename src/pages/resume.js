import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel2';

import SinglePagePDFViewer from "../components/single-page.js";
/* For more information on react-pdf, visit https://github.com/wojtekmaj/react-pdf#configure-pdfjs-worker
npm install react-pdf*/
import resumePDF from "../components/documents/Hiltzman_Resume_Fall_2022_v1_0.pdf";

function resume() {
  return (
    <div>
      <h4>Single Page View of Resume</h4>
      <SinglePagePDFViewer pdf={resumePDF} onLoadError={console.error}/> 
      {/* if this keeps messing up use onLoadError={console.error}*/}
    </div>
  )
}

export default resume