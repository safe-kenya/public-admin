import React from 'react';
import moment from 'moment';

import Stat from "./stat";

export default ({ trip, stats }) => {
  return (
    <>
      <h3 className="text-dark border-bottom">Schedule : {trip.name}</h3>
      <div className="row">
        <Stat
          label="Driver"
          number={trip.driver && trip.driver.username} />
        <Stat
          label="Start Time"
          number={moment(trip.startedAt).format('MMMM Do YYYY, h:mm:ss a')} />
        <Stat
          label="Finish Time"
          number={trip.completedAt ? moment(trip.completedAt).format('MMMM Do YYYY, h:mm:ss a') : 'Not complete'} />
      </div>
      <h5 className="text-dark">Stats</h5>
      <div className="row">
        <Stat
          label="Students"
          number={stats.students} />
        <Stat
          label="Is Complete"
          number={stats.complete} />
        <Stat
          label="Is Cancelled"
          number={stats.cancelled} />
      </div>
  </>
  )
}