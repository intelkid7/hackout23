import React, {useState} from "react";

export default function Patient_dia() {

  const [keyword, setKeyword] = useState("")

  const [result, setResult] = useState([])

  const fetchSymptoms = async () => {

    const res = axios.get(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/search/${keyword}`)

    console.log(res.data)

    setResult(res.data)
  }

  return (
    <section id="pdiv" className="h-100 h-custom gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: 15 }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h3
                        id="pi"
                        className="mb-5"
                      >
                        Patient Infomation
                      </h3>
                      <div className="row">
                        <h5 id="pihead" className="col-md-6 pt-4 pb-2">Name
                          <p id="pip">John Lallu</p></h5>
                        <h5 id="pihead" className="col-md-6 pt-4 pb-2">Age
                          <p id="pip">29</p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">ABHA Number
                          <p id="pip">XX-XXXX-XXXX-XXXX</p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">D.O.B.
                          <p id="pip">14-09-2000</p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">Gender
                          <p id="pip">Male</p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">Address
                          <p id="pip">John Lallu</p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">Contact
                          <p id="pip">9678963452</p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">Upcoming Appointments
                          <p id="pip">No Appointments</p></h5>
                        <h5 id="pihead" className="col-md-12 py-4 pb-2">Medical History
                          <p id="pip">Drinking plenty of alcohol and smoking constantly without listening to anyone
                            The doctors have given up and can't do anything. His visits are just for hospital's financial benefit</p></h5>
                      </div>
                    </div>
                  </div>
                  <div id="pdiv2" className="col-lg-6">
                    <div className="p-5">
                      <div id="psearch">
                        <input placeholder="Search and add symptoms" type="text" name="search" id="symps" />
                      </div>
                      <div className="form-check d-flex justify-content-start mb-4 pb-3">
                        <input
                          className="form-check-input me-3"
                          type="checkbox"
                          defaultValue
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label text-white"
                          htmlFor="form2Example3"
                        >
                          I do accept the{" "}
                          <a href="#!" className="text-white">
                            <u>Terms and Conditions</u>
                          </a>{" "}
                          of your site.
                        </label>
                        {/* <div className='result-list'>
                          <div>A</div>
                          <div>B</div>
                          <div>A</div>
                        </div> */}
                      </div>
                      <button
                        type="submit"
                        id="pres"
                        className="btn btn-light btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Generate Prescription
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
