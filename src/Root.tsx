import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Menu from "books/Menu";
import HarvardBook from "books/HarvardBook";
import PhilosophyBook from "books/PhilosophyBook";
import LiveBook from "books/LiveBook";
import MyselfBook from "books/MyselfBook";
import TalkGodBook from "books/TalkGodBook";

function Root() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/HarvardBook" component={HarvardBook} />
        <Route path="/LiveBook" component={LiveBook} />
        <Route path="/MyselfBook" component={MyselfBook} />
        <Route path="/PhilosophyBook" component={PhilosophyBook} />
        <Route path="/TalkGodBook" component={TalkGodBook} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;