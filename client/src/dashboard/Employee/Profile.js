import React from "react";

export default function Profile(props) {
  return (
    <div className="content-container profile">
      <h3>Employee Profile</h3>

      <div className="profile-info-container">
        <div className="info">
          <div className="field-group">
            <div className="field-name">Full Name</div>
            <div>Muhammad Ruvaid</div>
          </div>

          <div className="field-group">
            <div className="field-name">CNIC</div>
            <div>17301-918203123-1</div>
          </div>

          <div className="field-group">
            <div className="field-name">Number</div>
            <div>03100123</div>
          </div>

          <div className="field-group">
            <div className="field-name">Salary</div>
            <div>9000</div>
          </div>

          <div className="field-group">
            <div className="field-name">Join Date</div>
            <div>21/1/2021</div>
          </div>
        </div>
        <div className="profile-img">
          <img
            src="https://scontent.fisb4-1.fna.fbcdn.net/v/t1.6435-9/156586467_3710589252381280_2977015662694440434_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEHbMOhhhf8RkTqa-S7VBb-7SNP7s08hBLtI0_uzTyEEpgRIzfWZ_KGRqjYHehp_gUbFn5s4cl3B886JhZkfTkw&_nc_ohc=tVGgGq-SAogAX85Rn7a&tn=mU90shySKo0X-krX&_nc_ht=scontent.fisb4-1.fna&oh=b33a4a651cd48ee1b6821ae737cbf34c&oe=60F43195"
            alt="user-img"
          />
        </div>
      </div>
    </div>
  );
}
