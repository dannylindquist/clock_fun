import React from 'react'

export default ({width}) => (
  <div className="container">
    <div className="fill" style={{width}}/>
    <style jsx>{`
        .container {
          width: 100%;
          height: 10px;
          background: #233142;
          border-radius: 10px;
        }
        .fill {
          background: #F95959;
          height: 100%;
          border-radius: 10px;
          width: 10%;
          transition: width .5s;
        }
    `}</style>
  </div>
)