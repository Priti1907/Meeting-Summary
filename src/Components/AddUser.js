import React from "react";

const AddUser = () => {
  return (
    <div className="row">
      <div>
        <form className="container">
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h5>Add Users who need to be part of this MOM</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Choose Admin*</label>
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
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Attendees List*</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        Enter here
                        <i class="fa fa-search"></i>
                      </span>
                    </div>
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
                          class="bi bi-person-plus-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fill-rule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                        <span class="bi bi-file-pdf"></span>{" "}
                        Quote.pdf <span class="bi bi-file-pdf"></span>
                        <button
                          type="button"
                          class="btn-close"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </pre>
                    </button>{" "}
                    <button type="button">
                      <pre>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-person-plus-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fill-rule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                        <span class="bi bi-file-pdf"></span>{" "}
                        Quote.pdf <span class="bi bi-file-pdf"></span>
                        <button
                          type="button"
                          class="btn-close"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </pre>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>E-mail*</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          Search People here
                          <i class="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button type="button">
                    <pre>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>{" "}
                      <span class="bi bi-file-pdf"></span>
                      Quote.pdf <span class="bi bi-file-pdf"></span>
                      <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </pre>
                  </button>{" "}
                  <button type="button">
                    <pre>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>{" "}
                      <span class="bi bi-file-pdf"></span>
                      Quote.pdf <span class="bi bi-file-pdf"></span>
                      <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </pre>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
