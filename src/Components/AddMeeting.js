import React from "react";
import { BsPlus } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.css";


const AddMeeting = () => {

  return (
    <div className="row">
      <div>
        <form className="container">
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h5>Meeting Inputs</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="user-list">
                      <label htmlFor="search">Add Inputs</label>
                      <br />
                      <button type="button" class="btn btn-primary ">
                        Information(I){" "}
                      </button>{" "}
                      <button type="button" class="btn btn-primary">
                        Decision(D)
                      </button>{" "}
                      <button type="button" class="btn btn-primary">
                        Task(T)
                      </button>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Enter Description*</label>
                          <textarea
                            required
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <br />
                      <div>
                        <input
                          type="file"
                          id="file-input"
                          style={{ display: "none" }}
                        />
                        <button
                          variant="primary"
                          onClick={() => {
                            document.getElementById("file-input").click();
                          }}
                        >
                          <BsPlus />
                        </button>{" "}
                        Upload File
                        <button style={{ float: "right" }}>Add</button>
                      </div>
                      <br />
                      <div>
                        {/* <i class="bi bi-download"></i> */}
                        <button type="button">
                          <pre>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-download"
                              viewBox="0 0 16 16"
                            >
                              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>{" "}
                            <span class="bi bi-file-pdf"></span>
                            Quote.pdf <span class="bi bi-file-pdf"></span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-x-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </pre>
                        </button>{" "}
                        <button type="button">
                          <pre>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-download"
                              viewBox="0 0 16 16"
                            >
                              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>{" "}
                            <span class="bi bi-file-pdf"></span>
                            Quote.pdf <span class="bi bi-file-pdf"></span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-x-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </pre>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div class="form-group">
                    <label
                      className="form-label"
                      htmlFor="datatable-search-input"
                    >
                      Attendees List*
                    </label>
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Enter here"
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label
                      className="form-label"
                      htmlFor="datatable-search-input"
                    >
                      Attendees List*
                    </label>
                    <select className="form-select">
                      <option>select </option>
                      <option>Status update meetings</option>
                      <option>Decision-making meetings</option>
                      <option>Problem-solving meetings</option>
                      <option>Team-building meetings</option>
                      <option>Info-sharing meetings</option>
                      <option>Innovation meetings</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMeeting;
