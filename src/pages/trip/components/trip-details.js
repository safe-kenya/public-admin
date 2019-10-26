import React from 'react';
import moment from 'moment';

import Stat from "./stat";

export default ({ trip, stats }) => {
  return (
    <>
      {trip.name}
      <div className="row">
        {trip.driver && trip.driver.username}
        {moment(trip.startedAt).format('MMMM Do YYYY, h:mm:ss a')}
        {trip.completedAt ? moment(trip.completedAt).format('MMMM Do YYYY, h:mm:ss a') : 'Not complete'}
      </div>
    </>
  )
}