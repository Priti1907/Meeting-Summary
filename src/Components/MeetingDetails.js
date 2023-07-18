import React from "react";

const MeetingDetails = () => {
  return (
    <div className="section">
       <div className="row">
      <div>
        <form className="container">
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h5>Meeting Details</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Meeting Mode*</label>
                    <select className="form-select">
                    <option>select mode</option>
                      <option>Status update meetings</option>
                      <option>Decision-making meetings</option>
                      <option>Problem-solving meetings</option>
                      <option>Team-building meetings</option>
                      <option>Info-sharing meetings</option>
                      <option>Innovation meetings</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Meeting Date*</label>
                    <input required type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Enter meeting subject*</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Meeting Date*</label>
                    <input required type="time" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Meeting Date*</label>
                    <textarea required type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
   
  );
};

export default MeetingDetails;
