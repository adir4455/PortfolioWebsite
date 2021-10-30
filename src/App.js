import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import WorkPage from "./components/work/WorkPage";
import ContactPage from "./components/contact/ContactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
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
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/work">
            <WorkPage />
          </Route>

          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
