import React from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const params = useParams()
  const userId = params.userId
  return <div>Userdetails about {userId}</div>;
};

export default UserDetails;
