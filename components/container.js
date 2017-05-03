import React from "react";

export default ({children}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        max-width: 600px;
        align-items: center;
        margin: 10% auto;
        padding: 15px;
      }
    `}</style>
  </div>
);
