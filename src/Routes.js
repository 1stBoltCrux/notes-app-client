import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";



export default ({childProps}) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps}/>
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/notes/new" exact component={NewNote} props={childProps} />
    {/* router sends all matching routes to this component - this would also match the route /notes/new if it was not placed BELOW that route in the order */}
    <AppliedRoute path="/notes/:id" exact component={Notes} props={childProps} />

    {/* NEEDS TO BE LAST LINE IN ROUTE BL0CK AS A CATCH-ALL */}
    <Route component={NotFound} />
  </Switch>;
