import React from 'react';
import AppRouter from './components/AppRouter';
import './styles.css' ;

import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AwsRum } from 'aws-rum-web';


//rfce+tab command, which will fill out the template of an element for you.
function App() {
  try {
    const config = {
      sessionSampleRate: 1,
      guestRoleArn: "arn:aws:iam::401767854553:role/RUM-Monitor-us-east-1-401767854553-9487006769561-Unauth",
      identityPoolId: "us-east-1:2b0023ea-1ac8-4200-b210-45f74b986a40",
      endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
      telemetries: ["performance","errors","http"],
      allowCookies: true,
      enableXRay: false
    };
  
    const APPLICATION_ID = 'ac2bda99-85ed-45bb-8b38-ea906f3e7d1f';
    const APPLICATION_VERSION = '1.0.0';
    const APPLICATION_REGION = 'us-east-1';
  
    const awsRum = new AwsRum(
      APPLICATION_ID,
      APPLICATION_VERSION,
      APPLICATION_REGION,
      config
    );
  } catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
  }
  
  return (
    
    <div className="App">
      <NavigationBar />
      
      <AppRouter />
    </div>
  );
}

export default App;
