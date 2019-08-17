import React from "react";
import AddModal from "./add";
import EditModal from "./edit";
import DeleteModal from "./delete";
import Data from "../../utils/data";

const $ = window.$;
const addModalInstance = new AddModal();
const editModalInstance = new EditModal();
const deleteModalInstance = new DeleteModal();

class BasicTable extends React.Component {
  state = {
    students: []
  };
  componentDidMount() {
    const students = Data.students.list();
    this.setState({ students });

    Data.students.subscribe(students => {
      this.setState(students);
    });
  }
  render() {
    return (
      <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-aside--enabled kt-aside--left kt-aside--fixed kt-aside--offcanvas-default kt-page--loading">
        <div className="kt-grid kt-grid--hor kt-grid--root">
          <div className="kt-portlet kt-portlet--mobile">
            <AddModal save={student => Data.students.create(student)} />
            <DeleteModal
              delete
              save={student => {
                // student
                Data.students.delete(student);
              }}
            />
            <EditModal
              edit
              save={student => {
                // edit student
                Data.students.update(student);
              }}
            />
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
            <div className="kt-portlet__body" style={{ minHeight: "500px" }}>
              {/*begin: Datatable */}
              <table
                className="table"
                // width="100%"
              >
                <thead>
                  <tr>
                    <th title="Field #2">Student Names</th>
                    <th title="Field #3">Route</th>
                    <th title="Field #4">Gender</th>
                    <th title="Field #5">Parent</th>
                    <th title="Field #7">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.students.map(student => {
                    const { id, gender, names, parent, route } = student;
                    return (
                      <tr key={id}>
                        <td>{names}</td>
                        <td>{route.name}</td>
                        <td>{gender}</td>
                        <td>{parent.name}</td>
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
                              onClick={() => {
                                this.setState({ edit: student });
                                editModalInstance.show(student);
                              }}
                            >
                              <i className="la la-edit" />
                            </button>
                            <button
                              title="Delete"
                              className="btn btn-sm btn-clean btn-icon btn-icon-md"
                              onClick={() => {
                                this.setState({ delete: student });
                                deleteModalInstance.show();
                              }}
                            >
                              <i className="la la-trash" />
                            </button>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/*end: Datatable */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicTable;
