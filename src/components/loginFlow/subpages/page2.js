import React, { useContext } from 'react';
import { useFormData } from '../context/formContext';
import { PageContext } from '../mainpage/mainForm';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Page2({pgNo}) {

  const {activeIndex,setActiveIndex,totalSteps} = useContext(PageContext);
  const {formData,handleChange} = useFormData();



  return (
    <>
      <h2>Let's set up a home for all your work</h2>
      
      <p className='text-grey'> You can always create another workspace later</p>
      
      <Form.Group className="mb-3 inputField" controlId="workspaceName">
          <Form.Label>Workspace Name</Form.Label>
          <Form.Control type="text" placeholder="Eden"
          value={formData.workspaceName} onChange={handleChange('workspaceName')} />
      </Form.Group>



      <Form.Group className="mb-3 inputField">
        <Form.Label htmlFor="basic-url">
          Workspace URL <span className='text-grey'>(optional)</span>
        </Form.Label>

        <InputGroup>
          <InputGroup.Text id="basic-addon">
            <span className='text-grey'>www.eden.com/</span>
          </InputGroup.Text>

          <Form.Control id="basic-url" aria-describedby="basic-addon" placeholder="Example"

          value={formData.workspaceUrl} onChange={handleChange('workspaceUrl')} />
        </InputGroup>
      </Form.Group>
      
      <Button
        onClick={() => setActiveIndex(activeIndex + 1)}>
          Create Workspace
      </Button>

    </>
  )
}

export default Page2
