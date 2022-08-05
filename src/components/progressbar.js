import React from 'react';
import './css/progressBar.css'

  
const Progress_bar = ({progress}) => {
        
    return (
    <div className='barBackground'>
      <div className='barFront' style={{width: Math.min(progress,100)+'%'}}>
      </div>
    </div>
    )
}
  
export default Progress_bar;

//width: `${Math.min(progress,100)}%`,