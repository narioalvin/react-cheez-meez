import React from 'react';
import { HashRouter  as Router, Route } from 'react-router-dom';
import Join from './component/join/join';
import Chat from './component/chat/chat';
import './App.css'

const App = () => (
    <Router basename={'/'}>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
    </Router>
);

export default App;