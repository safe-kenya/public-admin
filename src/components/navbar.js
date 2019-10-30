import React from "react";
import { Link } from "react-router-dom";
import app from "../scripts.bundle"

const KTUtil = window.KTUtil
const KTOffcanvas = window.KTOffcanvas

class Navbar extends React.Component {
  componentDidMount() {
    // window.KTLayout.init();
    app.init()

    var profilePanel = KTUtil.get('kt_offcanvas_toolbar_profile');
    var head = KTUtil.find(profilePanel, '.kt-offcanvas-panel__head');
    var body = KTUtil.find(profilePanel, '.kt-offcanvas-panel__body');

    var offcanvas = new KTOffcanvas(profilePanel, {
      overlay: true,
      baseClass: 'kt-offcanvas-panel',
      closeBy: 'kt_offcanvas_toolbar_profile_close',
      toggleBy: 'kt_offcanvas_toolbar_profile_toggler_btn'
    });

    KTUtil.scrollInit(body, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function () {
        var height = parseInt(KTUtil.getViewPort().height);

        if (head) {
          height = height - parseInt(KTUtil.actualHeight(head));
          height = height - parseInt(KTUtil.css(head, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(profilePanel, 'paddingTop'));
        height = height - parseInt(KTUtil.css(profilePanel, 'paddingBottom'));

        return height;
      }
    });

  }
  state = {
    profileShowing: false,
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
              <img alt="Pic" src="https://placeimg.com/140/140/any" />
            </div>
          </div>
          {/*end: User bar */}
        </div>
        {/* end:: Header Topbar */}


        <div id="kt_header_mobile" className="kt-header-mobile  kt-header-mobile--fixed ">
          <div className="kt-header-mobile__logo">
            <Link to="/trips/all">
              <img
                alt="Logo"
                style={{ width: 150, filter: 'invert(100 %)' }}
                src="/assets/media/logos/logo-v4.png"
              />
            </Link>
          </div>
          <div className="kt-header-mobile__toolbar">
            <button className="kt-header-mobile__toolbar-toggler" id="kt_header_mobile_toggler"><span /></button>
            <button className="kt-header-mobile__toolbar-topbar-toggler" id="kt_header_mobile_topbar_toggler"><i className="flaticon-more" /></button>
          </div>
        </div>

        {/* {this.state.profileShowing ? <div className="kt-offcanvas-panel-overlay" /> : null} */}

        {/* fancy profile */}

        <div id="kt_offcanvas_toolbar_profile" className="kt-offcanvas-panel">
          <div className="kt-offcanvas-panel__head" kt-hidden-height={89} style={{}}>
            <h3 className="kt-offcanvas-panel__title">
              Profile
          </h3>
            <a href="#" className="kt-offcanvas-panel__close" id="kt_offcanvas_toolbar_profile_close"><i className="flaticon2-delete" /></a>
          </div>
          <div className="kt-offcanvas-panel__body kt-scroll ps ps--active-y" style={{ height: '500px', overflow: 'hidden' }}>
            <div className="kt-user-card-v3 kt-margin-b-30">
              <div className="kt-user-card-v3__avatar">
                <img src="https://placeimg.com/140/140/any" alt="" />
              </div>
              <div className="kt-user-card-v3__detalis">
                <a href="#" className="kt-user-card-v3__name">
                  Gathoni
              </a>
                <div className="kt-user-card-v3__desc">
                  Project Manager
              </div>
                <div className="kt-user-card-v3__info">
                  <a href="#" className="kt-user-card-v3__item">
                    <i className="flaticon-email-black-circular-button kt-font-brand" />
                    <span className="kt-user-card-v3__tag">gathoni@smartkids.com</span>
                  </a>
                  <a href="#" className="kt-user-card-v3__item">
                    <i className="flaticon-twitter-logo-button kt-font-success" />
                    <span className="kt-user-card-v3__tag">@gathoni</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', height: '500px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '300px' }} /></div></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
