import React from "react";
import "./css/stepsIndicator.css";
import { PageContext } from "./mainForm";
import { useContext } from "react";

  const ProgressBar = ({steps,activeIndex}) => {
    const progress = Math.round((activeIndex + 0.6)*(100/(steps.length-1)));
          
    return (
    <div className='barBackground'>
      <div className='barFront' style={{width: Math.min(progress,100)+'%'}}>
      </div>
    </div>
    )
  };


  const StepCirclesFn=  ({steps,activeIndex,setActiveIndex}) => steps.map(elem =>
    { 
      return(
       <div
          key={elem.index}
          className= {`stepCircle 
          ${activeIndex >= elem.index ? "complete" : "incomplete"}`}            
          onClick=
          {
            (activeIndex > elem.index)?
            ()=>setActiveIndex(elem.index) :
            () => {}
          }
        >
          <div className="stepNo">{elem.index+1}</div>            
        </div>
      )
    });


  const ProgressIndicator = () => {
    
    const {totalSteps, activeIndex, setActiveIndex} = useContext(PageContext);
    const steps = [];
    for(let i= 0; i < totalSteps; i++) steps.push({index: i});   
  
    return(
      <div className="stepsHolder">

          <StepCirclesFn {...{steps,setActiveIndex,activeIndex}}/>
          <div className='pgBar'>
            <ProgressBar {...{steps, activeIndex}}/> 
          </div>

      </div>          
   
    );
  };
  
  export default ProgressIndicator;
  