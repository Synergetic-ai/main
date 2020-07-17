import React from 'react';
import {Progress} from 'reactstrap';  

const Userbase = ({overall, monthly, daily, delta, progressValue}) => {
    return (
        <div>
            <div className="stats-row">
                <div className="stat-item">
                  <h6 className="name">Overall Growth</h6>
                  <p className="value">{overall}%</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">Montly</h6>
                  <p className="value">{monthly}%</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">24h</h6>
                  <p className="value">{daily}%</p>
                </div>
              </div>
              <Progress color="success" value={progressValue.toString()} className="bg-custom-dark progress-xs" />
              <p>
                <small>
                  <span className="circle bg-default text-white">
                    <i className="fa fa-chevron-up" />
                  </span>
                </small>
                    <span className="fw-semi-bold">
                      &nbsp;{delta < 0 ? -delta + "% lower" : delta + "% higher"}
                    </span>
                    &nbsp;than last month
              </p>
       </div>
    )
}

export default Userbase;