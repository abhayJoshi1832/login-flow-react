import React from 'react';
import MainForm from './mainForm';
import Page1 from '../subpages/page1';

function Login() {
  return (
    <MainForm>
      <Page1 pgNo='1'/>
      <Page1 pgNo='2'/>
      <Page1 pgNo='3'/>
      <Page1 pgNo='4'/>
      <Page1 pgNo='5'/>
      <Page1 pgNo='6'/>
    </MainForm>
  )
}

export default Login