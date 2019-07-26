import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import BankaHomePage from '../components/HomePage';
import BankaSignupPage from '../components/SignupPage';
import BankaLoginPage from '../components/LoginPage';
import BankaAboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter>
     <div>
      <Header />
      <Switch>
            <Route path="/" component={BankaHomePage} exact={true}/>
            <Route path="/signup" component={BankaSignupPage} />
            <Route path="/login" component={BankaLoginPage} />
            <Route path="/about" component={BankaAboutPage} />
            <Route component={NotFoundPage} />
      </Switch>
     </div>
   </BrowserRouter>
)

export default AppRouter;