import React from "react";
const $ = window.$;

const modalNumber = Math.random()
  .toString()
  .split(".")[1];

class Modal extends React.Component {
  state = {
    names: "Alice A mwali",
    route: {
      name: "mwali route"
    },
    gender: "Male",
    parent: {
      name: "Madam Essue"
    }
  };

  show() {
    $("#" + modalNumber).modal({
      show: true,
      backdrop: "static",
      keyboard: false
    });
  }
  hide() {
    $("#" + modalNumber).modal("hide");
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
                <h5 className="modal-title">Create Student</h5>
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
                        <input type="text" className="form-control" />
                        <span className="form-text text-muted">
                          Please enter text
                        </span>
                      </div>
                      <div className="col-lg-3">
                        <label>Route:</label>
                        <input type="text" className="form-control" />
                        <span className="form-text text-muted">
                          Please enter the ful names
                        </span>
                      </div>
                      <div className="col-lg-3">
                        <label>Gender:</label>
                        <input type="text" className="form-control" />
                        <span className="form-text text-muted">
                          Please enter the students emails
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <label>Parent:</label>
                        <input type="text" className="form-control" />
                        <span className="form-text text-muted">
                          Please select the parent
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
                  //
                  onClick={() => {
                    try {
                      this.props.save(this.state);
                      this.hide();
                    } catch (err) {
                      this.setState({ error: err.message });
                    }
                  }}
                >
                  Save
                </button>
                <button
                  data-dismiss="modal"
                  type="button"
                  className="btn btn-outline-brand"
                >
                  Cancel
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
