import React from "react";

const ShowUser = (props) => {
  console.log(props);
  const { _id, email } = props.user;

  return (
    <>
      <tr>
        <th>{_id}</th>
        <td>{email}</td>
        <td>
          <button className="btn btn-xs mr-5">Make Admin</button>
          <button className="btn btn-xs">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default ShowUser;
