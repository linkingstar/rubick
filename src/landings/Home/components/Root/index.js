import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import BaseComponent from '@/components/BaseComponent';
import MainTabBar from '@/components/MainTabBar';

export default class Home extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { setParams } = this.props;
    setParams('react native');

    this.timer = setTimeout(() => {
      this._navigateToMainPage();
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  _navigateToMainPage = () => {};

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Text>首页</Text>
        </View>
        <MainTabBar />
      </View>
    );
  }
}
