import React, { useContext } from 'react';
import { useFormData } from '../context/formContext';
import { PageContext } from '../mainpage/mainForm';
import Button  from 'react-bootstrap/Button';


function Page3({pgNo}) {

  const {activeIndex,setActiveIndex,totalSteps} = useContext(PageContext);
  const {formData,handleChange} = useFormData();

  return (    
    <>
      <h2>How are you planning to use Eden</h2>
      <p className='text-grey'>We'll stream link you setup process accodingly.</p>
    
    

    <Button className='nextButton'
      onClick={() => setActiveIndex(activeIndex + 1)}>
        Create Workspace
    </Button>
    </>
  )
}

export default Page3
