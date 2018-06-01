import { connect } from 'react-redux';
import Root from '../components/Root';
import * as actions from '../controls/actions';

export default connect(
  ({ Home: { ...reducers } }) => {
    return { ...reducers };
  },
  {
    ...actions
  }
)(Root);
