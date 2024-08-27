import React from "react";
import ReactDOM from "react-dom/client";
//import ReactDOM from "react-dom"; --before V18

function App() {
  return <h1>Hello React</h1>;
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v18
//React.render(<App />, document.getElementById("root")) -- only this line
