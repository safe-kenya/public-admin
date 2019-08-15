import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  {
    return (
      <div>
        {/* begin:: Page */}
        {/* begin:: Header Mobile */}
        <div
          id="kt_header_mobile"
          className="kt-header-mobile  kt-header-mobile--fixed "
        >
          <div className="kt-header-mobile__logo">
            <a href="demo5/index.html">
              <img alt="Logo" src="./assets/media/logos/logo-1.png" />
            </a>
          </div>
          <div className="kt-header-mobile__toolbar">
            <button
              className="kt-header-mobile__toolbar-toggler"
              id="kt_header_mobile_toggler"
            >
              <span />
            </button>
            <button
              className="kt-header-mobile__toolbar-topbar-toggler"
              id="kt_header_mobile_topbar_toggler"
            >
              <i className="flaticon-more" />
            </button>
          </div>
        </div>
        {/* end:: Header Mobile */}
        <div className="kt-grid kt-grid--hor kt-grid--root">
          <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
            <div
              className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
              id="kt_wrapper"
            >
              {/* begin:: Header */}
              <div
                id="kt_header"
                className="kt-header kt-grid__item kt-grid kt-grid--ver  kt-header--fixed "
              >
                {/* begin:: Brand */}
                <div
                  className="kt-header__brand   kt-grid__item"
                  id="kt_header_brand"
                >
                  <a href="demo5/index.html">
                    <img alt="Logo" src="./assets/media/logos/logo-1.png" />
                  </a>
                </div>
                {/* end:: Brand */}
                {/* begin: Header Menu */}
                <button
                  className="kt-header-menu-wrapper-close"
                  id="kt_header_menu_mobile_close_btn"
                >
                  <i className="la la-close" />
                </button>
                <div
                  className="kt-header-menu-wrapper kt-grid__item"
                  id="kt_header_menu_wrapper"
                >
                  <div
                    id="kt_header_menu"
                    className="kt-header-menu kt-header-menu-mobile "
                  >
                    <ul className="kt-menu__nav ">
                      <li
                        className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                        data-ktmenu-submenu-toggle="click"
                        aria-haspopup="true"
                      >
                        <a
                          href="javascript:;"
                          className="kt-menu__link kt-menu__toggle"
                        >
                          <span className="kt-menu__link-text">Components</span>
                          <i className="kt-menu__hor-arrow la la-angle-down" />
                          <i className="kt-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div
                          className="kt-menu__submenu  kt-menu__submenu--fixed kt-menu__submenu--left"
                          style={{ width: "1000px" }}
                        >
                          <div className="kt-menu__subnav">
                            <ul className="kt-menu__content">
                              <li className="kt-menu__item ">
                                <h3 className="kt-menu__heading kt-menu__toggle">
                                  <span className="kt-menu__link-text">
                                    Base
                                  </span>
                                  <i className="kt-menu__ver-arrow la la-angle-right" />
                                </h3>
                                <ul className="kt-menu__inner">
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/alert.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Alert
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/badge.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Badge
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/table.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Table
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/buttons.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Buttons
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/button-group.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Button Group
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/card.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Card
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/collapse.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Collapse
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/accordions.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Accordions
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/dropdown.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Dropdown
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/breadcrumb.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Breadcrumb
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="kt-menu__item ">
                                <h3 className="kt-menu__heading kt-menu__toggle">
                                  <span className="kt-menu__link-text">
                                    Base 2
                                  </span>
                                  <i className="kt-menu__ver-arrow la la-angle-right" />
                                </h3>
                                <ul className="kt-menu__inner">
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/spinners.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Spinners
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/list-group.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        List Group
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/modal.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Modal
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/navs.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Navs
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/tabs/base.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Base Tabs
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/tabs/line.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Line Tabs
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/tabs/button.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Button Tabs
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/pagination.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Pagination
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/popovers.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Popovers
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/tooltips.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Tooltips
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/toasts.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Toasts
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/base/progress.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Progress
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="kt-menu__item ">
                                <h3 className="kt-menu__heading kt-menu__toggle">
                                  <span className="kt-menu__link-text">
                                    Custom
                                  </span>
                                  <i className="kt-menu__ver-arrow la la-angle-right" />
                                </h3>
                                <ul className="kt-menu__inner">
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/colors.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Colors
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/typography.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Typography
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/spinners.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Spinners
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/notes.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Notes
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/lists.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Lists
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/notifications.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Notifications
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/media.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Media
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/timeline.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Timeline
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/navs.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Navs
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/head.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Head
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/custom/pagination.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Pagination
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="kt-menu__item ">
                                <h3 className="kt-menu__heading kt-menu__toggle">
                                  <span className="kt-menu__link-text">
                                    Extended
                                  </span>
                                  <i className="kt-menu__ver-arrow la la-angle-right" />
                                </h3>
                                <ul className="kt-menu__inner">
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/extended/sticky-panels.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Sticky Panels
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/extended/blockui.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Block UI
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/extended/scroll.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Perfect Scroll
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/extended/toastr.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Toastr
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/extended/treeview.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Tree View
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/extended/sweetalert2.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        SweetAlert2
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/extended/uppy.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Uppy File Upload
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/extended/dual-listbox.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Dual Listbox
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/extended/session-timeout.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Session Timeout
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/extended/idle-timer.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Idle Timer
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li
                        className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                        data-ktmenu-submenu-toggle="click"
                        aria-haspopup="true"
                      >
                        <a
                          href="javascript:;"
                          className="kt-menu__link kt-menu__toggle"
                        >
                          <span className="kt-menu__link-text">Extended</span>
                          <i className="kt-menu__hor-arrow la la-angle-down" />
                          <i className="kt-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                          <ul className="kt-menu__subnav">
                            <li
                              className="kt-menu__item  kt-menu__item--submenu"
                              data-ktmenu-submenu-toggle="hover"
                              aria-haspopup="true"
                            >
                              <a
                                href="javascript:;"
                                className="kt-menu__link kt-menu__toggle"
                              >
                                <i className="kt-menu__link-icon flaticon-rocket" />
                                <span className="kt-menu__link-text">
                                  Widgets
                                </span>
                                <i className="kt-menu__hor-arrow la la-angle-right" />
                                <i className="kt-menu__ver-arrow la la-angle-right" />
                              </a>
                              <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                <ul className="kt-menu__subnav">
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/widgets/charts.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Charts
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/widgets/general.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        General
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              className="kt-menu__item  kt-menu__item--submenu"
                              data-ktmenu-submenu-toggle="hover"
                              aria-haspopup="true"
                            >
                              <a
                                href="javascript:;"
                                className="kt-menu__link kt-menu__toggle"
                              >
                                <i className="kt-menu__link-icon flaticon-tool" />
                                <span className="kt-menu__link-text">
                                  Forms
                                </span>
                                <i className="kt-menu__hor-arrow la la-angle-right" />
                                <i className="kt-menu__ver-arrow la la-angle-right" />
                              </a>
                              <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                <ul className="kt-menu__subnav">
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-icon flaticon-interface-3" />
                                      <span className="kt-menu__link-text">
                                        Controls
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/controls/base.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Base Inputs
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/controls/input-group.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Input Groups
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/controls/checkbox.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Checkbox
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/controls/radio.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Radio
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/controls/switch.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Switch
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/controls/option.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Options
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/controls/avatar.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Avatar Inputs
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-icon flaticon-interface-1" />
                                      <span className="kt-menu__link-text">
                                        Widgets
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/bootstrap-datepicker.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Datepicker
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/bootstrap-datetimepicker.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Datetimepicker
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/bootstrap-timepicker.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Timepicker
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/bootstrap-daterangepicker.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Daterangepicker
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/bootstrap-touchspin.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Touchspin
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/bootstrap-maxlength.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Maxlength
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/bootstrap-multipleselectsplitter.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Multiple Select Splitter
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/bootstrap-select.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Bootstrap Select
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/typeahead.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Typeahead
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/nouislider.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              noUiSlider
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/input-mask.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Input Masks
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/quill.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Quill Text Editor
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/summernote.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Summernote
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/bootstrap-markdown.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Markdown
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/autosize.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Autosize
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/clipboard.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Clipboard
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/dropzone.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Dropzone
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/widgets/recaptcha.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Google reCaptcha
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-icon flaticon-web" />
                                      <span className="kt-menu__link-text">
                                        Layouts
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/layouts/basic.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Basic
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/layouts/multi-column.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Multi Column
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/layouts/action-bars.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Basic Action Bar
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/layouts/sticky-action-bars.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Sticky Action Bars
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/layouts/repeater.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Form Repeater
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-icon flaticon-web" />
                                      <span className="kt-menu__link-text">
                                        Validation
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/validation/states.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              States
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/validation/controls.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Controls
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/forms/validation/widgets.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Widgets
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              className="kt-menu__item  kt-menu__item--submenu"
                              data-ktmenu-submenu-toggle="hover"
                              aria-haspopup="true"
                            >
                              <a
                                href="javascript:;"
                                className="kt-menu__link kt-menu__toggle"
                              >
                                <i className="kt-menu__link-icon flaticon-share" />
                                <span className="kt-menu__link-text">
                                  Icons
                                </span>
                                <i className="kt-menu__hor-arrow la la-angle-right" />
                                <i className="kt-menu__ver-arrow la la-angle-right" />
                              </a>
                              <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                <ul className="kt-menu__subnav">
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/icons/flaticon.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Flaticon
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/icons/fontawesome5.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Fontawesome 5
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/icons/lineawesome.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Lineawesome
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/icons/socicons.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Socicons
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              className="kt-menu__item  kt-menu__item--submenu"
                              data-ktmenu-submenu-toggle="hover"
                              aria-haspopup="true"
                            >
                              <a
                                href="javascript:;"
                                className="kt-menu__link kt-menu__toggle"
                              >
                                <i className="kt-menu__link-icon flaticon-interface-1" />
                                <span className="kt-menu__link-text">
                                  Portlets
                                </span>
                                <i className="kt-menu__hor-arrow la la-angle-right" />
                                <i className="kt-menu__ver-arrow la la-angle-right" />
                              </a>
                              <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                <ul className="kt-menu__subnav">
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/portlets/base.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Base
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/portlets/tools.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Tools
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/portlets/draggable.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Draggable
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/portlets/sticky.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Sticky
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              className="kt-menu__item  kt-menu__item--submenu"
                              data-ktmenu-submenu-toggle="hover"
                              aria-haspopup="true"
                            >
                              <a
                                href="javascript:;"
                                className="kt-menu__link kt-menu__toggle"
                              >
                                <i className="kt-menu__link-icon flaticon-calendar" />
                                <span className="kt-menu__link-text">
                                  Calendar
                                </span>
                                <i className="kt-menu__hor-arrow la la-angle-right" />
                                <i className="kt-menu__ver-arrow la la-angle-right" />
                              </a>
                              <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                <ul className="kt-menu__subnav">
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/calendar/basic.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Basic
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/calendar/list-view.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        List View
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/calendar/agenda-week.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Agenda Week View
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/calendar/google.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Google Calendar
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/calendar/external.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        External Events
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/calendar/rendering.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Event Rendering
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              className="kt-menu__item  kt-menu__item--submenu"
                              data-ktmenu-submenu-toggle="hover"
                              aria-haspopup="true"
                            >
                              <a
                                href="javascript:;"
                                className="kt-menu__link kt-menu__toggle"
                              >
                                <i className="kt-menu__link-icon flaticon-diagram" />
                                <span className="kt-menu__link-text">
                                  Charts
                                </span>
                                <i className="kt-menu__hor-arrow la la-angle-right" />
                                <i className="kt-menu__ver-arrow la la-angle-right" />
                              </a>
                              <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                <ul className="kt-menu__subnav">
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/charts/flotcharts.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Flot Charts
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/charts/google-charts.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Google Charts
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/charts/morris-charts.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Morris Charts
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    className="kt-menu__item "
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="demo5/components/charts/chart-js.html"
                                      className="kt-menu__link "
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Chart JS
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                        data-ktmenu-submenu-toggle="click"
                        aria-haspopup="true"
                      >
                        <a
                          href="javascript:;"
                          className="kt-menu__link kt-menu__toggle"
                        >
                          <span className="kt-menu__link-text">Datatables</span>
                          <i className="kt-menu__hor-arrow la la-angle-down" />
                          <i className="kt-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                          <ul className="kt-menu__subnav">
                            <li
                              className="kt-menu__item  kt-menu__item--submenu"
                              data-ktmenu-submenu-toggle="hover"
                              aria-haspopup="true"
                            >
                              <a
                                href="javascript:;"
                                className="kt-menu__link kt-menu__toggle"
                              >
                                <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                  <span />
                                </i>
                                <span className="kt-menu__link-text">
                                  KTDatatable
                                </span>
                                <i className="kt-menu__hor-arrow la la-angle-right" />
                                <i className="kt-menu__ver-arrow la la-angle-right" />
                              </a>
                              <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                <ul className="kt-menu__subnav">
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Base
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/base/data-local.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Local Data
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/base/data-json.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              JSON Data
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/base/data-ajax.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Ajax Data
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/base/html-table.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              HTML Table
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/base/local-sort.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Local Sort
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/base/translation.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Translation
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Advanced
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/advanced/record-selection.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Record Selection
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/advanced/row-details.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Row Details
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/advanced/modal.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Modal Examples
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/advanced/column-rendering.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Column Rendering
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/advanced/column-width.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Column Width
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/advanced/vertical.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Vertical Scrolling
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Child Datatables
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/child/data-local.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Local Data
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/child/data-ajax.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Remote Data
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        API
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/api/methods.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              API Methods
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/keen-datatable/api/events.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Events
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              className="kt-menu__item  kt-menu__item--submenu"
                              data-ktmenu-submenu-toggle="hover"
                              aria-haspopup="true"
                            >
                              <a
                                href="javascript:;"
                                className="kt-menu__link kt-menu__toggle"
                              >
                                <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                                  <span />
                                </i>
                                <span className="kt-menu__link-text">
                                  Datatables.net
                                </span>
                                <i className="kt-menu__hor-arrow la la-angle-right" />
                                <i className="kt-menu__ver-arrow la la-angle-right" />
                              </a>
                              <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                <ul className="kt-menu__subnav">
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <span className="kt-menu__link-text">
                                        Base
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/basic/basic.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Basic Tables
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/basic/scrollable.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Scrollable Tables
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/basic/headers.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Complex Headers
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/basic/paginations.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Pagination Options
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <span className="kt-menu__link-text">
                                        Advanced
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/advanced/column-rendering.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Column Rendering
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/advanced/multiple-controls.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Multiple Controls
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/advanced/column-visibility.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Column Visibility
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/advanced/row-callback.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Row Callback
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/advanced/row-grouping.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Row Grouping
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/advanced/footer-callback.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Footer Callback
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <span className="kt-menu__link-text">
                                        Data sources
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/data-sources/html.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              HTML
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/data-sources/javascript.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Javascript
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/data-sources/ajax-client-side.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Ajax Client-side
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/data-sources/ajax-server-side.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Ajax Server-side
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <span className="kt-menu__link-text">
                                        Search Options
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/search-options/column-search.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Column Search
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/search-options/advanced-search.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Advanced Search
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <span className="kt-menu__link-text">
                                        Extensions
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/extensions/buttons.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Buttons
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/extensions/colreorder.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              ColReorder
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/extensions/keytable.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              KeyTable
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/extensions/responsive.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Responsive
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/extensions/rowgroup.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              RowGroup
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/extensions/rowreorder.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              RowReorder
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/extensions/scroller.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Scroller
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/components/datatables/extensions/select.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Select
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                        data-ktmenu-submenu-toggle="click"
                        aria-haspopup="true"
                      >
                        <a
                          href="javascript:;"
                          className="kt-menu__link kt-menu__toggle"
                        >
                          <span className="kt-menu__link-text">Custom</span>
                          <i className="kt-menu__hor-arrow la la-angle-down" />
                          <i className="kt-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                          <ul className="kt-menu__subnav">
                            <li
                              className="kt-menu__item  kt-menu__item--submenu"
                              data-ktmenu-submenu-toggle="hover"
                              aria-haspopup="true"
                            >
                              <a
                                href="javascript:;"
                                className="kt-menu__link kt-menu__toggle"
                              >
                                <i className="kt-menu__link-icon flaticon-chat-1" />
                                <span className="kt-menu__link-text">Apps</span>
                                <i className="kt-menu__hor-arrow la la-angle-right" />
                                <i className="kt-menu__ver-arrow la la-angle-right" />
                              </a>
                              <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                <ul className="kt-menu__subnav">
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Blog
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/blog/grid.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Blog Grid
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/blog/grid-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Blog Grid v2
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/blog/list.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Blog List
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/blog/post.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Blog Post
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Pricing
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/pricing/pricing-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Pricing v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/pricing/pricing-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Pricing v2
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Invoices
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/invoices/invoice-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Invoice v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/invoices/invoice-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Invoice v2
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        FAQs
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/faq/faq-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              FAQ v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/faq/faq-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              FAQ v2
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/faq/faq-v3.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              FAQ v3
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/faq/faq-v4.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              FAQ v4
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        User Pages
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/user/login-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Login v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/user/login-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Login v2
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/user/profile-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Profile v1
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Error Pages
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/error/404-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              404 - v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/error/404-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              404 - v2
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/error/404-v3.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              404 - v3
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/error/404-v4.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              404 - v4
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li
                              className="kt-menu__item  kt-menu__item--submenu"
                              data-ktmenu-submenu-toggle="hover"
                              aria-haspopup="true"
                            >
                              <a
                                href="javascript:;"
                                className="kt-menu__link kt-menu__toggle"
                              >
                                <i className="kt-menu__link-icon flaticon-chat-1" />
                                <span className="kt-menu__link-text">
                                  Pages
                                </span>
                                <i className="kt-menu__hor-arrow la la-angle-right" />
                                <i className="kt-menu__ver-arrow la la-angle-right" />
                              </a>
                              <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                <ul className="kt-menu__subnav">
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Wizards
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/wizards/wizard-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Wizard v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/wizards/wizard-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Wizard v2
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/wizards/wizard-v3.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Wizard v3
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/wizards/wizard-v4.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Wizard v4
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Blog
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/blog/grid.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Blog Grid
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/blog/grid-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Blog Grid v2
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/blog/list.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Blog List
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/blog/post.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Blog Post
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Pricing
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/pricing/pricing-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Pricing v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/pricing/pricing-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Pricing v2
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Invoices
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/invoices/invoice-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Invoice v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/invoices/invoice-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Invoice v2
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        FAQs
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/faq/faq-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              FAQ v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/faq/faq-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              FAQ v2
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/faq/faq-v3.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              FAQ v3
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/faq/faq-v4.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              FAQ v4
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Login Pages
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/login/login-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Login v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/login/login-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              Login v2
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    className="kt-menu__item  kt-menu__item--submenu"
                                    data-ktmenu-submenu-toggle="hover"
                                    aria-haspopup="true"
                                  >
                                    <a
                                      href="javascript:;"
                                      className="kt-menu__link kt-menu__toggle"
                                    >
                                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                        <span />
                                      </i>
                                      <span className="kt-menu__link-text">
                                        Error Pages
                                      </span>
                                      <i className="kt-menu__hor-arrow la la-angle-right" />
                                      <i className="kt-menu__ver-arrow la la-angle-right" />
                                    </a>
                                    <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                                      <ul className="kt-menu__subnav">
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/error/404-v1.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              404 - v1
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/error/404-v2.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              404 - v2
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/error/404-v3.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              404 - v3
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="kt-menu__item "
                                          aria-haspopup="true"
                                        >
                                          <a
                                            href="demo5/custom/error/404-v4.html"
                                            className="kt-menu__link "
                                          >
                                            <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                              <span />
                                            </i>
                                            <span className="kt-menu__link-text">
                                              404 - v4
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="kt-menu__item " aria-haspopup="true">
                              <a
                                target="_blank"
                                href="https://keenthemes.com/keen/preview/demo5/builder.html"
                                className="kt-menu__link "
                              >
                                <span className="kt-menu__link-text">
                                  Layout Builder
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
                {/* end: Header Menu */} {/* begin:: Header Topbar */}
                <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
                  {/*begin: Search */}
                  <div className="kt-header__topbar-item kt-header__topbar-item--search dropdown">
                    <div
                      className="kt-header__topbar-wrapper"
                      id="kt_offcanvas_toolbar_search_toggler_btn"
                    >
                      <span className="kt-header__topbar-icon">
                        <i className="flaticon2-search" />
                      </span>
                    </div>
                  </div>
                  {/*end: Search */}
                  {/*begin: Notifications */}
                  <div className="kt-header__topbar-item">
                    <div
                      className="kt-header__topbar-wrapper"
                      id="kt_offcanvas_toolbar_notifications_toggler_btn"
                    >
                      <span className="kt-header__topbar-icon">
                        <i className="flaticon2-notification" />
                      </span>
                      <span className="kt-badge kt-badge--brand" />
                    </div>
                  </div>
                  {/*end: Notifications */}
                  {/*begin: Quick actions */}
                  <div className="kt-header__topbar-item">
                    <div
                      className="kt-header__topbar-wrapper"
                      id="kt_offcanvas_toolbar_quick_actions_toggler_btn"
                    >
                      <span className="kt-header__topbar-icon">
                        <i className="flaticon2-settings" />
                      </span>
                    </div>
                  </div>
                  {/*end: Quick actions */}
                  {/*begin: Quick panel toggler */}
                  <div
                    className="kt-header__topbar-item"
                    data-toggle="kt-tooltip"
                    title="Quick panel"
                    data-placement="top"
                  >
                    <div className="kt-header__topbar-wrapper">
                      <span
                        className="kt-header__topbar-icon"
                        id="kt_quick_panel_toggler_btn"
                      >
                        <i className="flaticon2-menu" />
                      </span>
                    </div>
                  </div>
                  {/*end: Quick panel toggler */}
                  {/*begin: Language bar */}
                  <div className="kt-header__topbar-item kt-header__topbar-item--langs">
                    <div
                      className="kt-header__topbar-wrapper"
                      data-toggle="dropdown"
                      data-offset="10px,0px"
                    >
                      <span className="kt-header__topbar-icon">
                        <img
                          src="./assets/media/flags/020-flag.svg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround">
                      <ul className="kt-nav kt-margin-t-10 kt-margin-b-10">
                        <li className="kt-nav__item kt-nav__item--active">
                          <a href="#" className="kt-nav__link">
                            <span className="kt-nav__link-icon">
                              <img
                                src="./assets/media/flags/020-flag.svg"
                                alt=""
                              />
                            </span>
                            <span className="kt-nav__link-text">English</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <span className="kt-nav__link-icon">
                              <img
                                src="./assets/media/flags/016-spain.svg"
                                alt=""
                              />
                            </span>
                            <span className="kt-nav__link-text">Spanish</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <span className="kt-nav__link-icon">
                              <img
                                src="./assets/media/flags/017-germany.svg"
                                alt=""
                              />
                            </span>
                            <span className="kt-nav__link-text">German</span>
                          </a>
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                  {/*end: Language bar */}
                  {/*begin: User bar */}
                  <div
                    className="kt-header__topbar-item kt-header__topbar-item--user"
                    id="kt_offcanvas_toolbar_profile_toggler_btn"
                  >
                    <div className="kt-header__topbar-welcome">Hi,</div>
                    <div className="kt-header__topbar-username">Nick</div>
                    <div className="kt-header__topbar-wrapper">
                      <img alt="Pic" src="./assets/media/users/default.jpg" />
                    </div>
                  </div>
                  {/*end: User bar */}
                </div>
                {/* end:: Header Topbar */}
              </div>
              {/* end:: Header */}
              {/* begin:: Subheader */}
              <div id="kt_subheader" className="kt-subheader kt-grid__item ">
                <div className="kt-container  kt-container--fluid ">
                  {/* begin:: Subheader Title */}
                  <div className="kt-subheader__title">
                    <button
                      className="kt-subheader__toggler kt-subheader__toggler--left"
                      id="kt_aside_toggler"
                    >
                      <span />
                    </button>
                  </div>
                  {/* end:: Subheader Title */}{" "}
                  {/* begin:: Sub-header toolbar */}
                  <div className="kt-subheader__toolbar">
                    <div className="kt-subheader__toolbar-wrapper">
                      <a
                        href="#"
                        className="btn btn-default btn-sm btn-bold btn-upper"
                      >
                        Create
                      </a>
                      <a
                        href="#"
                        className="btn btn-default btn-sm btn-bold btn-upper"
                      >
                        Update
                      </a>
                      <a
                        href="#"
                        className="btn btn-default btn-sm btn-bold btn-upper"
                      >
                        Settings
                      </a>
                      <div
                        className="dropdown dropdown-inline"
                        data-toggle="kt-tooltip"
                        title="Quick actions"
                        data-placement="top"
                      >
                        <a
                          href="#"
                          className="btn btn-icon btn btn-label btn-label-brand btn-bold"
                          data-toggle="dropdown"
                          data-offset="0,5px"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="flaticon2-add-1" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-anim">
                          <ul
                            className="kt-nav kt-nav--active-bg"
                            id="m_nav_1"
                            role="tablist"
                          >
                            <li className="kt-nav__item">
                              <a className="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-psd" />
                                <span className="kt-nav__link-text">
                                  Document
                                </span>
                              </a>
                            </li>
                            <li className="kt-nav__item">
                              <a
                                className="kt-nav__link"
                                role="tab"
                                id="m_nav_link_1"
                              >
                                <i className="kt-nav__link-icon flaticon2-supermarket" />
                                <span className="kt-nav__link-text">
                                  Message
                                </span>
                              </a>
                            </li>
                            <li className="kt-nav__item">
                              <a className="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-shopping-cart" />
                                <span className="kt-nav__link-text">
                                  Product
                                </span>
                              </a>
                            </li>
                            <li className="kt-nav__item">
                              <a
                                className="kt-nav__link"
                                role="tab"
                                id="m_nav_link_2"
                              >
                                <i className="kt-nav__link-icon flaticon2-chart2" />
                                <span className="kt-nav__link-text">
                                  Report
                                </span>
                                <span className="kt-nav__link-badge">
                                  <span className="kt-badge kt-badge--danger kt-badge--inline kt-badge--rounded">
                                    pdf
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="kt-nav__item">
                              <a className="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-sms" />
                                <span className="kt-nav__link-text">Post</span>
                              </a>
                            </li>
                            <li className="kt-nav__item">
                              <a className="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-avatar" />
                                <span className="kt-nav__link-text">
                                  Customer
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end:: Sub-header toolbar */}{" "}
                </div>
              </div>
              {/* end:: Subheader */}
              <div
                className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
                id="kt_content"
              >
                
              </div>
              {/* begin:: Footer */}
              <div className="kt-footer kt-grid__item" id="kt_footer">
                <div className="kt-container ">
                  <div className="kt-footer__copyright">
                    2018&nbsp;©&nbsp;
                    <a
                      href="http://keenthemes.com/keen"
                      target="_blank"
                      className="kt-link"
                    >
                      Keenthemes Inc
                    </a>
                  </div>
                  <div className="kt-footer__menu">
                    <a
                      href="http://keenthemes.com/keen"
                      target="_blank"
                      className="kt-link"
                    >
                      About
                    </a>
                    <a
                      href="http://keenthemes.com/keen"
                      target="_blank"
                      className="kt-link"
                    >
                      Team
                    </a>
                    <a
                      href="http://keenthemes.com/keen"
                      target="_blank"
                      className="kt-link"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              {/* end:: Footer */}{" "}
            </div>
          </div>
        </div>
        {/* end:: Page */}
        <div id="kt_scrolltop" className="kt-scrolltop">
          <i className="la la-arrow-up" />
        </div>

      </div>
    );
  }
}

export default App;
