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
    document.title = "PortfolioAE"
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/work">
            <WorkPage />
          </Route>

          <Route path="/contact">
            <ContactPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
