import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";
// import "./index.css";
// import App from "./App";

const messages = ["Terrible", "Bad", "Okay", "Goog", "Amazing"];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={"5"} messages={messages} />
    <StarRating maxRating={10} size={30} color="green" defaultRating={3} />
    <StarRating color="red" size={60} onSetRating />
  </React.StrictMode>
);
