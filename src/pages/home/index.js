import React from "react";
import Navbar from "../../components/navbar";
import Subheader from "../../components/subheader";

class Home extends React.Component {
  render() {
    return (
      <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
        <div
          className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
          id="kt_wrapper"
        >
          <Navbar />
          <Subheader title={["Students", "List"]} />

          <div
            className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
            style={{ height: "93vh" }}
            id="kt_content"
          >
            Helpo
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
