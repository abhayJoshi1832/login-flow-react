import React from 'react';
import MainForm from './mainForm';
import Page1 from '../subpages/page1';
import Page2 from '../subpages/page2';
import Page4 from '../subpages/page4';
import Page3 from '../subpages/page3';

function Login() {
  return (
    <MainForm>
      <Page1 pgNo='1'/>
      <Page2 pgNo='2'/>
      <Page3/>
      <Page4 pgNo='3'/>
    </MainForm>
  )
}

export default Login