import React from "react";
import { Link } from "react-router-dom";
import app from "../scripts.bundle"

class Navbar extends React.Component {
  componentDidMount() {
    // window.KTLayout.init();
    app.init()
  }
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
          <Link to="/home">
            <img
              alt="Logo"
              style={{ width: 150 }}
              src="/assets/media/logos/logo-v4.png"
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
              >
                <Link to="/home" className="kt-menu__link">
                  <span className="kt-menu__link-text">Dashboard</span>
                </Link>
              </li>


              <li
                className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                data-ktmenu-submenu-toggle="click"
                aria-haspopup="true"
              >
                <Link to="/trips/all" className="kt-menu__link">
                  <span className="kt-menu__link-text">Reports</span>
                </Link>
              </li>

              <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a href="javascript:;" className="kt-menu__link kt-menu__toggle"><span className="kt-menu__link-text">Data</span><i className="kt-menu__hor-arrow la la-angle-down" /><i className="kt-menu__ver-arrow la la-angle-right" /></a>
                <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                  <ul className="kt-menu__subnav">

                    <li className="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                      <Link to="/students" className="kt-menu__link">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          <span className="kt-menu__link-text">Students</span>
                        </span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </Link>
                    </li>
                    <li className="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                      <Link to="/parents" className="kt-menu__link">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          <span className="kt-menu__link-text">Parents</span>
                        </span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </Link>
                    </li>
                    <li className="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                      <Link to="/drivers" className="kt-menu__link">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          <span className="kt-menu__link-text">Drivers</span>
                        </span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>


              <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a href="javascript:;" className="kt-menu__link kt-menu__toggle"><span className="kt-menu__link-text">Configurations</span><i className="kt-menu__hor-arrow la la-angle-down" /><i className="kt-menu__ver-arrow la la-angle-right" /></a>
                <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                  <ul className="kt-menu__subnav">

                    <li className="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                      <Link to="/busses" className="kt-menu__link">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          <span className="kt-menu__link-text">Buses</span>
                        </span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </Link>
                    </li>
                    <li className="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                      <Link to="/routes" className="kt-menu__link">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          <span className="kt-menu__link-text">Routes</span>
                        </span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </Link>
                    </li>
                    <li className="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                      <Link to="/schedules" className="kt-menu__link">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          <span className="kt-menu__link-text">Schedules</span>
                        </span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel" data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a href="javascript:;" className="kt-menu__link kt-menu__toggle"><span className="kt-menu__link-text">Communication</span><i className="kt-menu__hor-arrow la la-angle-down" /><i className="kt-menu__ver-arrow la la-angle-right" /></a>
                <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
                  <ul className="kt-menu__subnav">

                    <li className="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                      <Link to="/messages" className="kt-menu__link">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          <span className="kt-menu__link-text">Parent Feedback</span>
                        </span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </Link>
                    </li>
                    <li className="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
                      <Link to="/comms" className="kt-menu__link">
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">
                          <span className="kt-menu__link-text">SMS & Email</span>
                        </span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
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
