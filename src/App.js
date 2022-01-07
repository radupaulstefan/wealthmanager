import React from 'react';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserNetWorthPage from './pages/UserNetWorthPage';
import UserBudgetPage from './pages/UserBudgetPage';
import UserPlannerPage from './pages/UserPlannerPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/networth">
          <UserNetWorthPage />
        </Route>
        <Route path="/budget">
          <UserBudgetPage />
        </Route>
        <Route path="/planner">
          <UserPlannerPage />
        </Route>
        <Route path="/logout">
          <Redirect to="/home" />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
