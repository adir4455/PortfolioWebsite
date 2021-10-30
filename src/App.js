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
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
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
