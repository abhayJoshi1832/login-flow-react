import React, { useState } from 'react';
import './css/mainForm.css';
import ProgressIndicator from './stepsIndicator';
import logo from '../assets/edenLogo.JPG';
import { FormDataProvider } from '../context/formContext';

export const PageContext = React.createContext();


/**
 * No need to edit this to add/remove login steps
 * Parent component of all pages, which  are essentially the steps of the login flow
 * Exposes PageContext (a React context) to access current page and change pages.
 * Wraps children with FormDataProvider to utilize useFormData hook inside children
 * Avoids repeated heading & progress indicator in pages
 */

function MainForm({children}) {

  const [activeIndex, setActiveIndex] = useState(0);  
  const totalSteps = children.length;    

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
              {children[activeIndex]}
              </FormDataProvider>
          </div>
      </div>
    </PageContext.Provider>
  )
}

export default MainForm;