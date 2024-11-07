import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1> Custom App | Coffee</h1>
    </div>
  );
}
// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     visit google
//   </a>
// );

const anotherUser = "coffee ani code";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google ",
  anotherUser
)

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
