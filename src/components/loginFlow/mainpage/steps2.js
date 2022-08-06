import React from "react";
import "../css/steps2.css";
import ProgressBar from "./progressbar";
import { PageContext } from "./mainForm";
import { useContext } from "react";


  const ProgressIndicator = () => {
    
    const {totalSteps, activeIndex, setActiveIndex} = useContext(PageContext);

    const steps = [];
    for(let i= 0; i < totalSteps; i++) steps.push({index: i});

    const progress = Math.round((activeIndex + 0.6)*(100/(steps.length-1)));

    const stepCircles = steps.map(elem =>
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

  
    return(
      <div className="stepsHolder">
          {stepCircles}
          <div className='pgBar'> <ProgressBar progress={progress}/> </div>
      </div>          
   
    );
  };
  
  export default ProgressIndicator;
  