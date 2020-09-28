import React from 'react';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route component={MainPage} path="/" exact={true} />
      <Route component={WritePage} path="/write" />
    </div>
  );
}

export default App;
