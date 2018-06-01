import { createStackNavigator, NavigationActions } from 'react-navigation';
import { applyMiddleware } from 'redux';
import {
  createNavigationPropConstructor,
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
  initializeListeners
} from 'react-navigation-redux-helpers';
import { connect, Provider } from 'react-redux';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Launcher from './landings/Launcher';
import Home from './landings/Home';
import styles from './style';
import thunkMiddleware from './middleware/thunk';
import promiseMiddleware from './middleware/promise';
import abandonMiddleware from './middleware/abandon';
import { createStore } from './utils/injectReducer';

const AppRouteConfigs = {
  launcher: {
    screen: Launcher,
    navigationOptions: {
      header: null
    }
  },
  home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
};

EStyleSheet.build(styles);

const AppRouteOptions = {
  initialRouteName: 'launcher'
};

const AppNavigator = createStackNavigator(AppRouteConfigs, AppRouteOptions);

const navReducer = createNavigationReducer(AppNavigator);

// Note: createReactNavigationReduxMiddleware must be run before createNavigationPropConstructor
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const navigationPropConstructor = createNavigationPropConstructor('root');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    initializeListeners('root', this.props.nav);
  }

  render() {
    let navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.nav
    );
    return <AppNavigator navigation={navigation} />;
  }
}

const mapStateToProps = state => ({ ...state });

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  { nav: navReducer },
  applyMiddleware(
    middleware,
    thunkMiddleware,
    promiseMiddleware,
    abandonMiddleware
  )
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
