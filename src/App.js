import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SummonerPage from "./pages/SummonerPage";
import MatchDetailPage from "./pages/MatchDetailPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import ItemPage from "./pages/ItemPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import "./view.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route
              path="/:server/summonerdetail/:name"
              component={SummonerPage}
            />
            <Route
              path="/:server/matchdetail/:name/:matchId"
              component={MatchDetailPage}
            />
            <Route
              path="/:server/leaderboard/:queue/:tier/:division/"
              component={LeaderBoardPage}
            />
            <Route path="/items" component={ItemPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
