import React from "react";
import AddModal from "./add";
import EditModal from "./edit";
import DeleteModal from "./delete";

const $ = window.$;
const addModalInstance = new AddModal();
const editModalInstance = new EditModal();
const deleteModalInstance = new DeleteModal();

class BasicTable extends React.Component {
  render() {
    return (
      <div className="kt-portlet kt-portlet--mobile">
        <AddModal />
        <DeleteModal />
        <EditModal />
        <div className="kt-portlet__body">
          {/*begin: Search Form */}
          <div className="kt-form kt-fork--label-right kt-margin-t-20 kt-margin-b-10">
            <div className="row align-items-center">
              <div className="col-xl-8 order-2 order-xl-1">
                <div className="row align-items-center">
                  <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <div className="kt-input-icon kt-input-icon--left">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        id="generalSearch"
                      />
                      <span className="kt-input-icon__icon kt-input-icon__icon--left">
                        <span>
                          <i className="la la-search" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 order-2 order-xl-1">
                <button
                  href="#"
                  className="btn btn-default btn-sm btn-bold btn-upper float-right"
                  onClick={() => addModalInstance.show()}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
          {/*end: Search Form */}
        </div>
        <div className="kt-portlet__body">
          {/*begin: Datatable */}
          <table
            className="table table-head-noborder"
            // width="100%"
            style={{ minHeight: "500px" }}
          >
            <thead>
              <tr>
                <th title="Field #2">Student names</th>
                <th title="Field #3">Route</th>
                <th title="Field #4">Gender</th>
                <th title="Field #5">Parent</th>
                <th title="Field #7">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John H mwangi</td>
                <td>Malawa route</td>
                <td>Male</td>
                <td>James mwangi</td>
                <td
                  data-field="Actions"
                  data-autohide-disabled="false"
                  className="kt-datatable__cell"
                >
                  <span
                    style={{
                      overflow: "visible",
                      position: "relative",
                      width: "110px"
                    }}
                  >
                    <button
                      title="Edit details"
                      className="btn btn-sm btn-clean btn-icon btn-icon-md"
                      onClick={() => editModalInstance.show()}
                    >
                      <i className="la la-edit" />
                    </button>
                    <button
                      title="Delete"
                      className="btn btn-sm btn-clean btn-icon btn-icon-md"
                      onClick={() => {
                        deleteModalInstance.show();
                      }}
                    >
                      <i className="la la-trash" />
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          {/*end: Datatable */}
        </div>
      </div>
    );
  }
}

export default BasicTable;
