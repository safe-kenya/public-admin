import React from "react";

export default () => (
  <div className="kt-portlet kt-portlet--height-fluid">
    <div className="kt-portlet__head kt-portlet__head--noborder">
      <div className="kt-portlet__head-label">
        <h3 className="kt-portlet__head-title">Author Sales</h3>
      </div>
      <div className="kt-portlet__head-toolbar">
        <div className="kt-portlet__head-toolbar-wrapper">
          <div className="dropdown dropdown-inline">
            <button
              type="button"
              className="btn btn-clean btn-sm btn-icon btn-icon-md"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="flaticon-more-1" />
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <ul className="kt-nav">
                <li className="kt-nav__section kt-nav__section--first">
                  <span className="kt-nav__section-text">Export Tools</span>
                </li>
                <li className="kt-nav__item">
                  <a href="#" className="kt-nav__link">
                    <i className="kt-nav__link-icon la la-print" />
                    <span className="kt-nav__link-text">Print</span>
                  </a>
                </li>
                <li className="kt-nav__item">
                  <a href="#" className="kt-nav__link">
                    <i className="kt-nav__link-icon la la-copy" />
                    <span className="kt-nav__link-text">Copy</span>
                  </a>
                </li>
                <li className="kt-nav__item">
                  <a href="#" className="kt-nav__link">
                    <i className="kt-nav__link-icon la la-file-excel-o" />
                    <span className="kt-nav__link-text">Excel</span>
                  </a>
                </li>
                <li className="kt-nav__item">
                  <a href="#" className="kt-nav__link">
                    <i className="kt-nav__link-icon la la-file-text-o" />
                    <span className="kt-nav__link-text">CSV</span>
                  </a>
                </li>
                <li className="kt-nav__item">
                  <a href="#" className="kt-nav__link">
                    <i className="kt-nav__link-icon la la-file-pdf-o" />
                    <span className="kt-nav__link-text">PDF</span>
                  </a>
                </li>
              </ul>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
    <div className="kt-portlet__body kt-portlet__body--fluid">
      <div className="kt-widget-19">
        <div className="kt-widget-19__title">
          <div className="kt-widget-19__label">
            <small>$</small>64M
          </div>
          <img
            className="kt-widget-19__bg"
            src="./assets/media/misc/iconbox_bg.png"
            alt="bg"
          />
        </div>
        <div className="kt-widget-19__data">
          {/*Doc: For the chart bars you can use state helper classes: kt-bg-success, kt-bg-info, kt-bg-danger. Refer: components/custom/colors.html */}
          <div className="kt-widget-19__chart">
            <div className="kt-widget-19__bar">
              <div
                className="kt-widget-19__bar-45"
                data-toggle="kt-tooltip"
                data-skin="brand"
                data-placement="top"
                title
                data-original-title={45}
              />
            </div>
            <div className="kt-widget-19__bar">
              <div
                className="kt-widget-19__bar-95"
                data-toggle="kt-tooltip"
                data-skin="brand"
                data-placement="top"
                title
                data-original-title={95}
              />
            </div>
            <div className="kt-widget-19__bar">
              <div
                className="kt-widget-19__bar-63"
                data-toggle="kt-tooltip"
                data-skin="brand"
                data-placement="top"
                title
                data-original-title={63}
              />
            </div>
            <div className="kt-widget-19__bar">
              <div
                className="kt-widget-19__bar-11"
                data-toggle="kt-tooltip"
                data-skin="brand"
                data-placement="top"
                title
                data-original-title={11}
              />
            </div>
            <div className="kt-widget-19__bar">
              <div
                className="kt-widget-19__bar-46"
                data-toggle="kt-tooltip"
                data-skin="brand"
                data-placement="top"
                title
                data-original-title={46}
              />
            </div>
            <div className="kt-widget-19__bar">
              <div
                className="kt-widget-19__bar-88"
                data-toggle="kt-tooltip"
                data-skin="brand"
                data-placement="top"
                title
                data-original-title={88}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
