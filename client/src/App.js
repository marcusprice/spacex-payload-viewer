import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import './App.css';

const App = () => {
  let [contentType, setContentType] = useState('payload');

  return(
    <div className="app">
      <Header setContentType={setContentType} />
      <Content contentType={contentType} />
    </div>
  )
}

export default App;
