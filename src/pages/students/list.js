import React from "react";
import Navbar from "../../components/navbar";
import Subheader from "../../components/subheader";
import Table from "./table";
import Footer from "../../components/footer";
import AddModal from "./add";

class App extends React.Component {
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
            id="kt_content"
          >
            <div className="kt-container  kt-grid__item kt-grid__item--fluid">
              <AddModal />
              <Table />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
