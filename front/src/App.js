import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import MainMenu from "./Todo/MainMenu";
import {SpaceStations} from "./pages/SpaceStations"
import {Planets} from "./pages/Planets"
import {Cargos} from "./pages/Cargos"
import {CargoOnPlanets} from "./pages/CargoOnPlanets"
import {CargoOnStations} from "./pages/CargoOnStations"

function App() {
    let links = [
        { label:'Космічні станції', link:'/'},
        { label:'Планети', link:'/planets'},
        { label:'Вантаж', link:'/cargos'},
        { label:'Вантаж на станціях', link:'/cargoOnStations'},
        { label:'Вантаж на планетах', link:'/cargoOnPlanets'}
    ]
  return (
      <Router>
          <div className="wrapper">
              <MainMenu  links={links}/>
              <div className="bodyContent">
                  <Switch>
                      <Route path="/" exact component = {SpaceStations}/>
                      <Route path="/planets" component = {Planets}/>
                      <Route path="/cargos" component = {Cargos}/>
                      <Route path="/cargoOnStations" component = {CargoOnStations}/>
                      <Route path="/cargoOnPlanets" component = {CargoOnPlanets}/>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
