import React from 'react';
import './App.css';
import { HashRouter as Router , Route, Switch, Redirect} from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Posts  from './components/posts/Posts';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Photos from './components/photos/Photos';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="main">
            <Switch>
              <Route path="/homepage" component={Homepage}/>
              <Route path="/posts" component={Posts} />
              <Route path="/photos" component={Photos} />
              <Route path="/contacts" component={Contacts} />
              <Route exact path="/">
                <Redirect to="/homepage" />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
