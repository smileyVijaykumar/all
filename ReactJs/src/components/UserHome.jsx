import React from "react";
import { Link, Navigate } from "react-router-dom";

const UserHome = () => {
  // ! Single user details

  const loadDetails = (id) => {
    Navigate("/details/" + id);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-title" style={{ textAlign: "center" }}>
          Users List
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/create" className="btn btn-sucess mb-4"></Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>phone</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
