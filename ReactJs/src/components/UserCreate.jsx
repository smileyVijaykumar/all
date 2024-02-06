import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const UserCreate = () => {
  const userCreate = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  };

  const handleSubmit = (e) => {
    e.prevantdefult();

    let payLoad = { id, name, email, phone, isActive };

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payLoad),
    })
      .then((res) => {
        toast.success("SucessFully User Created");
      })
      .catch((err) => {});
  };
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form action="" className="container">
          <div className="card">
            <div className="card-title">
              <h2>User Create</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="checkbox"
                      className="form-checked"
                      value={isActive}
                      onChange={(e) => setIsActive(e.target.value)}
                    />
                    <label htmlFor="">IsActive</label>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="submit" className="btn btn-success" />
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

export default UserCreate;
