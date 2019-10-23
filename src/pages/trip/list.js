import React from "react";

import Table from "./components/table";
import Map from "./components/map"
import TripDetails from "./components/trip-details";
import DeleteModal from "./delete";
import Data from "../../utils/data";

//const $ = window.$;
const deleteModalInstance = new DeleteModal();

class BasicTable extends React.Component {
  state = {
    trip: {}
  };

  componentDidMount() {
    const trips = Data.trips.list();
    const trip = trips.find(t => t.id === this.props.id)
    trip && trip.schedule && this.setState({ trip: { ...trip, name: trip.schedule.name, scheduledCompleteTime: trip.schedule.end_time } });

    Data.trips.subscribe(({ trips }) => {
      const trip = trips.find(trip => trip.id === this.props.id)
      this.setState({ trip: { ...trip, name: trip.schedule ? trip.schedule.name : '' } });
    });

    /*const drivers = Data.drivers.list();
    this.setState({ drivers });*/
  }

  render() {
    const { remove, trip } = this.state;
    const events = trip.events ? trip.events.map(ev => ({ ...ev, name: ev.student.name })) : undefined
    const students = trip.schedule && trip.schedule.route && trip.schedule.route.students
    return (
      <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-aside--enabled kt-aside--left kt-aside--fixed kt-aside--offcanvas-default kt-page--loading">
        <div className="kt-grid kt-grid--hor kt-grid--root">
          <div className="kt-portlet kt-portlet--mobile">
            <DeleteModal
              remove={remove}
              save={trip => Data.trips.delete(trip)}
            />
            <div className="kt-portlet__body" style={{ minHeight: "500px" }}>
              <TripDetails
                trip={trip}
                stats={{
                  complete: (!!trip.completedAt).toString(),
                  cancelled: (!!trip.isCancelled).toString(),
                  students: students && students.length
                }}
              />
            </div>
            <div className="kt-portlet__body" style={{ minHeight: "500px" }}>
              <div className="row">
                <div className="col-md-12">
                  <Map locations={trip.locReports} />
                </div>
              </div>
            </div>
          </div>
          <div className="kt-portlet__body" style={{ minHeight: "500px" }}>
            <Table
              headers={[
                {
                  label: "Event Type",
                  key: "type"
                },
                {
                  label: "Event Time",
                  key: "time"
                },
                {
                  label: "Student",
                  key: "name"
                }
              ]}
              data={events}
              delete={trip => {
                this.setState({ remove: trip }, () => {
                  deleteModalInstance.show();
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BasicTable;



