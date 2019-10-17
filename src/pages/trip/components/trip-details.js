import React from 'react'

export default ({ trip, stats }) => {
  return (
  <>
    <h3 className="text-dark border-bottom">Schedule : {trip.name}</h3>
    <div className="mt-3">
      <h5 className="text-dark">Details</h5>
      <div className="mt-3">
        <p>Driver : {trip.driver && trip.driver.username}</p>
        <p>Start Time: {trip.startedAt}</p>
        <p>Finish Time: {trip.completedAt ? trip.completedAt : 'Not complete'}</p>
      </div>
    </div>
    <div className="mt-3">
      <h5 className="text-dark">Stats</h5>
      <div className="mt-3">
        <p>Students : {stats.students}</p>
        <p>Complete : {stats.complete}</p>
        <p>Cancelled: {stats.cancelled}</p>
        <p>Late: {stats.late}</p>
      </div>
    </div>
  </>
  )
}