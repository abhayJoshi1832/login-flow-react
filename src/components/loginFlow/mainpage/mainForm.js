import React, { useState } from 'react';
import './css/mainForm.css';
import ProgressIndicator from './stepsIndicator';
import logo from '../assets/edenLogo.JPG';
import { FormDataProvider } from '../context/formContext';

export const PageContext = React.createContext();

function MainForm(props) {

  const [activeIndex, setActiveIndex] = useState(0);  
  const totalSteps = props.children.length;    

  return (
    <PageContext.Provider value ={{activeIndex,setActiveIndex,totalSteps}}>
      
      <div className="containerOuter">
          <div className="containerInner">

              <div className='heading'>
                  <img src={logo} alt="Company Logo" />
                  <h1>Eden</h1>
              </div>
              
              <ProgressIndicator/>

              <FormDataProvider>
              {props.children[activeIndex]}
              </FormDataProvider>
          </div>
      </div>
    </PageContext.Provider>
  )
}

export default MainForm;