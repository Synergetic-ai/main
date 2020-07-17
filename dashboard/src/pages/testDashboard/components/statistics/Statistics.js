import React from 'react';
import {Progress} from 'reactstrap';
import AnimateNumber from 'react-animated-number';

// placeholder for function that actually get the element's progress
const GetValue = (value) => value

const ForeignVisits = ({progressValue}) => {
    return (
        <div className="row progress-stats">
            <div className="col-md-9 col-12">
                <h6 className="name fw-semi-bold">Foreign Visits</h6>
                <p className="description deemphasize mb-xs text-white">Some Cool Text</p>
                <Progress color="primary" value={progressValue.toString()} className="bg-custom-dark progress-xs" />
            </div>
            <div className="col-md-3 col-12 text-center">
                <span className="status rounded rounded-lg bg-default text-light">
                <small><AnimateNumber value={progressValue} />%</small>
                </span>
            </div>
        </div>
    )
}

const LocalVisits = ({progressValue}) => {
    return (
        <div className="row progress-stats">
            <div className="col-md-9 col-12">
                <h6 className="name fw-semi-bold">Local Visits</h6>
                <p className="description deemphasize mb-xs text-white">P. to C. Conversion</p>
                <Progress color="danger" value={progressValue.toString()} className="bg-custom-dark progress-xs" />
            </div>
            <div className="col-md-3 col-12 text-center">
                <span className="status rounded rounded-lg bg-default text-light">
                <small><AnimateNumber value={progressValue} />%</small>
                </span>
            </div>
        </div>
    )
}

const SoundFrequencies = ({progressValue}) => {
    return (
        <div className="row progress-stats">
            <div className="col-md-9 col-12">
                <h6 className="name fw-semi-bold">Sound Frequencies</h6>
                <p className="description deemphasize mb-xs text-white">Average Bitrate</p>
                <Progress color="success" value={progressValue.toString()} className="bg-custom-dark progress-xs" />
            </div>
            <div className="col-md-3 col-12 text-center">
                <span className="status rounded rounded-lg bg-default text-light">
                <small><AnimateNumber value={progressValue} />%</small>
                </span>
            </div>
        </div>
    )
}

const Statistics = ({liveStatus, searchBtn, activeStatus}) => {
    return (
        <div>
            <p>Status: <strong>{liveStatus}</strong></p>
            <p>
                <span className="circle bg-default text-white"><i className="fa fa-map-marker" /></span> &nbsp;
                146 Countries, 2759 Cities
            </p>
            <ForeignVisits progressValue={GetValue(75)} />
            <LocalVisits progressValue={GetValue(84)} />
            <SoundFrequencies progressValue={GetValue(60)} />
            <h6 className="fw-semi-bold mt">Map Distributions</h6>
            <p>Tracking: <strong>{activeStatus}</strong></p>
            <p>
            <span className="circle bg-default text-white"><i className="fa fa-cog" /></span>
            &nbsp; 391 elements installed, 84 sets
            </p>
            <div className="input-group mt">
            <input type="text" className="form-control bg-custom-dark border-0" placeholder="Search Map" />
            <span className="input-group-btn">
                <button type="submit" className={`btn btn-subtle-blue ${searchBtn}`}>
                <i className="fa fa-search text-light" />
                </button>
            </span>
            </div>
        </div>
    )
}

export default Statistics;