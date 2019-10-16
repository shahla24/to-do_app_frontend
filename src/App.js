import React from 'react';

import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Task from './components/Task';
function App() {

return (

<div className="container">
<Header />

<Intro introDescription="Hello"/>
<Intro introDescription="Woooo"/>
<Task taskDescription="Buy some milk"/>
<Task taskDescription="pickup dog food"/>
<Task taskDescription="Buy choclate"/>
<Task taskDescription="Do homework"/>


</div>

  );
   
  
}

export default App;
