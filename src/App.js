import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './component/join/join';
import Chat from './component/chat/chat';
import './App.css'

const App = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
    </Router>
);

export default App;