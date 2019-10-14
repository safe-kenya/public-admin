import React from "react";

import Table from "./components/table";
import DeleteModal from "./delete";
import Data from "../../utils/data";
import filters from './filters'

//const $ = window.$;
const deleteModalInstance = new DeleteModal();

class BasicTable extends React.Component {
  state = {
    trips: [],
    filter:'all'
  };

  static getDerivedStateFromProps(props, state){
    return {
      ...state,
      filter: props.filter
    }
  }

  componentDidMount() {
    const trips = Data.trips.list();
    this.setState({ trips:trips.map(trip => trip.name = trip.schedule.name) });

    Data.trips.subscribe(({ trips }) => {
      this.setState({ trips: trips.map(trip => trip.name = trip.schedule.name) });
    });

    /*const drivers = Data.drivers.list();
    this.setState({ drivers });*/
  }
  render() {
    const { remove, trips, filter } = this.state;
    const filteredTrips = trips.filter(filters[filter])
    return (
      <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-aside--enabled kt-aside--left kt-aside--fixed kt-aside--offcanvas-default kt-page--loading">
        <div className="kt-grid kt-grid--hor kt-grid--root">
          <div className="kt-portlet kt-portlet--mobile">
            <DeleteModal
              remove={remove}
              save={trip => Data.trips.delete(trip)}
            />
            <div className="kt-portlet__body">
              {/*begin: Search Form */}
              <div className="kt-form kt-fork--label-right kt-margin-t-20 kt-margin-b-10">
                <div className="row align-items-center">
                  <div className="col-xl-8 order-2 order-xl-1">
                    <div className="row align-items-center">
                      <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                      <div class="dropdown dropdown-inline">
							          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							            Filter
							          </button>
							          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								          <a class="dropdown-item" href="#/trips/all">All</a>
								          <a class="dropdown-item" href="#/trips/running">Running</a>
								          <a class="dropdown-item" href="#/schedules">Scheduled</a>
                          <a class="dropdown-item" href="#/trips/complete">Completed</a>
                          <a class="dropdown-item" href="#/trips/cancelled">Cancelled</a>
							          </div>
						          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end: Search Form */}
            </div>
            <div className="kt-portlet__body" style={{ minHeight: "500px" }}>
              <Table
                headers={[
                  {
                    label: "Trip Name",
                    key: "name"
                  },
                  {
                    label: "Start Time",
                    key: "startedAt"
                  },
                  {
                    label: "End Time",
                    key: "completedAt"
                  },
                  {
                    label: "Cancelled",
                    key: "isCancelled"
                  }
                ]}
                data={filteredTrips}
                delete={trip => {
                  this.setState({ remove: trip }, () => {
                    deleteModalInstance.show();
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicTable;



