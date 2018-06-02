import React, { PureComponent } from 'react';
import { SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from './styles';
import BaseComponent from '@/components/BaseComponent';
import MainTabBar from '@/components/MainTabBar';
import i18n from '@/utils/i18n';
import ProductCell from './ProductCell';

export default class Home extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.sections = [{ title: '', data: [] }];
  }

  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  _renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{i18n['home.title']}</Text>
      </View>
    );
  };

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => {
    return <ProductCell {...item} />;
  };

  render() {
    const { products } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          style={styles.list}
          keyExtractor={this._keyExtractor}
          renderSectionHeader={this._renderHeader}
          renderItem={this._renderItem}
          sections={products}
        />
        <MainTabBar />
      </SafeAreaView>
    );
  }
}
