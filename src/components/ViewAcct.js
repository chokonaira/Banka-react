import React from 'react';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';

const ViewAccount = () => (
  <div>
    <div className="wrap my-8">
      <div className="container">
        <div className="text-capitalize d-flex j-c-space-between a-i-center my-4">
          <h1>Bank Account Profile</h1>
        </div>
        <div className="card  my-2">
        <div className="px-0 pb-2 my-2">
          <div className="container">

            <div className="my-1 d-flex justify-content a-i-center" />
            <div className="table-container">
              <table>
                <tbody>

                  <tr>
                    <td>1</td>
                    <td className="text-uppercase">Henry Okonkwo</td>
                    <td>1111111111</td>
                    <td>N10,000.50</td>
                    <td> Savings Account</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="text-uppercase">Henry Okonkwo</td>
                    <td>1111111111</td>
                    <td>N8,000.89</td>
                    <td>Current Account</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td className="text-uppercase">CHOKO NIG LTD</td>
                    <td>1111111111</td>
                    <td>N30,450.20</td>
                    <td>
                    Savings Account
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="text-uppercase">Henry Okonkwo</td>
                    <td>1111111111</td>
                    <td>N8,000.89</td>
                    <td>Current Account</td>
                  </tr>


                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default ViewAccount;
