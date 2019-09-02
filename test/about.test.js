import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import BankaAboutPage from '../src/pages/AboutPage';

describe('About', () => {
  let app;
  beforeEach(() => {
    app = shallow(<BankaAboutPage />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
});
