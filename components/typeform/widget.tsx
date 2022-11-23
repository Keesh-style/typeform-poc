import React, { CSSProperties, useEffect, useRef } from "react";
import { createWidget, WidgetOptions } from "@typeform/embed";

type WidgetProps = Omit<WidgetOptions, "container"> & {
  id: string;
  style?: CSSProperties;
  className?: string;
};

const NAME = "Ryan";


export const Widget = ({
  id,
  style = {},
  className = "",
  ...props
}: WidgetProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const ref = createWidget(id, {
        ...props,
        container: container.current,
        hidden: {name: NAME,
          source: "vscode test"
        },
        onReady: onReadyHandler,
        onQuestionChanged: ({ ref }) => {
          console.log("Question changed to:", ref);
        },
        onSubmit: (event)=> {
          console.log(event.responseId);
        }
      });
      return () => {
        ref.unmount();
      };
    }
  }, [id, props]);

  return <div style={style} className={className} ref={container} />;
};

function onReadyHandler() {
  console.log("onReady Handler");
}
