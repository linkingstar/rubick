import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  textNormal: {
    fontSize: 10,
    color: '$textColorGray',
    fontWeight: 'bold',
    marginTop: 4
  },
  textNormalMarginNone: {
    fontSize: 10,
    color: '$textColorGray',
    fontWeight: 'bold',
    marginTop: -8
  },
  textActive: {
    fontSize: 10,
    color: '$textColorDark',
    fontWeight: 'bold',
    marginTop: 4
  },
  iconStyle: {
    width: 24,
    height: 24
  },
  bigIconStyle: {
    width: 81,
    height: 70
  },
  itemContainer: {
    width: '30%',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4
  },
  line: {
    backgroundColor: '$borderColor',
    height: '$borderWidth'
  }
});

export default styles;
