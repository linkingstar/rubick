import React, { PureComponent } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ic_dis_home from '@/images/ic_dis_home.png';
import ic_dis_my from '@/images/ic_dis_my.png';
import ic_home_menu_scan from '@/images/ic_home_menu_scan.png';
import ic_sel_home from '@/images/ic_sel_home.png';
import ic_sel_my from '@/images/ic_sel_my.png';

class TabBarItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _onSelectedItem = () => {
    const { onSelectedItem, item, active = false } = this.props;
    if (active) {
      return;
    }
    onSelectedItem && onSelectedItem(item);
  };
  render() {
    const {
      item: { iconNormal, iconActive, route, title, bigIcon = false },
      active = false
    } = this.props;
    const icon = active ? iconActive : iconNormal;
    const textStyle = active ? styles.textActive : styles.textNormal;
    const iconStyle = bigIcon ? styles.bigIconStyle : styles.iconStyle;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={this._onSelectedItem}
      >
        <Image source={icon} resizeMode={'cover'} style={iconStyle} />
        <Text style={bigIcon ? styles.textNormalMarginNone : textStyle}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class MainTabBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.tabData = [
      {
        title: '首页',
        iconNormal: ic_dis_home,
        iconActive: ic_sel_home,
        route: 'home'
      },
      {
        title: '扫码',
        iconNormal: ic_home_menu_scan,
        iconActive: ic_home_menu_scan,
        route: 'scan',
        bigIcon: true
      },
      {
        title: '我的',
        iconNormal: ic_dis_my,
        iconActive: ic_sel_my,
        route: 'mine'
      }
    ];
  }

  render() {
    const { active = 0 } = this.props;
    return (
      <View>
        <View style={styles.line} />
        <View style={styles.container}>
          {this.tabData.map((item, index) => (
            <TabBarItem
              key={index}
              item={item}
              active={active === index}
              {...this.props}
            />
          ))}
        </View>
      </View>
    );
  }
}
