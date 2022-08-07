import React, { useContext } from 'react';
import { useFormData } from '../context/formContext';
import { PageContext } from '../mainpage/mainForm';
import Button  from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Page3() {

  const {activeIndex,setActiveIndex} = useContext(PageContext);
  const {formData,handleChange} = useFormData();

  const handleClick = (value) =>{
    if (value === formData.myselfOrTeam) return;
    handleChange('myselfOrTeam')({target:{value}});
  }
  

  return (    
    <>
      <h2>How are you planning to use Eden</h2>
      <p className='text-grey'>We'll streamline your setup process accordingly.</p>


      <div className='d-flex justify-content-around m-1'>
        <div
          className={`
          myself m-1 border border-2 rounded
          border${(formData.myselfOrTeam === 'myself')? '-primary': '-black'}          
          `}
          style={{width: 170, paddingLeft:10, cursor: 'pointer'}}
          onClick={() => {handleClick('myself')}}
        >
          <i className={`
            bi bi-person-fill
            text${(formData.myselfOrTeam === 'myself')? '-primary': '-black'}
            `}
          style={{fontSize: 50}}></i>
          <h5>For myself</h5>
          <p className='text-grey'> Write better. Think more clearly. Stay organized.</p>
        </div>


        <div className={`
          team m-1 border border-2 rounded
          border${(formData.myselfOrTeam === 'myself')? '-black':'-primary'}          
          `}
          style={{width: 170, paddingLeft:10, cursor: 'pointer'}}
          onClick={() => {handleClick('team')}}
        >
          <i className={`
            bi bi-people-fill
            text${(formData.myselfOrTeam === 'myself')? '-black':'-primary'}
            `}
          style={{fontSize: 50}}></i>
          <h5>With my team</h5>
          <p className='text-grey'>Wikis, docs, tasks, projects, all in one place.</p>
        </div>     

      </div>   

    <Button className='nextButton'
      onClick={() => setActiveIndex(activeIndex + 1)}>
        Create Workspace
    </Button>

    <ToastContainer/>
    </>
  )
}

export default Page3
