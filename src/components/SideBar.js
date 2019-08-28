import React from 'react';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';
import { Link } from 'react-router-dom';


const defaultImage = require('../styles/assets/avartar3.png');

class SideBar extends React.Component {
  state = {
    file: defaultImage,
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  handleFileChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { firstname, lastname, email } = user;
    const { file } = this.state;
    return (
      <div className="sidebar">
        <div className="d-flex flex-col j-c-center a-i-center mt-2">
          <img src={file} className="profile-image" width="50%" height="50%" alt="" />
          <h4 className="hey mt-1">
            {' '}
                    Hi
            {' '}
            {firstname}
            {' '}
            {lastname}
            {' '}
          </h4>
          <h5 className="hey1 mt-1 lo">{email}</h5>
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            name="passport"
            id="passport"
            onChange={this.handleFileChange}
            on
          />
          <Link to="/signup" />
          <button type="submit" className="btn btn-info mt-1 mb-1" id="logout" onClick={this.logout}>Logout</button>
        </div>
        <ul>
          <Link to="/signup" />
          <li className="active">
              User Dashboard

          </li>
          <li>
            <Link to="/account" />
              Create Account
          </li>
          <li>
            <Link to="/transactions" />
              Transactions
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;