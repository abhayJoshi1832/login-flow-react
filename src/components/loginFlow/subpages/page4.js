import React, { useContext } from 'react';
import { useFormData } from '../context/formContext';
import { PageContext } from '../mainpage/mainForm';
import Button  from 'react-bootstrap/Button';
import tick from './success.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Page4({pgNo}) {

  const {activeIndex,setActiveIndex,totalSteps} = useContext(PageContext);
  const {formData,setFormData} = useFormData();



  return (
    <>
    <img src={tick} alt="" />
    <h2>Congratulations, Eren!</h2>
    <p className='text-grey'> You have completed onboarding, you can start using the Eden!</p>

    

    <Button className='w-100 p-3'>
        Launch Eden
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

export default Page4
