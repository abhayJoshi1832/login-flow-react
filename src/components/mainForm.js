import React, { useState } from 'react';
import './css/mainForm.css';
import ProgressIndicator from './steps2';
import logo from './edenLogo.JPG';
import Page1 from './page1';

function MainForm(props) {

    

    console.log("props of main form: ",props.children[0]);
  return (
    <div className="containerOuter">
        <div className="containerInner">
            <div className='heading'>
                <img src={logo} alt="" />
                <h2>Eden</h2>
            </div>
            <ProgressIndicator totalSteps = {props.children.length}/>
            <Page1/>
        </div>
    </div>
  )
}

export default MainForm;