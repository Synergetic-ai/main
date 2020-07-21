import React from 'react';
import {
  Row,
  Col,
  Progress,
} from 'reactstrap';

import Widget from '../../components/Widget';

import Calendar from './components/calendar/Calendar';
import Map from './components/am4chartMap/am4chartMap';
import Title from './components/title/Title'
import Statistics from './components/statistics/Statistics'
import Userbase from './components/userbase/Userbase'
import Traffic from './components/traffic/Traffic'
import RandomValues from './components/randomValues/RandomValues'
import ChatMessages from './components/chatMessages/ChatMessages'
import Earnings from './components/earnings/Earnings'

import s from './Dashboard.module.scss';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      graph: null,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <Title className="page-title" big="testDashboard" small="The Lucky One"/>

        <Row>
          <Col lg={7}>
            <Widget
              className="bg-transparent"
            >
              <Map />
            </Widget>
          </Col>
          <Col lg={1} />

          <Col lg={4}>
            <Widget className="bg-transparent"
              title={<h5>Map<span className="fw-semi-bold">&nbsp;Statistics</span></h5>}
              settings refresh close
            >
              <Statistics liveStatus="live" searchBtn={s.searchBtn} activeStatus="active" />
            </Widget>
          </Col>

        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget
              title={<h6> USERBASE GROWTH </h6>}
              close settings
            >
              <Userbase overall={78} monthly={10.2} daily={0.42} delta={-17} progressValue={89}/>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget
              title={<h6> TRAFFIC VALUES </h6>}
              close settings
            >
              <Traffic overall={17567318} monthly={55120} daily={9695} delta={8} progressValue={86}/>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget
              title={<h6> RANDOM VALUES </h6>}
              close settings
            >
              <RandomValues />
            </Widget>
          </Col>

        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget
              title={<h6><span className="badge badge-success">New</span> Messages</h6>}
              refresh close
            >
              <ChatMessages />
            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget
              title={<h6> Market <span className="fw-semi-bold">Stats</span></h6>}
              close
            >
              <Earnings table={s.table} />
            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget title={<h6>Calendar</h6>} settings close bodyClass={"pt-2 px-0 py-0"}>
              <Calendar />
              <div className="list-group fs-mini">
                <button className="list-group-item text-ellipsis">
                  <span className="badge badge-pill badge-primary float-right">6:45</span>
                  Weed out the flower bed
                </button>
                <button className="list-group-item text-ellipsis">
                  <span className="badge badge-pill badge-success float-right">9:41</span>
                  Stop world water pollution
                </button>
              </div>
            </Widget>
          </Col>

        </Row>

      </div>
    );
  }
}

export default Dashboard;
