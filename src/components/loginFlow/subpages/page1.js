import React, { useContext } from 'react';
import { useFormData } from '../context/formContext';
import { PageContext } from '../mainpage/mainForm';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Page1({pgNo}) {

  const {activeIndex,setActiveIndex,totalSteps} = useContext(PageContext);
  const {formData,handleChange} = useFormData();

  return (    
    <>
      <h2>Welcome! First things first</h2>
      <p className='text-grey'>You can always change them later</p>
    
    <Form.Group className="mb-3 inputField" controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Steve Jobs"
        value={formData.fullName} onChange={handleChange('fullName')} />
    </Form.Group>

    <Form.Group className="mb-3 inputField" controlId="displayName">
        <Form.Label>Display Name</Form.Label>
        <Form.Control type="text" placeholder="Steve"
        value={formData.displayName} onChange={handleChange('displayName')} />
    </Form.Group>

    <Button className='nextButton'
      onClick={() => setActiveIndex(activeIndex + 1)}>
        Create Workspace
    </Button>
    </>
  )
}

export default Page1
