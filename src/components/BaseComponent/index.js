import React, { PureComponent } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';

export default class BaseComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.reset = this.reset.bind(this);
  }

  reset(routeName = '', params = {}) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName,
          params
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }
}
