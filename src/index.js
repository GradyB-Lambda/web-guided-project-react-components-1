import React from "react";
import { render } from "react-dom";

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {
  const { cohort, instructor, happy } = props; // destructure
  return (
    <div className="container">
      <h1>Welcome to React, Web {cohort}</h1>
      <div>{instructor} welcomes you!</div>

      {happy ? <div>Very happy</div> : <div>It is Monday</div>}
    </div>
  );
}

// only appears once per project
render(
  <App cohort="37" instructor="Rhiannon" happy={true} />,
  document.querySelector("#root")
);
