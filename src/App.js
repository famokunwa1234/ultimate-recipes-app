import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import SingleRecipes from "./Pages/SingleRecipes";
import Default from "./Pages/Default";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar";

class App extends Component {
  render() {
  return (
    <Router>
      <main>
        {/* navbar */}
        <Navbar />
   <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/recipes" exact component={Recipes} />
     <Route path="/recipes/:id" component={SingleRecipes} />
     <Route  component={Default} />
   </Switch>
   </main>
   </Router>
  );
}
}

export default App;
