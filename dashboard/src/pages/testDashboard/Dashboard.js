import React from 'react';
import {
  Row,
  Col,
  Progress,
  Table,
  Label,
  Input,
} from 'reactstrap';

import Widget from '../../components/Widget';

import Calendar from './components/calendar/Calendar';
import Map from './components/am4chartMap/am4chartMap';
import Rickshaw from './components/rickshaw/Rickshaw';
import Title from './components/title/Title'
import Statistics from './components/statistics/Statistics'
import Userbase from './components/userbase/Userbase'
import Traffic from './components/traffic/Traffic'
import RandomValues from './components/randomValues/RandomValues'
import ChatMessages from './components/chatMessages/ChatMessages'

import s from './Dashboard.module.scss';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <Title className="page-title" big="testDashboard" small="The Lucky One"/>

        <Row>
          <Col lg={7}>
            <Widget className="bg-transparent">
              <Map />
            </Widget>
          </Col>
          <Col lg={1} />

          <Col lg={4}>
            <Widget
              className="bg-transparent"
              title={<h5> Map
                      <span className="fw-semi-bold">&nbsp;Statistics</span></h5>} settings refresh close
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
              <Userbase overall={78} monthly={10.2} daily={0.42} delta={-17} progressValue={34}/>
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
              title={<h6> Market <span className="fw-semi-bold">Stats</span></h6>} close
            >

              <div className="widget-body">
                <h3>$720 Earned</h3>
                <p className="fs-mini text-muted mb mt-sm">
                  Target <span className="fw-semi-bold">$820</span> day earnings
                  is <span className="fw-semi-bold">96%</span> reached.
                </p>
              </div>
              <div className={`widget-table-overflow ${s.table}`}>
                <Table striped size="sm">
                  <thead className="no-bd">
                    <tr>
                      <th>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox210" type="checkbox" onClick={() => this.checkTable(0)}
                            checked={this.state.checkedArr[0]}
                            readOnly
                          />{' '}
                          <Label for="checkbox210" />
                        </div>
                      </th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox212" type="checkbox" onClick={() => this.checkTable(1)}
                            checked={this.state.checkedArr[1]}
                            readOnly
                          />{' '}
                          <Label for="checkbox212" />
                        </div>
                      </td>
                      <td>HP Core i7</td>
                      <td className="text-align-right fw-semi-bold">$346.1</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox214" onClick={() => this.checkTable(2)} type="checkbox"
                            checked={this.state.checkedArr[2]}
                            readOnly
                          />{' '}
                          <Label for="checkbox214" />
                        </div>
                      </td>
                      <td>Air Pro</td>
                      <td className="text-align-right fw-semi-bold">$533.1</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="widget-body mt-xlg chart-overflow-bottom" style={{ height: '100px' }}>
                <Rickshaw height={100} />
              </div>

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
