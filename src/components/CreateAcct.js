import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAccounts } from '../actions/accountActions';
import Loader from './loader';
import SideBar from './SideBar';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';


class CreateAcct extends Component {
  constructor() {
    super();
    this.state = {
      openingBalance: '',
      type: '',
    };
  }

  componentDidUpdate() {
    const { createAcct: { account }, history } = this.props;

    if (account.accountno) {
      toast.success('Account created succesfully, proceed to any of any Banka branch near you to perform a transcation');
      history.push('/dashboard');
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { openingBalance, type } = this.state;
    const AccountData = {
      openingBalance,
      type,
    };
    this.props.createAccounts(AccountData);
  }

  onChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { createAcct: { loading }, history, } = this.props;

    if (loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <div>
        <SideBar history={history} />
        <div className="wrap my-8">
          <div className="text-capitalize d-flex j-c-space-between a-i-center my-4">
            <h1>Create Bank Account</h1>
          </div>
          <div className="card d-flex flex-row j-c-center a-i-center h-50">
            <section className="wrapper d-flex flex-col j-c-center a-i-center">
              <div className="form-group">
                <p>Account Type</p>
                <select
                  style={{ width: '348px' }}
                  className="form-control"
                  name="type"
                  onChange={this.onChange}
                >
                  <option>Select</option>
                  <option value="savings">Savings</option>
                  <option value="current">Current</option>
                </select>
              </div>
              <div className="form-group">
                <p>OpeningBalance</p>
                <input
                  style={{ width: '348px' }}
                  type="number"
                  name="openingBalance"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <button
                  style={{ width: '348px' }}
                  type="submit"
                  className="btn-default"
                  id="sign-up"
                  onClick={this.onSubmit}
                >
                  Create account
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

CreateAcct.propTypes = {
  createAccounts: PropTypes.func,
};

const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account,
  createAcct: state.createAcct,
});

export default compose(
  withRouter, connect(mapStateToProps, { createAccounts }),
)(CreateAcct);
