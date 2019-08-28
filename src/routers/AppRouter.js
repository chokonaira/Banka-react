import React from 'react';
import jwtDecode from 'jwt-decode';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import BankaHomePage from '../pages/HomePage';
import BankaSignupPage from '../pages/SignupPage';
import BankaLoginPage from '../pages/LoginPage';
import BankaAboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import DashboardPage from '../pages/DashboardPage';
import CreateAcct from '../components/CreateAcct';
import viewTransactions from '../pages/viewTransactions';
import AuthenticatedRoute from './AuthenticatedRoute';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser } from '../actions/authActions';
import store from '../store';

const token = localStorage.jwtToken;
let loggedInUser = {};

if (token !== undefined) {
  setAuthToken(token);
  const decoded = jwtDecode(token);
  loggedInUser = store.dispatch(setCurrentUser(decoded));
}

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <ToastContainer />
      <Switch>
        <Route path="/" component={BankaHomePage} exact />
        <Route path="/signup" component={BankaSignupPage} exact />
        <Route path="/login" component={BankaLoginPage} exact />
        <Route path="/about" component={BankaAboutPage} exact />
        <AuthenticatedRoute path="/dashboard" component={DashboardPage} exact />
        <AuthenticatedRoute path="/account" component={CreateAcct} exact />
        <AuthenticatedRoute path="/transactions" component={viewTransactions} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
