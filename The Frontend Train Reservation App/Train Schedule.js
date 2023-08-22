import React from 'react';
import './App.css';
import TrainSchedule from './App';
import trainSchedules from './App data';

function App() {
  return (
    <div className="App">
      <h1>Train Schedule App</h1>
      <TrainSchedule schedules={trainSchedules} />
    </div>
  );
}

export default App;
