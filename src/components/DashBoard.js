import React from 'react';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAccounts } from '../actions/accountActions';
import ViewAccount from './ViewAcct';
import SideBarMenu from './SideBar';

class Dashboard extends React.Component {
  componentDidMount() {
    const { auth: { user: { email } }, getUserAccounts } = this.props;
    getUserAccounts(email);
  }

  render() {
    const { accounts } = this.props;
    return (
      <div>
        <SideBarMenu />
        <ViewAccount accounts={accounts} />
      </div>
    );
  }
}

Dashboard.defaultProps = {
  match: { },
};

Dashboard.propTypes = {
  userAccounts: propTypes.func.isRequired,
  match: propTypes.objectOf(propTypes.any),
};

const mapStateToProps = state => ({
  auth: state.auth,
  accounts: state.accounts,
});

export default connect(mapStateToProps, { getUserAccounts: userAccounts })(Dashboard);
