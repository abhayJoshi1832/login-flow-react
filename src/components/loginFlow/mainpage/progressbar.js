import React from 'react';
import './css/progressBar.css'

  
const ProgressBar = ({progress}) => {
        
    return (
    <div className='barBackground'>
      <div className='barFront' style={{width: Math.min(progress,100)+'%'}}>
      </div>
    </div>
    )
}
  
export default ProgressBar;

//width: `${Math.min(progress,100)}%`,