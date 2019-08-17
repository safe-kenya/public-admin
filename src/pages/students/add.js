import React from "react";
const $ = window.$

class Modal extends React.Component {
  show() {
    $("#exampleModalCenter").modal({
      show: true
    });
  }
  hide() {
    $("#exampleModalCenter").modal({
      show: false
    });
  }
  render() {
    return (
      <div>
        {/* <button
          type="button"
          className="btn btn-outline-brand"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Launch vertically centered demo modal
        </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Modal title
                </h5>
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
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
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
