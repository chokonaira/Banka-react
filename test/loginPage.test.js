import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoginForm } from '../src/pages/LoginPage';

Enzyme.configure({ adapter: new Adapter() });


describe('Login', () => {
  let app;

  const props = {
    email: '',
    password: '',
    type: 'email',
    errors: {
      error: {
        email: 'error',
        password: 'error',
      },
    },
    value: 'This is just for test',
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    auth: { isAuthenticated: true, loading: true },
    history: {
      push: path => path,
    },
    loginUser: jest.fn(),
  };

  beforeEach(() => {
    app = shallow(<LoginForm {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
  it('renders a div component', () => {
    expect(app.find('div').length).toBe(1);
  });
});
