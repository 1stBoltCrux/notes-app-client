import React from "react";
import { Route } from "react-router-dom";


// this component basically acts as a shortcut to passing props through routes, this way one component lets us not have to re-write the annoying route syntax repeatedly

export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;
