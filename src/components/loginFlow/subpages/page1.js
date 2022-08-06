import React, { useContext } from 'react';
import { useFormData } from '../context/formContext';
import { PageContext } from '../mainpage/mainForm';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './page1.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Page1({pgNo}) {

  const {activeIndex,setActiveIndex,totalSteps} = useContext(PageContext);
  const {formData,setFormData} = useFormData();



  return (
    <div>
    <h2>Welcome! First things first</h2>
    <p className='text-grey'>You can always change them later</p>

    <Form.Group className="mb-3 w-100" controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Steve Jobs" />
    </Form.Group>

    <Form.Group className="mb-3 w-100" controlId="displayName">
        <Form.Label>Display Name</Form.Label>
        <Form.Control type="text" placeholder="Steve" />
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
    </div>
  )
}

export default Page1
