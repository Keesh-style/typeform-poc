import React, { CSSProperties, useEffect, useRef } from 'react'
import { Widget } from "@typeform/embed-react";
import { createWidget, WidgetOptions  } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

type WidgetProps = Omit<WidgetOptions, 'container'> & {
  id: string
  style?: CSSProperties
  className?: string
}

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
