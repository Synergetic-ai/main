import React from 'react';

const Statistics = ({status, }) => {
    return (
        <p>Status: <strong>{status}</strong></p>
        <p>
            <span className="circle bg-default text-white"><i className="fa fa-map-marker" /></span> &nbsp;
          146 Countries, 2759 Cities
        </p>
        <div className="row progress-stats">
          <div className="col-md-9 col-12">
            <h6 className="name fw-semi-bold">Foreign Visits</h6>
            <p className="description deemphasize mb-xs text-white">Some Cool Text</p>
            <Progress color="primary" value="60" className="bg-custom-dark progress-xs" />
          </div>
          <div className="col-md-3 col-12 text-center">
            <span className="status rounded rounded-lg bg-default text-light">
              <small><AnimateNumber value={75} />%</small>
            </span>
          </div>
        </div>
        <div className="row progress-stats">
          <div className="col-md-9 col-12">
            <h6 className="name fw-semi-bold">Local Visits</h6>
            <p className="description deemphasize mb-xs text-white">P. to C. Conversion</p>
            <Progress color="danger" value="39" className="bg-custom-dark progress-xs" />
          </div>
          <div className="col-md-3 col-12 text-center">
            <span className="status rounded rounded-lg bg-default text-light">
              <small><AnimateNumber value={84} />%</small>
            </span>
          </div>
        </div>
        <div className="row progress-stats">
          <div className="col-md-9 col-12">
            <h6 className="name fw-semi-bold">Sound Frequencies</h6>
            <p className="description deemphasize mb-xs text-white">Average Bitrate</p>
            <Progress color="success" value="80" className="bg-custom-dark progress-xs" />
          </div>
          <div className="col-md-3 col-12 text-center">
            <span className="status rounded rounded-lg bg-default text-light">
              <small><AnimateNumber value={92} />%</small>
            </span>
          </div>
        </div>
        <h6 className="fw-semi-bold mt">Map Distributions</h6>
        <p>Tracking: <strong>Active</strong></p>
        <p>
          <span className="circle bg-default text-white"><i className="fa fa-cog" /></span>
          &nbsp; 391 elements installed, 84 sets
        </p>
        <div className="input-group mt">
          <input type="text" className="form-control bg-custom-dark border-0" placeholder="Search Map" />
          <span className="input-group-btn">
            <button type="submit" className={`btn btn-subtle-blue ${s.searchBtn}`}>
              <i className="fa fa-search text-light" />
            </button>
          </span>
        </div>
    )
}