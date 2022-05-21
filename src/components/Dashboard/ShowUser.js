import React from "react";
import { toast } from "react-toastify";

const ShowUser = ({ user, refetch }) => {
  //   console.log(props);
  const { _id, email, role } = user;

  // make admin
  const makeAdmin = () => {
    fetch(`http://localhost:4000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast("Successfully make an admin");
        }
      });
  };
  return (
    <>
      <tr>
        <th>{_id}</th>
        <td>{email}</td>
        <td>
          {role !== "admin" ? (
            <button onClick={makeAdmin} className="btn btn-xs mr-5">
              Make Admin
            </button>
          ) : (
            ""
          )}

          <button className="btn btn-xs">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default ShowUser;
