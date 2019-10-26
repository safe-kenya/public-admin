import React from 'react';
import moment from 'moment';

import Stat from "./stat";

export default ({ trip, stats }) => {
  return (
    <>
      {/* {trip.name}
      <div className="row">
        {trip.driver && trip.driver.username}
        {moment(trip.startedAt).format('MMMM Do YYYY, h:mm:ss a')}
        {trip.completedAt ? moment(trip.completedAt).format('MMMM Do YYYY, h:mm:ss a') : 'Not complete'}
      </div> */}
      <div class="kt-portlet__head">
        <div class="kt-portlet__head-label">
          <h3 class="kt-portlet__head-title">Trip Information</h3>
        </div>
      </div>
      <table class="table table-head-noborder">
        <tbody>
          <tr>
            <th noWrap={true} scope="row"><i class="fas fa-wave-square"></i></th>
            <td noWrap={true}>route 1</td>
            <td rowSpan={5} style={{ width: '300px' }}>Note: Trip completed successfully. Every student offboarded on time</td>
          </tr>
          <tr>
            <th scope="row"><i class="fas fa-address-card"></i> </th>
            <td >driver 1</td>
          </tr>
          <tr>
            <th scope="row"><i class="fas fa-bus-alt"></i> </th>
            <td>Bus 1</td>
          </tr>
          <tr>
            <th scope="row"><i class="fas fa-tachometer-alt"></i></th>
            <td>Completed</td>
          </tr>
          <tr>
            <th scope="row"><i class="fas fa-business-time"></i></th>
            <td>0.57m delayed</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-bordered m-table">
        <thead>
          <tr>
            <th></th>
            <th>Expected</th>
            <th>Actual</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Start</th>
            <td>5.30 am</td>
            <td>5.30 am</td>
            <td>5.30 am</td>
          </tr>
          <tr>
            <th scope="row">End</th>
            <td>6.27 am</td>
            <td>6.27 am</td>
            <td>6.27 am</td>
          </tr>
          <tr>
            <th scope="row">Trip Time</th>
            <td>0.57m delayed</td>
            <td>0.57m delayed</td>
            <td>0.57m delayed</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}