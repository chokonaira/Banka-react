import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerUser } from '../actions/authActions';
import Loader from '../components/loader';
import AuthHelper from '../helpers/index';
import '../styles/css/style.css';
import '../styles/css/utils.css';

class signupForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    if (AuthHelper.validateToken()) {
      history.goBack();
    }
  }

  componentDidUpdate() {
    const { register, history } = this.props;
    if (register.isAuthenticated) {
      const message = 'Signup successful, Login to continue';
      toast.success(message);
      history.push('/login');
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      firstname, lastname, email, password,
    } = this.state;

    const userData = {
      firstname,
      lastname,
      email,
      password,
    };
    this.props.registerUser(userData);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const {
      firstname, lastname, email, password,
    } = this.state;
    const { errors, register } = this.props;
    const { error } = errors;
    const { loading } = register;

    if (loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <div className="cont">
        <div className="wrapper d-flex flex-col j-c-center a-i-center">
          <div className="form-wrap">
            <h2 className="text-center">Sign Up</h2>
          </div>
          <form className="col-sm-5 main-form" onSubmit={this.onSubmit} ref={this.formRef} noValidate>
            <div className="form-group">
              <p>Firstname:</p>
              <input
                type="firstname"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': error.firstname,
                })}
                placeholder="Firstname"
                name="firstname"
                value={firstname}
                onChange={this.onChange}
              />
              {error.firstname && (
              <div className="invalid-feedback">{error.firstname}</div>
              )}
            </div>
            <div className="form-group">
              <p>Lastname:</p>
              <input
                type="lastname"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': error.lastname,
                })}
                placeholder="Lastname"
                name="lastname"
                value={lastname}
                onChange={this.onChange}
              />
              {error.lastname && (
              <div className="invalid-feedback">{error.lastname}</div>
              )}
            </div>
            <div className="form-group">
              <p>Email:</p>
              <input
                type="email"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': error.email,
                })}
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={this.onChange}
              />
              {error.email && (
              <div className="invalid-feedback">{error.email}</div>
              )}
            </div>
            <div className="form-group">
              <p>Password:</p>
              <input
                type="password"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': error.password,
                })}
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
              {error.password && (
              <div className="invalid-feedback">{error.password}</div>
              )}
            </div>
            <input type="submit" value="Submit" id="submit" className="btn-default" />
            <div className="link">
              <p className="p">Dont have an account? </p>
              {' '}
              <Link to="/login">Login </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

signupForm.propTypes = {
  registerUser: PropTypes.func,
  register: PropTypes.object,
  errors: PropTypes.object,
};

const mapStateToProps = state => ({
  register: state.register,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(signupForm);
