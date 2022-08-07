import React, { useContext } from 'react';
import { useFormData } from '../context/formContext';
import { PageContext } from '../mainpage/mainForm';
import Button  from 'react-bootstrap/Button';
import tick from './success.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Page4({pgNo}) {

  //const {activeIndex,setActiveIndex,totalSteps} = useContext(PageContext);
  const {formData,handleChange} = useFormData();

  return (
    <>
      <img style={{margin: 25}} src={tick} alt="" />    
      <h2>Congratulations, {formData.displayName}!</h2>
      <p className='text-grey text-center'>
        You have completed onboarding, you can start using the Eden!
      </p>
      <Button onClick={() => alert('POST request can be made with the JSON: '+ JSON.stringify(formData))}>
          Launch Eden
      </Button>
    </>
  )
}

export default Page4
