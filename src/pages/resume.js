import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel2';
import SinglePagePDFViewer from "../components/single-page.js"; 
import '../styles.css';


/* For more information on react-pdf, 
visit https://github.com/wojtekmaj/react-pdf#configure-pdfjs-worker
npm install react-pdf*/
import resumePDF from "../components/documents/Hiltzman_Resume_Fall_2022_v1_0.pdf";

function resume () {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }; 

  return (
    <div className="resume">
      <h3>View my resume!</h3>
      <p>For more information, take a look into the projects section of the website, 
        or take a look at my LinkedIn for more detailed work experience</p>
        
      <button 
        className="button"
        onPress={() => console.log('Haha gotcha!')}
      >
        Download resume
      </button>
      {/*style={styles}*/}
      <div className="resumePDF">
        <SinglePagePDFViewer className="resumePDF" pdf={resumePDF} onLoadError={console.error}/> 
        {/* if this keeps messing up use onLoadError={console.error}*/}
      </div>
    </div>
  )
}

export default resume