import React, { PureComponent } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import BaseComponent from '@/components/BaseComponent/index';
import LauncherIcon from '@/images/ic_launcher.png';

export default class Launcher extends BaseComponent {
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

  _navigateToMainPage = () => {
    this.reset('home', { title: 'from Launcher' });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={LauncherIcon}
          resizeMode={'cover'}
          style={styles.imgStyle}
        />
        <Text style={styles.textStyle}>雾都便利</Text>
      </View>
    );
  }
}
