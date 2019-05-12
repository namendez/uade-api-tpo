import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

//Componentes
import PasswordChange from './components/PasswordChange';
import Login from './components/Login';
import Home from './components/Home';
import Error404 from './components/Error404';

const theme = createMuiTheme();

const onLoginClick = () => {
  console.log('click login');
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact onClickLogin={onLoginClick}/>
            <Route path="/passchange" component={PasswordChange} />
            <Route path="/home" component={Home} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  );
}

// if (module.hot) {
//   module.hot.accept();
// }

export default App;
