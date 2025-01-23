import React from "react";
import { useAuth } from "./Auth";

const ProfilePage = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <button
            onClick={logout}
            style={{
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>You are not logged in.</h2>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
