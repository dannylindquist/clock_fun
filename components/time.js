import React from 'react';
import Progress from './progress'

export default ({now}) => (
  <div>
    <h1>{now.format('h:mm')}</h1>
    <p>{now.format('a')}</p>
    <Progress width={(now.seconds() * 100) / 60 + '%'}/>
    <style jsx>{`
      div {
        color: #E3E3E3;
        text-align: center;
      }
      h1 {
        font-size: 100px;
        font-weight: 200;
      }
      p {
        margin-top: -60px;
        font-size: 35px;
      }
    `}</style>
  </div>
)
