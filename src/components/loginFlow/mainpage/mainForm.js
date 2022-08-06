import React, { useState } from 'react';
import '../css/mainForm.css';
import ProgressIndicator from './steps2';
import logo from './edenLogo.JPG';
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
                  <img src={logo} alt="" />
                  <h2>Eden</h2>
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