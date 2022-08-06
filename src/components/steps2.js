import React, { useState } from "react";
import "./css/steps2.css";
import Progress_bar from "./progressbar";


  const ProgressIndicator = ({totalSteps}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const steps = [];
    for(let i= 0; i < totalSteps; i++) steps.push({index: i});




    const progress = Math.round((activeIndex + 0.6)*(100/(steps.length-1)));

    const stepCircles = steps.map(elem =>{ 
        return(
         <div key={elem.index}
          className= {`stepCircle 
          ${activeIndex >= elem.index ? "complete" : "incomplete"}
          `}>
            <div className="stepNo">{elem.index+1}</div>            
          </div>
        )
    });

    //console.log(stepCircles)
  
    return (
      <div className="container">
        <div className="stepNum"><h2>{activeIndex}, {progress}</h2></div>  
         <div className="stepsOuter">                   

            <div className="stepsHolder">
                {stepCircles}
                <div className='pgBar'>
                    <Progress_bar progress={progress}/>
                </div>
            </div>
            
            
        </div>

        

        
  
  
  
        <div className="actions">
          {activeIndex > 0 && (
            <button
              onClick={() => setActiveIndex(activeIndex - 1)}
              className="progress-button prev"
            >
              Previous Step
            </button>
          )}
          {activeIndex < steps.length - 1 && (
            <button
              onClick={() => setActiveIndex(activeIndex + 1)}
              className="progress-button next"
            >
              Next Step
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default ProgressIndicator;
  