import React from 'react';
import {Progress} from 'reactstrap';

const GetValues = () => {
    return [104.3, 14.09, "7 110 M", 9, 54]
}

const RandomValues = () => {

    const [randPercentage, randDegrees, randAmount, delta, progressValue] = GetValues()

    return (
        <div>
            <div className="stats-row">
                <div className="stat-item">
                    <h6 className="name fs-sm">Overcome T.</h6>
                    <p className="value">{randPercentage}%</p>
                </div>
                <div className="stat-item">
                    <h6 className="name fs-sm">Takeoff Angle</h6>
                    <p className="value">{randDegrees}&deg;</p>
                </div>
                <div className="stat-item">
                    <h6 className="name fs-sm">World Pop.</h6>
                    <p className="value">{randAmount}</p>
                </div>
            </div>
            <Progress color="bg-primary" value="60" className="bg-custom-dark progress-xs" />
            <p>
                <small>
                    <span className="circle bg-default text-white">
                        <i className="fa fa-plus" />
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

export default RandomValues;