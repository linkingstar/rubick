import React from 'react';
import * as reducers from './controls/reducers';

import Root from './containers/Root';
import { injectReducer } from '@/utils/injectReducer';

injectReducer('Launcher', reducers);

export default Root;
