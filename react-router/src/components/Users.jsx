import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active"

  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet />
      <button onClick={() => setSearchParams({filter: "active"})} >Active users</button>
      <button onClick={() => setSearchParams({})} >Reset Filter</button>
    {
    showActiveUsers ? <h1>Showing Active Users</h1> : <h2>Showing all users</h2>
        
      
    }
    </div>
  );
};

export default Users;
