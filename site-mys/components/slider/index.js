import React, { Fragment } from 'react'
const Slider = ({ children }) => {
  return (
    <Fragment>
      <div className="slider">
        {children}
      </div>
      <style jsx>{`
          .slider {
            width: 100%;
            overflow-y: auto;
            display: flex;
            padding: 4px;
          }
        `}</style>
    </Fragment>
  )
}

export default Slider