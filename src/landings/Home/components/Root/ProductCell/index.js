import React, { PureComponent } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import i18n from '@/utils/i18n';
import EStyleSheet from 'react-native-extended-stylesheet';
import icon_add from './image/ic_add.png';
import icon_del from './image/ic_del.png';

const testImageMap = {
  './image-test/szss.jpg': require('./image-test/szss.jpg'),
  './image-test/chips-1.png': require('./image-test/chips-1.png'),
  './image-test/ccs.jpg': require('./image-test/ccs.jpg'),
  './image-test/lght.jpg': require('./image-test/lght.jpg'),
  './image-test/qcsr.jpg': require('./image-test/qcsr.jpg'),
  './image-test/yyfz.jpg': require('./image-test/yyfz.jpg'),
  './image-test/ywht.jpg': require('./image-test/ywht.jpg'),
  './image-test/mlnrg.jpg': require('./image-test/mlnrg.jpg'),
  './image-test/toast-1.png': require('./image-test/toast-2.jpg'),
  './image-test/kckl.png': require('./image-test/kckl.png')
};

export default class ProductCell extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderSellPriceTexts = (price, color) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            color,
            fontSize: 16
          }}
        >
          {price}
        </Text>
        <Text
          style={{
            color,
            fontSize: 12,
            alignSelf: 'flex-end',
            marginBottom: 2
          }}
        >
          {i18n['product.RMB']}
        </Text>
      </View>
    );
  };

  _renderPriceTexts = (price, discount) => {
    if (discount) {
      const color = EStyleSheet.value('$waring');
      return (
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          {this._renderSellPriceTexts(discount, color)}
          {this._renderDiscountPriceTexts(price)}
        </View>
      );
    }
    const color = EStyleSheet.value('$textColorDark');
    return this._renderSellPriceTexts(price, color);
  };

  _renderDiscountPriceTexts = price => {
    let color = EStyleSheet.value('$textColorGray');
    return (
      <View
        style={{
          marginLeft: 8,
          flexDirection: 'row',
          alignItems: 'flex-end'
        }}
      >
        <Text
          style={{
            color,
            fontSize: 12,
            textDecorationLine: 'line-through'
          }}
        >
          {price}
        </Text>
        <Text
          style={{
            color,
            fontSize: 12
          }}
        >
          {i18n['product.RMB']}
        </Text>
      </View>
    );
  };

  render() {
    const {
      img = '',
      name = '',
      price = 0,
      desc = '',
      discount = 0
    } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={testImageMap[img]}
          resizeMode={'cover'}
        />
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.desc}>{desc}</Text>
          <View style={styles.actions}>
            {this._renderPriceTexts(price, discount)}
            <View style={styles.placeHolder} />
            <View
              style={{
                flexDirection: 'row',
                marginTop: -16,
                alignItems: 'center'
              }}
            >
              <TouchableOpacity>
                <Image style={styles.icon} source={icon_del} />
              </TouchableOpacity>
              <Text style={styles.number}>{0}</Text>
              <TouchableOpacity>
                <Image style={styles.iconMargin} source={icon_add} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
