import React, { useState, useEffect } from "react";
import userSevice from "../service/user.sevice.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function ListUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    userSevice
      .getAll()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);
  return (
    <div>
      <h3> List user </h3>
      <Link to="create" className="btn btn-outline-primary">
        Create New User
      </Link>
      <br />
      <div>
        <table className="table table-bordered table-striped table-dark">
          <thead>
            <tr>
              <td> Name </td> 
              <td> Email </td> 
              <td> Phone </td>
              <td> Action </td>
            </tr>
          </thead>
          <tbody>
            
            {user.map((user) => (
              <tr key={user.user_id}>
                <td> {user.user_name} </td> <td> {user.user_email} </td>
                <td> {user.user_phone} </td>
                <td>
                  <Link className="btn btn-info" to={`/user/updated/${user.user_id}`}>Updated</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
