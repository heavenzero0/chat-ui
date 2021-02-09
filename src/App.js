import React from 'react';
import { BrowserRouter as Router,  Route} from 'react-router-dom'

import Join from './page/join/Join';
import Chat from './page/chat/Chat';
import Operator from './page/operator/Operator';

const App = () => (
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
    <Route path="/operator"  component={Operator} />
  </Router>
);

export default App;