import React from 'react';
import { useFormData } from '../context/formContext';
import Button  from 'react-bootstrap/Button';
import tick from '../assets/success.png';


function Page4() {

  //const {activeIndex,setActiveIndex,totalSteps} = useContext(PageContext);
  const {formData} = useFormData();

  return (
    <>
      <img style={{margin: 25}} src={tick} alt="" />    
      <h2>Congratulations, {formData.displayName}!</h2>
      <p className='text-grey text-center'>
        You have completed onboarding, you can start using the Eden!
      </p>
      <Button className='nextButton'
      onClick={() => alert('POST request can be made with the JSON: '+ JSON.stringify(formData))}>
          Launch Eden
      </Button>
    </>
  )
}

export default Page4
