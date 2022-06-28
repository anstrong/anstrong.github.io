import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Resume from "../pages/resume";
import Projects from "../pages/projects";
import About from "../pages/about";
import Skills from "../pages/skills";

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
    </Switch>
);

/*       <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />*/
