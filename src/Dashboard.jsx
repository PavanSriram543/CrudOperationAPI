import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [state, setstate] = useState([]);

  const getData = () => {
    axios
      .get("https://657fee766ae0629a3f53e5b6.mockapi.io/crud")
      .then((res) => {
        setstate(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handelDelete = (id) => {
    axios
      .delete(`https://657fee766ae0629a3f53e5b6.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {state.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handelDelete(data.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to="/update">
                  <button
                    className="btn-success"
                    onClick={() =>
                      setToLocalStorage(data.id, data.name, data.email)
                    }
                  >
                    Edit{" "}
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
