import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import { auth } from './firebase';
import Login from './components/Login';
//import firebase from 'firebase';


function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App">
      <Router>
        {!user ? <Login /> :
          <>
            <Header />
            <AppBody>
              <SideBar />
              <Switch>
                <Route exact path='/'>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>


          </>}

      </Router>

    </div>
  );
}

export default App;
const AppBody = styled.div`
height:100vh;
display:flex;

`;