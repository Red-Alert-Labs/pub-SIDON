import React from 'react';

import { shallow } from 'enzyme';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import RightBar from '../components/RightBar';
import store from '../store/main';

it('Globe Load', () => {
  shallow(<Router><RightBar store={store} /></Router>).dive();
});
