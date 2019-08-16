import React from "react";

class Subheader extends React.Component {
  render() {
    return (
      <div id="kt_subheader" className="kt-subheader kt-grid__item ">
        <div className="kt-container  kt-container--fluid ">
          {/* begin:: Subheader Title */}
          <div className="kt-subheader__title">
            <div className="kt-subheader__breadcrumbs">
              <a
                href="#"
                className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--home"
              >
                Students
              </a>
              <span className="kt-subheader__breadcrumbs-separator" />
              <a href="#" className="kt-subheader__breadcrumbs-link ">
                List
              </a>
            </div>
          </div>
          {/* end:: Subheader Title */} {/* begin:: Sub-header toolbar */}
          <div className="kt-subheader__toolbar">
            <div className="kt-subheader__toolbar-wrapper">
              <a href="#" className="btn btn-default btn-sm btn-bold btn-upper">
                Create
              </a>
              <a href="#" className="btn btn-default btn-sm btn-bold btn-upper">
                Import From Excel
              </a>
            </div>
          </div>
          {/* <div className="kt-subheader__toolbar">
            <div className="kt-subheader__toolbar-wrapper">
              
            </div>
          </div> */}
          {/* end:: Sub-header toolbar */}{" "}
        </div>
      </div>
    );
  }
}

export default Subheader;
