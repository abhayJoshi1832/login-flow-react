import React, { useContext } from 'react';
import { useFormData } from '../context/formContext';
import { PageContext } from '../mainpage/mainForm';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


/**Page component is a single step of the login flow
 * It uses PageContext (a React context) to go next page etc.
 * Page component utilizes formData Object & handleChange method to make controlled components
 * Replicate this component to create custom pages
 */
function Page1() {

  const {activeIndex,setActiveIndex} = useContext(PageContext);
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
