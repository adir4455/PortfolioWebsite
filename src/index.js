import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="text-fields">
        <input
          type="text"
          className="text-input name-input"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          className="text-input subject-input"
          placeholder="Subject"
          name="subject"
        />
        <input
          type="email"
          className="text-input email-input"
          placeholder="Email Address"
          name="email"
        />
        <input
          type="text"
          className="text-input phone-input"
          placeholder="Phone Number"
          name="phone"
        />
        <textarea
          type="text"
          className="text-input message-input"
          placeholder="Enter Message"
          name="message"
        ></textarea>
      </div>
      <button type="submit" className="btn-dark">
        Submit
      </button>
    </form>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
