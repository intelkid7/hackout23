import React from "react";

export default function Registration() {
  return (
    <div className="col-12 col-lg-9 col-xl-9">
  <div className="card shadow-2-strong card-registration" style={{borderRadius: 15}}>
    <div className="card-body p-4 p-md-5">
      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
      <form>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="form-outline">
              <input type="text" id="firstName" className="form-control form-control-lg" fdprocessedid="kmarb3" />
              <label className="form-label" htmlFor="firstName" style={{marginLeft: 0}}>First Name</label>
              <div className="form-notch"><div className="form-notch-leading" style={{width: 9}} /><div className="form-notch-middle" style={{width: '70.4px'}} /><div className="form-notch-trailing" /></div></div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="form-outline">
              <input type="text" id="lastName" className="form-control form-control-lg" fdprocessedid="o98pm" />
              <label className="form-label" htmlFor="lastName" style={{marginLeft: 0}}>Last Name</label>
              <div className="form-notch"><div className="form-notch-leading" style={{width: 9}} /><div className="form-notch-middle" style={{width: '69.6px'}} /><div className="form-notch-trailing" /></div></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 d-flex align-items-center">
            <div className="form-outline datepicker w-100">
              <input type="text" className="form-control form-control-lg" id="birthdayDate" fdprocessedid="jdl4oe" />
              <label htmlFor="birthdayDate" className="form-label" style={{marginLeft: 0}}>Birthday</label>
              <div className="form-notch"><div className="form-notch-leading" style={{width: 9}} /><div className="form-notch-middle" style={{width: '55.2px'}} /><div className="form-notch-trailing" /></div></div>
          </div>
          <div className="col-md-6 mb-4">
            <h6 className="mb-2 pb-1">Gender: </h6>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="option1" defaultChecked />
              <label className="form-check-label" htmlFor="femaleGender">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" defaultValue="option2" />
              <label className="form-check-label" htmlFor="maleGender">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" defaultValue="option3" />
              <label className="form-check-label" htmlFor="otherGender">Other</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 pb-2">
            <div className="form-outline">
              <input type="email" id="emailAddress" className="form-control form-control-lg" fdprocessedid="6qu5b4" />
              <label className="form-label" htmlFor="emailAddress" style={{marginLeft: 0}}>Email</label>
              <div className="form-notch"><div className="form-notch-leading" style={{width: 9}} /><div className="form-notch-middle" style={{width: 40}} /><div className="form-notch-trailing" /></div></div>
          </div>
          <div className="col-md-6 mb-4 pb-2">
            <div className="form-outline">
              <input type="tel" id="phoneNumber" className="form-control form-control-lg" fdprocessedid="zdks1d" />
              <label className="form-label" htmlFor="phoneNumber" style={{marginLeft: 0}}>Phone Number</label>
              <div className="form-notch"><div className="form-notch-leading" style={{width: 9}} /><div className="form-notch-middle" style={{width: '92.8px'}} /><div className="form-notch-trailing" /></div></div>
          </div>
        </div>
        <div className="mt-4 pt-2">
          <input className="btn btn-primary btn-lg" type="submit" defaultValue="Submit" fdprocessedid="6e5q1" />
        </div>
      </form>
    </div>
  </div>
</div>

  );
}
