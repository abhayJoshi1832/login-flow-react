import React, { useContext } from 'react'
import { PageContext } from '../mainpage/mainForm'

function Page1({pgNo}) {

  const {activeIndex,setActiveIndex,totalSteps} = useContext(PageContext)



  return (
    <>
    <h1> No.{pgNo}</h1>
    <h2>Welcome! First things first</h2>
    <p>You can always change them later</p>
    <input type="text" name="FullName" />    

    <input type="text" />

    <button> Create Workspace </button>

    <div className="actions">
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
        </div>
    </>
  )
}

export default Page1
