import React from "react";
// import "jquery-validation";
// import $ from "jquery";

// window.jQuery = window.$ = $;
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
      errorClass: "invalid-feedback",
      errorElement: "div",

      highlight: function(element) {
        $(element).addClass("is-invalid");
      },
      unhighlight: function(element) {
        $(element).removeClass("is-invalid");
      },

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
                      </div>
                      <div className="col-lg-3">
                        <label for="exampleSelect1">Route:</label>
                        <select class="form-control">
                          <option>Select route</option>
                          {[2, 3, 4].map(route => (
                            <option value={route}>{route}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-lg-3">
                        <label for="exampleSelect1">Gender:</label>
                        <select class="form-control" id="exampleSelect1">
                          <option>Select gender</option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <label for="exampleSelect1">Parent:</label>
                        <select class="form-control">
                          <option>Select parent</option>
                          {[2, 3, 4].map(parent => (
                            <option value={parent}>parent {parent}</option>
                          ))}
                        </select>
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
