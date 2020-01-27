import React from 'react';
import {BrowserRouter,Link ,Route} from 'react-router-dom'
import Home from './home';
import Users from './users';
import Posts from './posts';
import UserDetailed from './components/user-detailed';
import PostDetailed from './components/post-detailed';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/' >Home</Link>||
        <Link to='/users'>Users</Link>||
        <Link to='/posts'>Posts</Link>

        <Route path='/' component={Home} exact={true}/>
        <Route path='/users' component={Users} exact={true}/>
        <Route path='/posts' component={Posts} exact={true}/>
        <Route path='/users/:id' component={UserDetailed} />
        <Route path='/posts/:id' component={PostDetailed} exact={true}/>
        
      </div>
    </BrowserRouter>
  )
}

export default App;
