import React from "react";
const $ = window.$;

// window.jQuery = window.$ = $;

var KTDatatableDataLocalDemo = (function() {
  // Private functions

  // demo initializer
  var demo = function() {
    var dataJSONArray = [
      {
        id: 1,
        employee_id: "463978155-5",
        first_name: "Carroll",
        last_name: "Maharry",
        email: "cmaharry0@topsy.com",
        phone: "420-935-0970",
        gender: "Male",
        department: "Legal",
        address: "72460 Bunting Trail",
        hire_date: "3/18/2018",
        website: "https://gmpg.org",
        notes:
          "euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",
        status: 6,
        type: 2,
        salary: "$339.37"
      },
      {
        id: 2,
        employee_id: "590410601-7",
        first_name: "Jae",
        last_name: "Frammingham",
        email: "jframmingham1@ucoz.com",
        phone: "377-986-0708",
        gender: "Male",
        department: "Human Resources",
        address: "976 Eagle Crest Junction",
        hire_date: "10/22/2017",
        website: "https://telegraph.co.uk",
        notes:
          "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
        status: 5,
        type: 2,
        salary: "$1568.00"
      },
      {
        id: 3,
        employee_id: "562079447-4",
        first_name: "Natalie",
        last_name: "Stuchberry",
        email: "nstuchberry2@jimdo.com",
        phone: "718-320-9991",
        gender: "Female",
        department: "Legal",
        address: "9971 Rigney Pass",
        hire_date: "6/1/2018",
        website: "http://nbcnews.com",
        notes: "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis",
        status: 1,
        type: 1,
        salary: "$2014.50"
      },
      {
        id: 4,
        employee_id: "078485871-3",
        first_name: "Abran",
        last_name: "Ivett",
        email: "aivett3@pinterest.com",
        phone: "784-922-2482",
        gender: "Male",
        department: "Accounting",
        address: "9 Mesta Court",
        hire_date: "2/6/2018",
        website: "http://wikipedia.org",
        notes:
          "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra",
        status: 2,
        type: 1,
        salary: "$1205.64"
      },
      {
        id: 5,
        employee_id: "048140516-X",
        first_name: "Viola",
        last_name: "Ends",
        email: "vends4@squarespace.com",
        phone: "613-457-5253",
        gender: "Female",
        department: "Research and Development",
        address: "2 Paget Court",
        hire_date: "3/16/2018",
        website: "https://dot.gov",
        notes:
          "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit",
        status: 2,
        type: 2,
        salary: "$1376.93"
      }
    ];

    var datatable = $(".kt_datatable").KTDatatable({
      // datasource definition
      data: {
        type: "local",
        source: dataJSONArray,
        pageSize: 10
      },

      // layout definition
      layout: {
        scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
        // height: 450, // datatable's body's fixed height
        footer: false // display/hide footer
      },

      // column sorting
      sortable: true,

      pagination: true,

      search: {
        input: $("#generalSearch")
      },

      // columns definition
      columns: [
        {
          field: "id",
          title: "#",
          sortable: false,
          width: 20,
          type: "number",
          selector: { class: "kt-checkbox--solid" },
          textAlign: "center"
        },
        {
          field: "employee_id",
          title: "Employee ID"
        },
        {
          field: "name",
          title: "Name",
          template: function(row) {
            return row.first_name + " " + row.last_name;
          }
        },
        {
          field: "hire_date",
          title: "Hire Date",
          type: "date",
          format: "MM/DD/YYYY"
        },
        {
          field: "gender",
          title: "Gender"
        },
        {
          field: "status",
          title: "Status",
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: { title: "Pending", class: "kt-badge--brand" },
              2: { title: "Delivered", class: " kt-badge--metal" },
              3: { title: "Canceled", class: " kt-badge--primary" },
              4: { title: "Success", class: " kt-badge--success" },
              5: { title: "Info", class: " kt-badge--info" },
              6: { title: "Danger", class: " kt-badge--danger" },
              7: { title: "Warning", class: " kt-badge--warning" }
            };
            return (
              '<span class="kt-badge ' +
              status[row.status].class +
              ' kt-badge--inline kt-badge--pill">' +
              status[row.status].title +
              "</span>"
            );
          }
        },
        {
          field: "type",
          title: "Type",
          autoHide: false,
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: { title: "Online", state: "danger" },
              2: { title: "Retail", state: "primary" },
              3: { title: "Direct", state: "accent" }
            };
            return (
              '<span class="kt-badge kt-badge--' +
              status[row.type].state +
              ' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' +
              status[row.type].state +
              '">' +
              status[row.type].title +
              "</span>"
            );
          }
        },
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 110,
          overflow: "visible",
          autoHide: false,
          template: function() {
            return '\
                      <div class="dropdown">\
                          <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                              <i class="la la-cog"></i>\
                          </a>\
                            <div class="dropdown-menu dropdown-menu-right">\
                              <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
                              <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
                              <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
                            </div>\
                      </div>\
                      <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">\
                          <i class="la la-edit"></i>\
                      </a>\
                      <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">\
                          <i class="la la-trash"></i>\
                      </a>\
                  ';
          }
        }
      ]
    });

    $("#kt_form_status").on("change", function() {
      datatable.search(
        $(this)
          .val()
          .toLowerCase(),
        "status"
      );
    });

    $("#kt_form_type").on("change", function() {
      datatable.search(
        $(this)
          .val()
          .toLowerCase(),
        "type"
      );
    });

    $("#kt_form_status,#kt_form_type").selectpicker();
  };

  return {
    // Public functions
    init: function() {
      // init dmeo
      demo();
    }
  };
})();

