import React, { useState } from "react";
import data from "./api/data.json";

const UserAccess = () => {
  const [searchFilter, setSearchFilter] = useState("");

  const filterProducts = (users, searchValue) => {
    return users.filter((user) =>
      user.empname.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const calculateTotalRevenue = (products) => {
    return products.reduce((total, product) => total + product.sold, 0);
  };

  const handleInpVal = (searchValue) => {
    setSearchFilter(searchValue);
  };

  const filteredProducts = filterProducts(data.users, searchFilter);
  const totalRevenue = calculateTotalRevenue(filteredProducts);

  return (
    <div className="row">
      <div>
        <form className="container">
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h5>User Access</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="user-list">
                      <label className="form-label" htmlFor="datatable-search-input">
                        Search
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="search"
                          className="form-control"
                          id="datatable-search-input"
                          onChange={(e) => handleInpVal(e.target.value)}
                          value={searchFilter}
                          placeholder="Search People here"
                        />
                      </div>
                      {filteredProducts.length === 0 ? (
                        <p>No results found.</p>
                      ) : (
                        <table className="table table-bordered">
                          <thead>
                            <tr className="bg-info text-dark">
                              <th scope="col">EMP.no</th>
                              <th scope="col">EMP Name</th>
                              <th scope="col">Role</th>
                              <th scope="col">Provide Access To</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredProducts.map((user) => {
                              return (
                                <tr key={user.index}>
                                  <td>{user.empno}</td>
                                  <td>{user.empname}</td>
                                  <td>{user.role}</td>
                                  <td>
                                    <select className="form">
                                      <option>select</option>
                                      <option>Status update meetings</option>
                                      <option>Problem-solving meetings</option>
                                      <option>Team-building meetings</option>
                                      <option>Innovation meetings</option>
                                    </select>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      )}
                    </div>
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

export default UserAccess;
