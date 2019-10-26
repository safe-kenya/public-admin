import React from "react";
import moment from "moment"
import Navbar from "../../components/navbar";
import Subheader from "../../components/subheader";
import Footer from "../../components/footer";
import Stat from "./components/stat";
import Tutorials from "./components/tutorials";
import Questions from "./components/common-questions";
import Map from "./components/map";
import ProfilePanel from "../../components/profile-panel";
import Data from "../../utils/data";

class Home extends React.Component {
  state = {
    trips: [],
    locations: [],
    schedules: [],
    complaints: [],
    students: 0
  };
  componentDidMount() {
    const trips = Data.trips.list();
    this.setState({ trips });

    const complaints = Data.complaints.list();
    this.setState({ complaints });

    Data.trips.subscribe(({ trips }) => {
      const students = trips
        .filter(trip => !trip.completedAt && !trip.isCancelled)
        .reduce((acc, trip) => {
          if (trip.schedule)
            return (acc += trip.schedule.route.students.length);
        }, 0);

      this.setState(Object.assign({ trips }, { students }));

      const locations = [];
      this.state.trips.map(trip => {
        trip.locReports.map(report => locations.push(report))
      })
      this.setState({ locations })
    });

    const schedules = Data.schedules.list();
    this.setState({ schedules });

    Data.schedules.subscribe(schedules => {
      this.setState(schedules);
    });

  }
  render() {

    return (
      <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
        <div
          className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
          id="kt_wrapper"
        >
          <Navbar />
          <Subheader links={["Home"]} />

          <div
            className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
            style={{ height: "100vh" }}
            id="kt_content"
          >
            <div className="kt-container  kt-grid__item kt-grid__item--fluid">
              <div className="row">
                <div className="col-lg-2 col-xl-2">
                  <Stat label="All trips" number={this.state.trips.length} />
                </div>
                <div className="col-lg-2 col-xl-2">
                  <Stat
                    label="Running Trips"
                    number={
                      this.state.trips.filter(
                        trip => !trip.completedAt && !trip.isCancelled
                      ).length
                    }
                  />
                </div>
                <div className="col-lg-2 col-xl-2">
                  <Stat
                    label="Scheduled trips"
                    number={this.state.schedules.length}
                  />
                </div>
                <div className="col-lg-2 col-xl-2">
                  <Stat
                    label="Complete trips"
                    number={
                      this.state.trips.filter(trip => trip.completedAt).length
                    }
                  />
                </div>
                <div className="col-lg-2 col-xl-2">
                  <Stat
                    label="Cancelled trips"
                    number={
                      this.state.trips.filter(trip => trip.isCancelled).length
                    }
                  />
                </div>
                <div className="col-lg-2 col-xl-2">
                  <Stat label="Students In Bus" number={this.state.students} />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-xl-4 order-lg-1 order-xl-1">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12 order-lg-1 order-xl-1">
                      <Stat
                        label="Bus Trips this week"
                        number={this.state.trips.filter(trip => {
                          var now = moment();
                          var input = moment(trip.startedAt);
                          var isThisWeek = (now.isoWeek() == input.isoWeek())
                          return isThisWeek;
                        }).length}
                        bars={["20", "20", "20", "30", "20", "5"]}
                      />
                    </div>
                    <div className="col-lg-12 col-xl-12 order-lg-1 order-xl-1">
                      <Stat
                        label="Parent Complains this week"
                        number={this.state.complaints.filter(complaint => {
                          var now = moment();
                          var input = moment(complaint.time);
                          var isThisWeek = (now.isoWeek() == input.isoWeek())
                          return isThisWeek;
                        }).length}
                        bars={["0", "2", "3", "7", "4", "7"]}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-8 order-lg-1 order-xl-1">
                  <div className="row">
                    <div
                      className="col-lg-12 col-xl-12 order-lg-1 order-xl-1"
                      style={{ height: "460px" }}
                    >
                      {this.state.locations[0] ? <Map locations={this.state.locations} height={'420px'} /> : null}
                      {/* <Map /> */}
                    </div>
                    {/* <div className="col-lg-6 col-xl-6 order-lg-1 order-xl-1">
                      <Tutorials />
                    </div>
                    <div className="col-lg-6 col-xl-6 order-lg-1 order-xl-1">
                      <Questions />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <ProfilePanel />
      </div>
    );
  }
}

export default Home;
