import React, { useContext } from 'react';
import { useFormData } from '../context/formContext';
import { PageContext } from '../mainpage/mainForm';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './page1.css';
import InputGroup from 'react-bootstrap/InputGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Page2({pgNo}) {

  const {activeIndex,setActiveIndex,totalSteps} = useContext(PageContext);
  const {formData,setFormData} = useFormData();



  return (
    <>
    <div style={{overflowX: 'visible', display: 'flex', flexDirection:'column' ,alignItems:'center',whiteSpace: 'nowrap'}}>
      <h2>Let's set up a home for all your work</h2>
      <p className='text-grey'> You can always create another workspace later</p>
    </div>

    

    <Form.Group className="mb-3 w-100" controlId="fullName">
        <Form.Label>Workspace Name</Form.Label>
        <Form.Control type="text" left-addon="sada"placeholder="Eden" />
    </Form.Group>

    <Form.Group className="mb-3 w-100">
      <Form.Label htmlFor="basic-url"> Workspace URL <span className='text-grey'>(Optional)</span> </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon"> www.eden.com/ </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon" />
      </InputGroup>
    </Form.Group>







    <Button className='w-100 p-3'
      onClick={() => setActiveIndex(activeIndex + 1)}>
        Create Workspace
    </Button>

    {/* <div className="actions">
          {activeIndex > 0 && (
            <button
              onClick={() => setActiveIndex(activeIndex - 1)}
              className="progress-button prev"
            >
              Previous Step
            </button>
          )}
          {activeIndex < totalSteps - 1 && (
            <button
              onClick={() => setActiveIndex(activeIndex + 1)}
              className="progress-button next"
            >
              Next Step
            </button>

            
          )}
        </div> */}
    </>
  )
}

export default Page2
