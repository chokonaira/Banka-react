import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BankaHomePage from '../pages/HomePage';
import BankaSignupPage from '../pages/SignupPage';
import BankaLoginPage from '../pages/LoginPage';
import BankaAboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import DashboardPage from '../pages/DashboardPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={BankaHomePage} exact />
        <Route path="/signup" component={BankaSignupPage} />
        <Route path="/login" component={BankaLoginPage} />
        <Route path="/about" component={BankaAboutPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
