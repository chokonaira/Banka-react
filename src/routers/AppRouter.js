import React from 'react';
import jwtDecode from 'jwt-decode';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BankaHomePage from '../pages/HomePage';
import BankaSignupPage from '../pages/SignupPage';
import BankaLoginPage from '../pages/LoginPage';
import BankaAboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import DashboardPage from '../pages/DashboardPage';
import AuthenticatedRoute from './AuthenticatedRoute';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <ToastContainer />
      <Switch>
        <Route path="/" component={BankaHomePage} exact />
        <Route path="/signup" component={BankaSignupPage} />
        <Route path="/login" component={BankaLoginPage} />
        <Route path="/about" component={BankaAboutPage} />
        <AuthenticatedRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
