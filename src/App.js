import "./styles.css";
import React from 'react';

import reactgame images1 from './images';

export default function App() {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_HOYCRcpYsRD2kTRj7OnuaBWIkYgtQu3FGA&usqp=CAU" 
      alt="nature" />

    <img src={reactgame images1} alt="nature1" />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
