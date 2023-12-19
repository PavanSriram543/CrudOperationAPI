import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://657fee766ae0629a3f53e5b6.mockapi.io/crud", {
      name: name,
      email: email,
    });
    history("./read");
  };
  return (
    <div>
      <div className="d-flex justify-content-between m-2">
        <h1>Create users</h1>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
