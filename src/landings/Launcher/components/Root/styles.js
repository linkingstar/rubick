import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColor',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 14,
    color: '$textColorGray',
  },
  imgStyle: {
    width: 60,
    height: 60,
    marginBottom: 12
  }
});

export default styles;
