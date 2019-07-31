import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AppRouter from '../src/routers/AppRouter';

describe('AppRouter', () => {
  let appRouter;
  beforeEach(() => {
    appRouter = shallow(<AppRouter />);
  });

  it('renders successfully', () => {
    expect(appRouter).toBeDefined();
  });

  it('renders a div component', () => {
    expect(appRouter.find('div').length).toBe(1);
  });
  it('renders a BrowserRouter component', () => {
    expect(appRouter.find('BrowserRouter').length).toBe(1);
  });

  it('renders a Switch component', () => {
    expect(appRouter.find('Switch').length).toBe(1);
  });
  it('renders a Route component', () => {
    expect(appRouter.find('Route').length).toBe(6);
  });
});
