import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>This Website Is currently under construction!</h1>
        <p>Have a nice day.</p>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <HelloWorld />
  </div>,
  document.querySelector("#container")
);
