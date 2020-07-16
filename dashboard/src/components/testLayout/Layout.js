import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';

import UIIcons from '../../pages/components/icons';
import UINotifications from '../../pages/notifications';
import TablesStatic from '../../pages/tables/static';
import MapsGoogle from '../../pages/components/maps/google';
import CoreTypography from '../../pages/typography';
import Charts from '../../pages/components/charts/Charts';
import Dashboard from '../../pages/dashboard';

import Header from '../Header';
import Sidebar from '../Sidebar';
import BreadcrumbHistory from '../BreadcrumbHistory';
import { openSidebar, closeSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';

const Layout = (props) => {
  
  const [chatOpen, setChatOpen] = useState(chatOpen)

  const handleSwipe = (event) => {
    if ('ontouchstart' in window) {
      if (event.direction === 4 && !chatOpen) {
        props.dispatch(openSidebar());
        return;
      }
      
      if (event.direction === 2 && props.sidebarOpened) {
        props.dispatch(closeSidebar());
        return;
      }
      
      setChatOpen((event.direction === 2));
    }
  }
  
  return (
    <div
    className={[
      s.root,
      'sidebar-' + props.sidebarPosition,
      'sidebar-' + props.sidebarVisibility,
    ].join(' ')}
    >
      <div className={s.wrap}>
        <Header />
        {/* <Chat chatOpen={state.chatOpen} /> */}
        {/* <Helper /> */}
        <Sidebar />
        <Hammer onSwipe={handleSwipe}>
          <main className={s.content}>
            <BreadcrumbHistory url={props.location.pathname} />
            <TransitionGroup>
              <CSSTransition
                key={props.location.key}
                classNames="fade"
                timeout={200}
                >
                <Switch>
                  <Route path="/app/main" exact render={() => <Redirect to="/app/main/dashboard" />} />
                  <Route path="/app/main/dashboard" exact component={Dashboard} />
                  <Route path="/app/icons" exact component={UIIcons} />
                  <Route path="/app/notifications" exact component={UINotifications} />
                  <Route path="/app/charts" exact component={Charts} />
                  <Route path="/app/tables" exact component={TablesStatic} />
                  <Route path="/app/maps" exact component={MapsGoogle} />
                  <Route path="/app/typography" exact component={CoreTypography} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <footer className={s.contentFooter}>
              Light Blue React Template - React admin template made by <a href="https://flatlogic.com" >Flatlogic</a>
            </footer>
          </main>
        </Hammer>
      </div>
    </div>
  );
}

Layout.propTypes = {
  sidebarStatic: PropTypes.bool,
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  sidebarStatic: false,
  sidebarOpened: false,
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarPosition: store.navigation.sidebarPosition,
    sidebarVisibility: store.navigation.sidebarVisibility,
    chatOpened: store.navigation.chatOpened,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
