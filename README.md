# Banka-react
>Banka UI with react and redux
------------
Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals. This app is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money..

## Badges
[![Build Status](https://travis-ci.com/chokonaira/Banka-react.svg?branch=staging)](https://travis-ci.com/chokonaira/Banka-react) ![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-yellow.svg) [![CircleCI](https://circleci.com/gh/chokonaira/Banka-react.svg?style=svg)](https://circleci.com/gh/chokonaira/Banka-react)

## Installing / Getting started
You need to have the following tools installed on your computer before you install and run this project:

Git
Node.js
To run:

## Clone the Repo.

git clone `https://github.com/chokonaira/Banka-react.git`
cd Banka-react
npm install
npm start

### UI Templates
My UI templates can be found here: [ UI ](https://banka--react.herokuapp.com/)

### Pivotal Tracker
My Pivotal Tracker board can be found [ here ](https://www.pivotaltracker.com/n/projects/2320730)

### Key Application Features
An admin can perform the following:
1. User (client) can sign up.
2. User (client) can login.
3. User (client) can create an account.
5. User can view account details
5. User (client) can view account transaction history.
6. User (client) can view a specific account transaction.
7. Staff (cashier) can debit user (client) account.
8. Staff (cashier) can credit user (client) account.
9. Admin/staff can view all user accounts.
10. Admin/staff can view a specific user account.
11. Admin/staff can activate or deactivate an account.
12. Admin/staff can delete a specific user account.

### Compiler

* [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

## Running tests

Tests were written using [Jest](https://jestjs.io/) and [Jest-Enzyme](https://www.npmjs.com/package/jest-enzyme) dev-dependencies

```
describe('AppRouter', () => {
  let appRouter;
  beforeEach(() => {
    appRouter = shallow(<AppRouter />);
  });
```

### And coding style tests too

This project was built with the linter eslint and an [airbnb style guide](https://github.com/airbnb/javascript)

```
"rules": {
      "one-var": 0,
      "one-var-declaration-per-line": 0,
      "new-cap": 0,
      "consistent-return": 0,
      }
```

## Built With

* [React & Redux](https://react-redux.js.org/) - Web development
* [Webpack](https://webpack.js.org/) - Asset Bundler
* [NodeJs](https://nodejs.org/) - JavaScript runtime environment
* [ExpressJs](https://expressjs.com) - Node RESTful API framework
* [Heroku](https://www.heroku.com/) - Cloud hosting platform

## Version Control

I use [Github](http://github.com/) for version control.

## Authors

* **Henry Okonkwo**
