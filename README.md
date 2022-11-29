
## Installing Typeform

First, run the development server:

```bash
npm install --save @typeform/embed
# or
yarn add @typeform/embed
```
- This [library](https://developer.typeform.com/embed/vanilla/) is to use typeform embed using vanilla Javascript, hence more customisability, including callbacks

or

```bash
npm install @typeform/embed-react --save
# or
yarn add @typeform/embed-react
```
- This [library](https://developer.typeform.com/embed/react/) makes use of the embed lib but is the official way to use it in a React project. Does not have as much customisability as the vanillia version.


## Using Typeform Embed Library
#[Documention](https://developer.typeform.com/embed/vanilla/)\n

Example found in [components/typeform/widget.tsx](https://github.com/Keesh-style/typeform-poc/blob/main/components/typeform/widget.tsx)

Using import:
```javascript
import { createWidget, WidgetOptions } from "@typeform/embed";
```

```javascript
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
```
- Allows creation of a widget component that can contain any amount of the preditermaned callbacks on events. Callbacks are implemented withing the params of createWidget which are given as an array
- Known information can be passed into the typeform by using the hidden prop, which are then accessed within the hidden fields tab inside logic in typeform.

[Callback events](https://developer.typeform.com/embed/callbacks/):
- onReady
    - Fired when form is loaded
- onSubmit
    - Fired when submit button is pressed, can access response ID
- onClose
    - Fired when popup window is closed
- onQuestionChanged
    - Fired when user switches between question pages where the question id can be accessed
- onHeightChanged
    - Fired when display question height changes

## Using Typeform Embed-React Library


