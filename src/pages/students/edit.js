import React from "react";
const $ = window.$;

const modalNumber = Math.random()
  .toString()
  .split(".")[1];

class Modal extends React.Component {
  show() {
    $("#" + modalNumber).modal({
      show: true,
      backdrop: "static",
      keyboard: false
    });
  }
  hide() {
    $("#" + modalNumber).modal({
      show: false,
      backdrop: "static",
      keyboard: false
    });
  }
  render() {
    return (
      <div>
        <div
          className="modal"
          id={modalNumber}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Student</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="kt-form kt-form--label-right">
                  <div className="kt-portlet__body">
                    <div className="form-group row">
                      <div className="col-lg-6">
                        <label>Full Name:</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter full name"
                        />
                        <span className="form-text text-muted">
                          Please enter your full name
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <label>Contact Number:</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter contact number"
                        />
                        <span className="form-text text-muted">
                          Please enter your contact number
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-lg-6">
                        <label>Full Name:</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter full name"
                        />
                        <span className="form-text text-muted">
                          Please enter your full name
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <label>Contact Number:</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter contact number"
                        />
                        <span className="form-text text-muted">
                          Please enter your contact number
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-brand"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-outline-brand">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
