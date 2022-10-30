import React from 'react';

export default function MyFirstComponent(props) {
  return(
    <div>
    <h1>Hello {props.name} {props.lastname}!</h1>
    <p>Start editing to see some magic happen :)</p>
    </div>
  )
  }