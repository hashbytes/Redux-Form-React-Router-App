import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsList from './components/posts-list'
import AddPost from './components/add-post'
import ViewPost from './components/view-post'

import React from 'react'

export default () => {
  return (
      <Switch>
        <Route path='/posts/add' component={AddPost} />
        <Route path='/posts/:id' component={ViewPost} />
        <Route path='/' component={PostsList} />
      </Switch>
  )
}
