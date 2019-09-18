import React from "react";
import './login.css'
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <div>
                {/* begin:: Page */}
                <div className="kt-grid kt-grid--ver kt-grid--root">
                    <div className="kt-grid__item   kt-grid__item--fluid kt-grid  kt-grid kt-grid--hor kt-login-v2" id="kt_login_v2">
                        {/*begin::Item*/}
                        <div className="kt-grid__item  kt-grid  kt-grid--ver  kt-grid__item--fluid">
                            {/*begin::Body*/}
                            <div className="kt-login-v2__body">
                                {/*begin::Wrapper*/}
                                <div className="kt-login-v2__wrapper">
                                    <div className="kt-login-v2__container" style={{ "marginTop": "20vh" }}>
                                        <div className="kt-login-v2__title">
                                            <h3>Sign to Account</h3>
                                        </div>
                                        {/*begin::Form*/}
                                        <form className="kt-login-v2__form kt-form" action="true" autoComplete="off">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Username" name="username" autoComplete="off" />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" type="password" placeholder="Password" name="password" autoComplete="off" />
                                            </div>
                                            {/*begin::Action*/}
                                            <div className="kt-login-v2__actions">
                                                <a href="#" className="kt-link kt-link--brand">
                                                    Forgot Password ?
                            </a>
                                                <button type="button" className="btn btn-brand btn-elevate btn-pill" onClick={() => {
                                                    this.props.history.push({
                                                        pathname: '/home'
                                                    })
                                                }}>Sign In</button>
                                            </div>
                                            {/*end::Action*/}
                                        </form>
                                        {/*end::Form*/}
                                        {/*begin::Options*/}
                                        {/*end::Options*/}
                                    </div>
                                </div>
                                {/*end::Wrapper*/}
                            </div>
                            {/*begin::Body*/}
                        </div>
                        {/*end::Item*/}

                    </div>	</div>
                {/* end:: Page */}
                {/* begin:: Aside */}
                <div className="kt-aside  kt-aside--fixed " id="kt_aside">
                    <div className="kt-aside__head">
                        <h3 className="kt-aside__title">
                            Dashboard
                </h3>
                        <a href="#" className="kt-aside__close" id="kt_aside_close"><i className="flaticon2-delete" /></a>
                    </div>
                    <div className="kt-aside__body">
                        {/* begin:: Aside Menu */}
                        <div className="kt-aside-menu-wrapper" id="kt_aside_menu_wrapper">
                            <div id="kt_aside_menu" className="kt-aside-menu " data-ktmenu-vertical={1} data-ktmenu-scroll={1}>
                                <ul className="kt-menu__nav ">
                                    <li className="kt-menu__section kt-menu__section--first">
                                        <h4 className="kt-menu__section-text">My Actions</h4>
                                        <i className="kt-menu__section-icon flaticon-more-v2" />
                                    </li><li className="kt-menu__item  kt-menu__item--active" aria-haspopup="true"><a href="#" className="kt-menu__link "><span className="kt-menu__link-text">Vendors To Approve</span></a></li><li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><span className="kt-menu__link-text">Pending Vendors</span></a></li><li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" className="kt-menu__link kt-menu__toggle"><span className="kt-menu__link-text">Active Vendors</span><i className="kt-menu__ver-arrow la la-angle-right" /></a><div className="kt-menu__submenu "><span className="kt-menu__arrow" /><ul className="kt-menu__subnav"><li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span className="kt-menu__link"><span className="kt-menu__link-text">Active Vendors</span></span></li><li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span /></i><span className="kt-menu__link-text">Vendors Dashboard</span></a></li><li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span /></i><span className="kt-menu__link-text">Vendors Revenue</span></a></li><li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span /></i><span className="kt-menu__link-text">Sales Reports</span></a></li><li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span /></i><span className="kt-menu__link-text">Transactions</span></a></li><li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span /></i><span className="kt-menu__link-text">Statements</span></a></li></ul></div></li><li className="kt-menu__section ">
                                        <h4 className="kt-menu__section-text">Vendor Reports</h4>
                                        <i className="kt-menu__section-icon flaticon-more-v2" />
                                    </li><li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><span className="kt-menu__link-text">Statements</span></a></li><li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><span className="kt-menu__link-text">Transactions</span></a></li><li className="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" className="kt-menu__link kt-menu__toggle"><span className="kt-menu__link-text">Archive</span><i className="kt-menu__ver-arrow la la-angle-right" /></a><div className="kt-menu__submenu "><span className="kt-menu__arrow" /><ul className="kt-menu__subnav"><li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span className="kt-menu__link"><span className="kt-menu__link-text">Archive</span></span></li><li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span /></i><span className="kt-menu__link-text">Base</span></a></li><li className="kt-menu__item " aria-haspopup="true"><a href="#" className="kt-menu__link "><i className="kt-menu__link-bullet kt-menu__link-bullet--dot"><span /></i><span className="kt-menu__link-text">Draggable</span></a></li></ul></div></li><li className="kt-menu__item " aria-haspopup="true"><a href="javascript:;" className="kt-menu__link "><span className="kt-menu__link-text">Invoices</span></a></li>				</ul>
                            </div>
                        </div>
                        {/* end:: Aside Menu */}
                    </div>
                </div>
                {/* end:: Aside */}
            </div>
        );
    }
}

export default Login;
