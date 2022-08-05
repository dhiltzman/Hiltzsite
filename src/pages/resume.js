import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel2';
import SinglePagePDFViewer from '../components/single-page.js'; 
import '../styles.css';
import '../components/AppRouter';
import Button from 'react-bootstrap/Button';

/* For more information on react-pdf, 
visit https://github.com/wojtekmaj/react-pdf#configure-pdfjs-worker
npm install react-pdf*/
import resumePDF from "../components/documents/Hiltzman_Resume_Fall_2022_v1_0.pdf";

function resume () {
  {/* Could not figure out how to get this converted into the CSS styles file. 
      Will leave for later
      {style={styles}}
  */}
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
        
      <Button 
        href={resumePDF} 
        download="HiltzmanResume.pdf">
        Download Resume
      </Button>

      {/* There is some dead whitespace in here I would like to try down.
          Not sure if it's a pdf issue, or a react issue
      */}
      <div className="resumePDF" style={styles}>
        <SinglePagePDFViewer pdf={resumePDF} onLoadError={console.error}/> 
        {/* if this keeps messing up use onLoadError={console.error}*/}
      </div>
    </div>
  )
}

export default resume