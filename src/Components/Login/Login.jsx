import axios from "../../API/axios";
import AuthContext from "../Context/AuthProvider";
import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async () => {
    let data = {
      username: username,
      password: password,
    };
    try {
      const res = await axios.post("/login", data);
      const accessToken = res?.data?.accessToken;
      setAuth({ username, password, accessToken });
      setUsername("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      setErrMsg("Login failed");
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        <div>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </div>
      ) : (
        <div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="username"
                ref={userRef}
                type="text"
                value={username}
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="password"
                value={password}
                type="password"
                placeholder="******************"
                required
              />
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                {errMsg}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleSubmit()}
                className="bg-blue-300 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Sign In
              </button>
              <button
                className="bg-blue-300 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                <Link to="/register">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
