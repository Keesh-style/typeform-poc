import React, { CSSProperties, useEffect, useRef } from 'react'
import { Widget } from "@typeform/embed-react";


const idText:string ="ed1e1LGH"

function Typeform() {
  const widgetContainerStyle = {
    width: 500,
    height: 400,
    margin: "20px auto",
  };

  return (
    <Widget id={idText} style={widgetContainerStyle} className="my-form" />
  );
}

export default Typeform;
