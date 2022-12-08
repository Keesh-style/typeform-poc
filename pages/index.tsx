import Typeform from "../components/typeform/typeform";
import { Widget } from "../components/typeform/widget";
//import { Widget } from "@typeform/embed-react";

const widgetContainerStyle = {
  width: 500,
  height: 400,
  margin: "20px auto",
};
//edit test for signed commit
export default function Home() {
  console.log("Inside Home");
  return (
    <div>
      <Widget id="ed1e1LGH" style={widgetContainerStyle}></Widget>
    </div>
  );
}
