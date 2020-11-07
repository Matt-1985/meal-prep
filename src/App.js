// import styled, { keyframes } from 'styled-components/macro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import HeaderComponent from './components/Header';
import GroceryList from './pages/GroceryList';
import Page from './pages/Page';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <HeaderComponent />
      <Switch>
        <Route exact path="/grocerylist">
          <GroceryList />
        </Route>
        <Router exact path="/">
          <Page />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
