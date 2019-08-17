import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    busses: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
  render() {
    return (
      <div
        id="kt_header"
        className="kt-header kt-grid__item kt-grid kt-grid--ver  kt-header--fixed "
      >
        {/* begin:: Brand */}
        <div className="kt-header__brand   kt-grid__item" id="kt_header_brand">
          <Link to="/">
            <img
              alt="Logo"
              style={{ width: 150 }}
              src="./assets/media/logos/logo-v2.png"
            />
          </Link>
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
              />
              <li
                className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                data-ktmenu-submenu-toggle="click"
                aria-haspopup="true"
              >
                <Link to="/" className="kt-menu__link kt-menu__toggle">
                  <span className="kt-menu__link-text">Home</span>
                </Link>
              </li>
              <li
                className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                data-ktmenu-submenu-toggle="click"
                aria-haspopup="true"
              >
                <a
                  href='#' onClick={e => e.preventDefault()}
                  className="kt-menu__link kt-menu__toggle"
                >
                  <span className="kt-menu__link-text">
                    PickUps and DropOffs
                  </span>
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
                        href='#' onClick={e => e.preventDefault()}
                        className="kt-menu__link kt-menu__toggle"
                      >
                        <i className="kt-menu__link-icon flaticon-file-2" />
                        <span className="kt-menu__link-text">In Summary</span>
                      </a>
                    </li>
                    <li
                      className="kt-menu__item  kt-menu__item--submenu"
                      data-ktmenu-submenu-toggle="hover"
                      aria-haspopup="true"
                    >
                      <a
                        href='#' onClick={e => e.preventDefault()}
                        className="kt-menu__link kt-menu__toggle"
                      >
                        <i className="kt-menu__link-icon flaticon-folder-1" />
                        <span className="kt-menu__link-text">
                          Specific Reports
                        </span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                        <ul className="kt-menu__subnav">
                          {this.state.busses.map(bus => {
                            return (
                              <li
                                key={bus}
                                className="kt-menu__item "
                                aria-haspopup="true"
                              >
                                <Link
                                  to={"/reports/bus/" + bus}
                                  className="kt-menu__link "
                                >
                                  <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                    <span />
                                  </i>
                                  <span className="kt-menu__link-text">
                                    {"Bus " + this.state.busses.indexOf(bus)}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
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
                <Link to="/students" className="kt-menu__link kt-menu__toggle">
                  <span className="kt-menu__link-text">Students</span>
                </Link>
              </li>
              <li
                className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                data-ktmenu-submenu-toggle="click"
                aria-haspopup="true"
              >
                <Link to="/parents" className="kt-menu__link kt-menu__toggle">
                  <span className="kt-menu__link-text">Parents</span>
                </Link>
              </li>
              <li
                className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                data-ktmenu-submenu-toggle="click"
                aria-haspopup="true"
              >
                <Link to="/drivers" className="kt-menu__link kt-menu__toggle">
                  <span className="kt-menu__link-text">Drivers</span>
                </Link>
              </li>
              <li
                className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                data-ktmenu-submenu-toggle="click"
                aria-haspopup="true"
              >
                <Link to="/busses" className="kt-menu__link kt-menu__toggle">
                  <span className="kt-menu__link-text">Busses</span>
                </Link>
              </li>
              <li
                className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                data-ktmenu-submenu-toggle="click"
                aria-haspopup="true"
              >
                <Link to="/routes" className="kt-menu__link kt-menu__toggle">
                  <span className="kt-menu__link-text">Routes</span>
                </Link>
              </li>

              <li
                className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                data-ktmenu-submenu-toggle="click"
                aria-haspopup="true"
              >
                <Link
                  to="/messages"
                  href='#' onClick={e => e.preventDefault()}
                  className="kt-menu__link kt-menu__toggle"
                >
                  <span className="kt-menu__link-text">Recieved Messages</span>
                </Link>
              </li>

              <li
                className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                data-ktmenu-submenu-toggle="click"
                aria-haspopup="true"
              >
                <a
                  href='#' onClick={e => e.preventDefault()}
                  className="kt-menu__link kt-menu__toggle"
                >
                  <span className="kt-menu__link-text">
                    SMS & Email Communication
                  </span>
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
                      <Link
                        to="/comms/sms"
                        href='#' onClick={e => e.preventDefault()}
                        className="kt-menu__link kt-menu__toggle"
                      >
                        <i className="kt-menu__link-icon flaticon2-phone" />
                        <span className="kt-menu__link-text">Send SMS</span>
                      </Link>
                    </li>
                    <li
                      className="kt-menu__item  kt-menu__item--submenu"
                      data-ktmenu-submenu-toggle="hover"
                      aria-haspopup="true"
                    >
                      <Link
                        to="/comms/email"
                        className="kt-menu__link kt-menu__toggle"
                      >
                        <i className="kt-menu__link-icon flaticon-email" />
                        <span className="kt-menu__link-text">Send Email</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* end: Header Menu */} {/* begin:: Header Topbar */}
        <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
          {/*begin: User bar */}
          <div
            className="kt-header__topbar-item kt-header__topbar-item--user"
            id="kt_offcanvas_toolbar_profile_toggler_btn"
          >
            <div className="kt-header__topbar-welcome">Hi,</div>
            <div className="kt-header__topbar-username">Gathoni</div>
            <div className="kt-header__topbar-wrapper">
              <img alt="Pic" src="./assets/media/users/default.jpg" />
            </div>
          </div>
          {/*end: User bar */}
        </div>
        {/* end:: Header Topbar */}
      </div>
    );
  }
}

export default Navbar;
