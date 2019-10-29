import React from "react";

import Table from "./components/table";
import Map from "./components/map"
import TripDetails from "./components/trip-details";
import DeleteModal from "./delete";
import Data from "../../utils/data";
import Stat from "../home/components/stat";

//const $ = window.$;
const deleteModalInstance = new DeleteModal();

class BasicTable extends React.Component {
  state = {
    trip: {}
  };

  componentDidMount() {
    const trips = Data.trips.list();
    const trip = trips.find(t => t.id === this.props.id)
    trip && trip.schedule && this.setState({
      trip: {
        ...trip,
        name: trip.schedule.name,
        scheduledCompleteTime: trip.schedule.end_time,
        inBus: trip.events.filter(event => event.type === 'CHECKEDON').length || 0,
        offBus: trip.events.filter(event => event.type === 'CHECKEDOFF').length || 0,
      }
    });

    Data.trips.subscribe(({ trips }) => {
      const trip = trips.find(trip => trip.id === this.props.id)
      this.setState({
        trip: {
          ...trip,
          name: trip.schedule ? trip.schedule.name : '',
          inBus: trip.events.filter(event => event.type === 'CHECKEDON').length || 0,
          offBus: trip.events.filter(event => event.type === 'CHECKEDOFF').length || 0,
        }
      });
    });



    /*const drivers = Data.drivers.list();
    this.setState({ drivers });*/
  }

  render() {

    const { remove, trip } = this.state;
    const events = trip.events ? trip.events.map(ev => ({ ...ev, name: ev.student.name })) : undefined
    const students = trip.schedule && trip.schedule.route && trip.schedule.route.students

    console.log(trip)

    return (
      <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-aside--enabled kt-aside--left kt-aside--fixed kt-aside--offcanvas-default kt-page--loading">
        <div className="kt-grid kt-grid--hor kt-grid--root">
          <div className="kt-portlet kt-portlet--mobile">
            <DeleteModal
              remove={remove}
              save={trip => Data.trips.delete(trip)}
            />
            <div className="kt-portlet__body">

            </div>
            <div className="kt-portlet__body" style={{ minHeight: "500px" }}>
              <div className="row">
                <div className="col-md-6">
                  <TripDetails
                    trip={trip}
                    stats={{
                      complete: (!!trip.completedAt).toString(),
                      cancelled: (!!trip.isCancelled).toString(),
                      students: students && students.length
                    }}
                  />

                  <div class="kt-portlet__head">
                    <div class="kt-portlet__head-label">
                      <h3 class="kt-portlet__head-title">Trip Events</h3>
                    </div>
                  </div>
                  <Table
                    headers={[
                      {
                        label: "Student",
                        key: "names"
                      },
                      {
                        label: "Event",
                        key: "type"
                      },
                      {
                        label: "Time",
                        key: "time"
                      },

                    ]}
                    data={events}
                    delete={trip => {
                      this.setState({ remove: trip }, () => {
                        deleteModalInstance.show();
                      });
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-lg-6 col-xl-6">
                      <Stat
                        label="On Boarded"
                        number={trip.inBus}
                      />
                    </div>
                    <div className="col-lg-6 col-xl-6">
                      <Stat
                        label="Off Boarded"
                        number={trip.offBus}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-xl-6">
                      <Stat
                        label="In Bus"
                        number={students ? students.length : '~'}
                      />
                    </div>
                    <div className="col-lg-6 col-xl-6">
                      <Stat
                        label="Absent/On Leave"
                        number={'~'}
                      />
                    </div>
                  </div>

                  {trip.locReports && trip.locReports[0] ? <Map locations={trip.locReports} /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicTable;



