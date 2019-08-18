import React from "react";

class Subheader extends React.Component {
  render() {
    return (
      <div id="kt_subheader" className="kt-subheader kt-grid__item ">
        <div className="kt-container  kt-container--fluid ">
          {/* begin:: Subheader Title */}
          <div className="kt-subheader__title">
            <div className="kt-subheader__breadcrumbs">
              {this.props.links.map(link => {
                return (
                  <>
                    <a
                      href="#"
                      className={
                        "kt-subheader__breadcrumbs-link " +
                        (this.props.links.indexOf(link) === 0
                          ? "kt-subheader__breadcrumbs-link--home"
                          : "")
                      }
                    >
                      {link}
                    </a>
                    {this.props.links.indexOf(link) !==
                    this.props.links.length - 1 ? (
                      <span className="kt-subheader__breadcrumbs-separator" />
                    ) : (
                      ""
                    )}
                    {/* <a href="#" className="kt-subheader__breadcrumbs-link ">
                      List
                    </a> */}
                  </>
                );
              })}
            </div>
          </div>
          {/* end:: Subheader Title */} {/* begin:: Sub-header toolbar */}
          {/* <div className="kt-subheader__toolbar">
            <div className="kt-subheader__toolbar-wrapper">
              <a href="#" className="btn btn-default btn-sm btn-bold btn-upper">
                Create
              </a>
              <a href="#" className="btn btn-default btn-sm btn-bold btn-upper">
                Import From Excel
              </a>
            </div>
          </div> */}
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
