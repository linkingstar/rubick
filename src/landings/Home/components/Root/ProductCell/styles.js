import EStyleSheet from 'react-native-extended-stylesheet';
const itemHeight = 110;
const imageSize = 80;
const styles = EStyleSheet.create({
  container: {
    height: itemHeight,
    flexDirection: 'row',
    padding: 15
  },
  image: {
    width: imageSize,
    height: imageSize,
    marginRight: 15
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$textColorDark',
    flexShrink: 1
  },
  desc: {
    fontSize: 12,
    color: '$textColor',
    marginTop: 8,
    marginBottom: 8
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  price: {
    fontSize: 16
  },
  placeHolder: {
    flex: 1,
    height: '$borderWidth'
  },
  icon: {
    width: 29,
    height: 35
  },
  iconMargin: {
    width: 29,
    height: 35,
    marginLeft: 8
  },
  number: {
    fontSize: 14,
    color: '$textColorDark',
    marginLeft: 8,
  }
});

export default styles;
