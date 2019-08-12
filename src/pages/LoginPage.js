import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../actions/authActions';
import InputField from '../components/InputField';
import '../styles/css/style.css';
import '../styles/css/utils.css';

class loginForm extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    mobile: false,
  }

  formRef = createRef()

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleResize = () => {
    const width = window.clientWidth;
    const { mobile } = this.state;
    if (width <= 1024 && !mobile) {
      this.setState({ mobile: true });
    } else if (width > 1024 && mobile) {
      this.setState({ mobile: false });
    }
  }

  changeValueHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.formRef.current.className);
    const newUserDetails = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(newUserDetails, this.props.history);
  }

  render() {
    const { errors } = this.state;

    const labels = {
      email: 'Email:',
      password: 'Password:',
    };

    const formTypes = {
      text: 'text',
      email: 'email',
      password: 'password',
    };

    return (
      <div className="cont">
        <div className="wrapper d-flex flex-col j-c-center a-i-center">
          <div className="form-wrap">
            <h2 className="text-center">Login</h2>
          </div>
          <form className="col-sm-5 main-form" onSubmit={this.onSubmit} ref={this.formRef} noValidate>
            <div>
              <InputField
                classes={`form-control ${errors.email ? 'is-invalid' : ''}`}
                type={formTypes.email}
                label={labels.email}
                value={this.state.email}
                change={this.changeValueHandler}
                name="email"
                error={this.state.errors.email}
              />
            </div>

            <div className="form-group">
              <InputField
                classes={`form-control ${errors.password ? 'is-invalid' : ''}`}
                type={formTypes.password}
                label={labels.password}
                value={this.state.password}
                change={this.changeValueHandler}
                name="password"
                error={this.state.errors.password}
              />
            </div>
            <input type="submit" value="Register" id="submit" className="btn-default" />
          </form>
        </div>
      </div>
    );
  }
}

loginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(loginForm));
