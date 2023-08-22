/* App is the  React component that 
will handle the display of train schedules on the web page .*/ 

import React from 'react';


function TrainSchedule({ schedules }) {
  return (
    <div>
      <h2>Train Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.trainNumber}</td>
              <td>{schedule.departureTime}</td>
              <td>{schedule.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainSchedule;
