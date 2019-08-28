import React from 'react';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';

const CreateAcct = () => (
  <div>
    <div className="wrap my-8">
      <div className="text-capitalize d-flex j-c-space-between a-i-center my-4">
        <h1>Create Bank Account</h1>
      </div>
      <div className="card d-flex flex-row j-c-center a-i-center h-50">
        <section className="wrapper d-flex flex-col j-c-center a-i-center">
          <div className="form-group">
            <p>Account Type</p>
            <select style={{ width: '348px' }} className="form-control">
              <option>Select</option>
              <option>Savings</option>
              <option>Current</option>
            </select>
          </div>
          <div className="form-group">
            <p>OpeningBalance</p>
            <input style={{ width: '348px' }} type="number" name="phone" id="phone" className="form-control" />
          </div>
          <div className="form-group">
            <button style={{ width: '348px' }} type="submit" className="btn-default" id="sign-up">
                Create account
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default CreateAcct;
