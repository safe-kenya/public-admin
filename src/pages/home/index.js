import React from "react";
import Navbar from "../../components/navbar";
import Subheader from "../../components/subheader";
import Footer from "../../components/footer";
import Stat from "./components/stat";
import Tutorials from "./components/tutorials";
import Questions from "./components/common-questions";
import Map from "./components/map";
import ProfilePanel from "../../components/profile-panel"

class Home extends React.Component {
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
                  <Stat
                    label="All trips"
                    number={0}
                  />
                </div>
                <div className="col-lg-2 col-xl-2">
                  <Stat
                    label="Running Trips"
                    number={0}
                  />
                </div>
                <div className="col-lg-2 col-xl-2">
                  <Stat
                    label="Scheduled trips"
                    number={0}
                  />
                </div>
                <div className="col-lg-2 col-xl-2">
                  <Stat
                    label="Complete trips"
                    number={0}
                  />
                </div>
                <div className="col-lg-2 col-xl-2">
                  <Stat
                    label="Cancelled trips"
                    number={0}
                  />
                </div>
                <div className="col-lg-2 col-xl-2">
                  <Stat
                    label="Students In Bus"
                    number={0}
                  />
                </div>
              </div>
              <div className="row">

                <div className="col-lg-6 col-xl-4 order-lg-1 order-xl-1">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12 order-lg-1 order-xl-1">
                      <Stat
                        label="Bus Trips this week"
                        number={6}
                        bars={["20", "20", "20", "30", "20", "5"]}
                      />
                    </div>
                    <div className="col-lg-12 col-xl-12 order-lg-1 order-xl-1">
                      <Stat
                        label="Parent Complains this week"
                        number={20}
                        bars={["0", "2", "3", "7", "4", "7"]}
                      />
                    </div>
                    <div className="col-lg-12 col-xl-12 order-lg-1 order-xl-1">
                      <Stat
                        label="Bus Lateness time this week"
                        number={6}
                        bars={["5", "4", "6", "3", "0", "0"]}
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
                      <Map />
                    </div>
                    <div className="col-lg-6 col-xl-6 order-lg-1 order-xl-1">
                      <Tutorials />
                    </div>
                    <div className="col-lg-6 col-xl-6 order-lg-1 order-xl-1">
                      <Questions />
                    </div>
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
