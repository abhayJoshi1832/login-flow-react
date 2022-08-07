import React from 'react';
import MainForm from './mainForm';
import Page1 from '../subpages/page1';
import Page2 from '../subpages/page2';
import Page3 from '../subpages/page3';
import Page4 from '../subpages/page4';

function Login() {
  return (
    <MainForm>      
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
    </MainForm>
  )
}

export default Login