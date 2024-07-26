//create an user authentaication system using useContext to manage user login and logout.
import React from "react";
import { useAuth } from "./AuthContext";

const Question24 = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <h1>User Authentication Example</h1>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => login({ username: "user12345" })}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Question24;