class BasicTable extends React.Component {
  componentDidMount() {
    "use strict";

    window.jQuery(document).ready(function() {
      //   alert("tets");
      KTDatatableDataLocalDemo.init();
    });
  }
  render() {
    return (
      <div className="kt-portlet kt-portlet--mobile">
        {/* <div className="kt-portlet__head kt-portlet__head--lg">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">
              Local Datatable
              <small>initialized from javascript array</small>
            </h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <div className="kt-portlet__head-wrapper">
              <a href="#" className="btn btn-clean kt-hidden">
                Back to dashboard
              </a>
              <a
                href="#"
                className="btn btn-clean btn-bold btn-upper btn-font-sm kt-hidden"
              >
                <i className="la la-long-arrow-left" />
                Back
              </a>
              <a
                href="#"
                className="btn btn-default btn-bold btn-upper btn-font-sm"
              >
                <i className="flaticon2-add-1" />
                New Record
              </a>
              &nbsp;
              <div className="dropdown dropdown-inline">
                <button
                  type="button"
                  className="btn btn-default btn-bold btn-upper btn-font-sm"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="flaticon2-soft-icons" /> Actions
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="kt-nav">
                    <li className="kt-nav__section kt-nav__section--first">
                      <span className="kt-nav__section-text">
                        Quick Actions
                      </span>
                    </li>
                    <li className="kt-nav__item">
                      <a href="#" className="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-graph-1" />
                        <span className="kt-nav__link-text">Statistics</span>
                      </a>
                    </li>
                    <li className="kt-nav__item">
                      <a href="#" className="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-calendar-4" />
                        <span className="kt-nav__link-text">Events</span>
                      </a>
                    </li>
                    <li className="kt-nav__item">
                      <a href="#" className="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-layers-1" />
                        <span className="kt-nav__link-text">Reports</span>
                      </a>
                    </li>
                    <li className="kt-nav__item">
                      <a href="#" className="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-graph" />
                        <span className="kt-nav__link-text">Notifications</span>
                      </a>
                    </li>
                    <li className="kt-nav__item">
                      <a href="#" className="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-file-1" />
                        <span className="kt-nav__link-text">Files</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
          </div>
        </div> */}
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
                  <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <div className="kt-form__group kt-form__group--inline">
                      <div className="kt-form__label">
                        <label>Status:</label>
                      </div>
                      <div className="kt-form__control">
                        <div className="dropdown bootstrap-select form-control">
                          <select
                            className="form-control bootstrap-select"
                            id="kt_form_status"
                            tabIndex={-98}
                          >
                            <option value>All</option>
                            <option value={1}>Pending</option>
                            <option value={2}>Delivered</option>
                            <option value={3}>Canceled</option>
                            <option value={4}>Success</option>
                            <option value={5}>Info</option>
                            <option value={6}>Danger</option>
                          </select>

                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-1"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <div className="kt-form__group kt-form__group--inline">
                      <div className="kt-form__label">
                        <label>Type:</label>
                      </div>
                      <div className="kt-form__control">
                        <div className="dropdown bootstrap-select form-control">
                          <select
                            className="form-control bootstrap-select"
                            id="kt_form_type"
                            tabIndex={-98}
                          >
                            <option value>All</option>
                            <option value={1}>Online</option>
                            <option value={2}>Retail</option>
                            <option value={3}>Direct</option>
                          </select>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-2"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 order-1 order-xl-2 kt-align-right">
                <a href="#" className="btn btn-default kt-hidden">
                  <i className="la la-cart-plus" /> New Order
                </a>
                <div className="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none" />
              </div>
            </div>
          </div>{" "}
          {/*end: Search Form */}
        </div>
        <div className="kt-portlet__body kt-portlet__body--fit">
          {/*begin: Datatable */}
          <div className="kt_datatable" id="local_data" />
          {/*end: Datatable */}
        </div>
      </div>
    );
  }
}

export default BasicTable;
