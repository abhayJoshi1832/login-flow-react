import React from 'react';
import MainForm from './mainpage/mainForm';
import {Page1,Page2,Page3,Page4} from './subpages';

/**
 * Login component: pass pages as children to the Mainform shown below to integrate new pages
 * To add or remove pages & form data- only edit in '../context/formContext.js' &  add or remove pages below
 */

function Login() {
  return (
    <MainForm>      
      <Page1/>
      <Page2/>
      <Page3/>
      {/* <Page3/> */}
      <Page4/>
    </MainForm>
  )
}

export default Login