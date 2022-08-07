import React, { useContext } from 'react';
import { useFormData } from '../context/formContext';
import { PageContext } from '../mainpage/mainForm';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Page2({pgNo}) {

  const {activeIndex,setActiveIndex,totalSteps} = useContext(PageContext);
  const {formData,handleChange} = useFormData();

  const nextPage = () =>{
    if (formData.workspaceName === ''){
      toast.warn('Enter Workspace Name', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        });
    }
    else
    {
      setActiveIndex(activeIndex + 1)
    }
  }



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
      
      <Button className='nextButton'
        onClick={() => nextPage()}>
          Create Workspace
      </Button>

      <ToastContainer/>

    </>
  )
}

export default Page2
