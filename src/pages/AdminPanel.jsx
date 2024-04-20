import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminPanel() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(window.location.reload())
      .catch((error) => console.log("Error deleting user", error));
  };
  return (
    <>
      <div className="container">
        <h1>Admin Panel</h1>
        <Link to={"/add"} className="btn btn-success my-2">
          Add
        </Link>

        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Car Name</th>
              <th>Car Brand</th>
              <th>Type</th>
              <th>Transmission</th>
              <th>Fuel</th>
              <th>Seating</th>
              <th>Price</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr className="text-dark" key={index}>
                <td> {user.id} </td>
                <td> {user.name} </td>
                <td> {user.brand} </td>
                <td> {user.type} </td>
                <td> {user.transmission} </td>
                <td> {user.fuel} </td>
                <td> {user.seating} </td>
                <td> {user.price}/hr </td>
                <td> {user.city} </td>
                <td>
                  <Link
                    to={`/update/${user.id}`}
                    className="mx-1 btn btn-warning"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="mx-1 btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPanel;
