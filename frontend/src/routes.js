import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, ItemsList, ItemNew, ItemEdit } from './containers'



export default (
  <Route path="/" component={App}>
      <IndexRoute component={ItemsList}/>
      <Route path="new" component={ItemNew}/>
      <Route path=":id/edit" component={ItemEdit}/>
  </Route>
);
