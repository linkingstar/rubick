import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 28,
    margin: 15,
    fontWeight: 'bold',
    color: '$textColorDark'
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
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
  },
  line: {
    width: '100%',
    height: '$borderWidth'
  }
});

export default styles;
