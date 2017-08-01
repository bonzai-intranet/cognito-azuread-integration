import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './components/AppliedRoute'
import Home from './containers/Home'
import Auth from './containers/Auth'
import NotFound from './containers/NotFound'

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/auth" exact component={Auth} props={childProps} />
    <Route component={NotFound} />
  </Switch>
)
