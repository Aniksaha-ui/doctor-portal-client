import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ShowUser from "./ShowUser";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:4000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-2xl text-center">Number of User - {users.length}</h3>

      <div class="overflow-x-auto mt-5">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <ShowUser user={user} refetch={refetch} key={user._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
