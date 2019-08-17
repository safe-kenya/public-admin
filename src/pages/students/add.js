import React from "react";
import "jquery-validation";
const $ = window.$;

const modalNumber = Math.random()
  .toString()
  .split(".")[1];

class Modal extends React.Component {
  state = {
    loading: false,
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
  componentDidMount() {
    const _this = this;
    this.validator = $("#" + modalNumber + "form").validate({
      async submitHandler(form, event) {
        event.preventDefault();
        try {
          _this.setState({ loading: true });
          await _this.props.save(_this.state);
          _this.hide();
          _this.setState({ loading: false });
        } catch (err) {
          _this.setState({ error: err.message });
          _this.setState({ loading: false });
        }
      }
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
              <form
                id={modalNumber + "form"}
                className="kt-form kt-form--label-right"
              >
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
                  <div className="kt-portlet__body">
                    <div className="form-group row">
                      <div className="col-lg-6">
                        <label>Full Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          name="fullname"
                          minLength="2"
                          type="text"
                          required
                        />
                        <span className="form-text text-muted">
                          Please enter text
                        </span>
                      </div>
                      <div className="col-lg-3">
                        <label>Route:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="route"
                          name="route"
                          required
                        />
                        <span className="form-text text-muted">
                          Please select the full route
                        </span>
                      </div>
                      <div className="col-lg-3">
                        <label>Gender:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          name="gender"
                          minLength="2"
                          type="text"
                          required
                        />
                        <span className="form-text text-muted">
                          Please enter the gender
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <label>Parent:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="parent"
                          name="parent"
                          minLength="2"
                          type="text"
                          required
                        />
                        <span className="form-text text-muted">
                          Please select the parent
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-brand"
                    type="submit"
                    disabled={this.state.loading}
                  >
                    {this.state.loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Save"
                    )}
                  </button>
                  <button
                    data-dismiss="modal"
                    type="button"
                    className="btn btn-outline-brand"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
