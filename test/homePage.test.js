import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { BankaHomePage } from '../src/pages/HomePage';

describe('About', () => {
  let app;

  const props = {
    auth: {
      user: {
        email: 'choko@gmail.com',
      },
    },
  };
  beforeEach(() => {
    app = shallow(<BankaHomePage {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
});
