import React from 'react';

import Stat from "../../trip/components/stat";

export default ({ student }) => {
  const { route } = student
  return (
    <>
      <div class="kt-portlet__head">
        <div class="kt-portlet__head-label">
          <h3 class="kt-portlet__head-title">Student Information</h3>
        </div>
      </div>
      <table class="table table-head-noborder">
        <tbody>
          <tr>
            <th noWrap={true} scope="row"><i class="fas fa-user"></i></th>
            <td noWrap={true}>{student.names}</td>
          </tr>
          <tr>
            <th scope="row"><i class="fas fa-address-card"></i> </th>
            <td >{student.registration}</td>
          </tr>
          <tr>
            <th scope="row"><i class="fas fa-venus-mars"></i> </th>
            <td>{student.gender}</td>
          </tr>
          <tr>
            <th scope="row"><i class="fas fa-chalkboard-teacher"></i> </th>
            <td>{student.class_name}</td>
          </tr>
          {route && <tr>
            <th scope="row"><i class="fas fa-route"></i></th>
            <td>{route.name}</td>
          </tr>}
        </tbody>
      </table>
    </>
  )
}