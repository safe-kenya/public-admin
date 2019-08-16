import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div
        id="kt_header"
        className="kt-header kt-grid__item kt-grid kt-grid--ver  kt-header--fixed "
      >
        {/* begin:: Brand */}
        <div className="kt-header__brand   kt-grid__item" id="kt_header_brand">
          <a href="demo5/index.html">
            <img
              alt="Logo"
              style={{ width: 150 }}
              src="./assets/media/logos/logo-v2.png"
            />
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
              />
              <li
                className="kt-menu__item  kt-menu__item--submenu kt-menu__item--rel"
                data-ktmenu-submenu-toggle="click"
                aria-haspopup="true"
              >
                <a
                  href="javascript:;"
                  className="kt-menu__link kt-menu__toggle"
                >
                  <span className="kt-menu__link-text">Students</span>
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
                        <span className="kt-menu__link-text">Widgets</span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a
                              href="demo5/components/widgets/charts.html"
                              className="kt-menu__link "
                            >
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">Charts</span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
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
                  <span className="kt-menu__link-text">Parents</span>
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
                        <span className="kt-menu__link-text">Widgets</span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a
                              href="demo5/components/widgets/charts.html"
                              className="kt-menu__link "
                            >
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">Charts</span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
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
                  <span className="kt-menu__link-text">Drivers</span>
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
                        <span className="kt-menu__link-text">Widgets</span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a
                              href="demo5/components/widgets/charts.html"
                              className="kt-menu__link "
                            >
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">Charts</span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
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
                  <span className="kt-menu__link-text">Busses</span>
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
                        <span className="kt-menu__link-text">Widgets</span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a
                              href="demo5/components/widgets/charts.html"
                              className="kt-menu__link "
                            >
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">Charts</span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
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
                  <span className="kt-menu__link-text">Routes</span>
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
                        <span className="kt-menu__link-text">Widgets</span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a
                              href="demo5/components/widgets/charts.html"
                              className="kt-menu__link "
                            >
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">Charts</span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
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
                  <span className="kt-menu__link-text">PickUp and DropOff</span>
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
                        <span className="kt-menu__link-text">Widgets</span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a
                              href="demo5/components/widgets/charts.html"
                              className="kt-menu__link "
                            >
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">Charts</span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
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
                  <span className="kt-menu__link-text">Reports</span>
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
                        <span className="kt-menu__link-text">Widgets</span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a
                              href="demo5/components/widgets/charts.html"
                              className="kt-menu__link "
                            >
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">Charts</span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
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
                  <span className="kt-menu__link-text">SMS & Email Communication</span>
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
                        <span className="kt-menu__link-text">Widgets</span>
                        <i className="kt-menu__hor-arrow la la-angle-right" />
                        <i className="kt-menu__ver-arrow la la-angle-right" />
                      </a>
                      <div className="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--right">
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a
                              href="demo5/components/widgets/charts.html"
                              className="kt-menu__link "
                            >
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">Charts</span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
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
