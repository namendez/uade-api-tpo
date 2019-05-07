import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

//Componentes
import PasswordChange from './components/PasswordChange';
import Login from './components/Login';
import Home from './components/Home';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/passchange" component={PasswordChange} />
          <Route path="/home" component={Home} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
