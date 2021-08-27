import React from "react";
import { NavLink } from "react-router-dom";
const logo = require("../../assets/images/medical_2.png");

export const Navbar = (props) => {
  return (
    <header>
      <NavLink to="/admin" className="navbar-brand align-items-center">
        <img alt="Logo" src={logo.default} />
        <span className="pl-5 text-bold">Pharmacy Management System</span>
      </NavLink>
      <nav>
        {/* <li>
          <NavLink to="/admins/login">Login</NavLink>
        </li> */}

        <li>
          <div className="current-user">
            <div className="profile-img">
              <img
                src="https://scontent.fisb4-1.fna.fbcdn.net/v/t1.6435-9/156586467_3710589252381280_2977015662694440434_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEHbMOhhhf8RkTqa-S7VBb-7SNP7s08hBLtI0_uzTyEEpgRIzfWZ_KGRqjYHehp_gUbFn5s4cl3B886JhZkfTkw&_nc_ohc=tVGgGq-SAogAX85Rn7a&tn=mU90shySKo0X-krX&_nc_ht=scontent.fisb4-1.fna&oh=b33a4a651cd48ee1b6821ae737cbf34c&oe=60F43195"
                alt="user-img"
              />
            </div>
            <div>Muhammad Ruvaid</div>
            <i className="fa fa-chevron-down"></i>
          </div>
          <div className="options">
            <div className="option">Log out</div>
          </div>
        </li>
      </nav>
    </header>
  );
};
