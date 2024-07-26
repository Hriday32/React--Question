import React, { useState } from "react";

const Question14 = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isregistered, setisregistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setusers] = useState([]);

  const handleAuthentication = () => {
    if (isregistered) {
      if (isregistered) {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          setIsLoggedIn(true);
        } else {
          alert("Login failed. Please check your credential");
        }
      }
    } else {
      const newUser = { email, password };
      setusers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setemail("");
    setpassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome,{email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isregistered ? "Login" : "Register"}</h2>
          <form action="">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>
              {isregistered ? "Login" : "Register"}
            </button>
          </form>
          <p>
            {isregistered
              ? "Dont have an account? Register now"
              : "Already have an account? Log in!"}
          </p>
          <button onClick={() => setisregistered(!isregistered)}>
            {isregistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Question14;
