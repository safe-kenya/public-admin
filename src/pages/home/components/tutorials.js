import React from "react";

export default props => (
  <div className="kt-portlet kt-portlet--height-fluid">
    <div className="kt-portlet__head kt-portlet__head--noborder">
      <div className="kt-portlet__head-label">
        <h3 className="kt-portlet__head-title">Quick Info</h3>
      </div>
    </div>
    <div className="kt-portlet__body kt-portlet__body--fluid">
      <div className="kt-list kt-list--badge">
        <a href="#" className="kt-list__item">
          <span className="kt-list__badge kt-list__badge--success" />
          <span className="kt-list__icon">
            <i className="flaticon2-chronometer k-font-success" />
          </span>
          <span className="kt-list__text">
            Configuring students, busses and drivers
          </span>
        </a>
        <a href="#" className="kt-list__item">
          <span className="kt-list__badge kt-list__badge--success" />
          <span className="kt-list__icon">
            <i className="flaticon2-chronometer k-font-success" />
          </span>
          <span className="kt-list__text">
            Adding data from other systems like excel
          </span>
        </a>
        <a href="#" className="kt-list__item">
          <span className="kt-list__badge kt-list__badge--success" />
          <span className="kt-list__icon">
            <i className="flaticon2-chronometer k-font-success" />
          </span>
          <span className="kt-list__text">
            Sending specialized communication to your parents
          </span>
        </a>
      </div>
    </div>
  </div>
);
