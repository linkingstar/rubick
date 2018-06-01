import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColor'
  },
  textStyle: {
    fontSize: 18,
    color: '$linkColor',
    fontWeight: 'bold'
  },
  imgStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover'
  },
  list: {
    flex: 1
  }
});

export default styles;
