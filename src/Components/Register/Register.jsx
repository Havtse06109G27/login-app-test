import axios from "axios";
import React, { useState } from "react";
import "../../App.css";

function Register() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [level, setLevel] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = () => {
    let data = {
      username: username,
      fullname: fullname,
      password: password,
      email: email,
      phonenumber: phonenumber,
      level: level,
      salary_per_hour: salary,
    };
    axios
      .post("https://demo-heroku--12.herokuapp.com/api/v1/register", data)
      .then((res) => {})
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="fullname"
          >
            Fullname
          </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="fullname"
            type="text"
            placeholder="Enter your fullnamme"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="phonenumber"
          >
            Phone number
          </label>
          <input
            onChange={(e) => setPhonenumber(e.target.value)}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="phonenumber"
            type="text"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="level"
          >
            Level
          </label>
          <input
            onChange={(e) => setLevel(e.target.value)}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="level"
            type="text"
            placeholder="Enter your level"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="salary"
          >
            Salary per hour
          </label>
          <input
            onChange={(e) => setSalary(e.target.value)}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="salary"
            type="number"
            placeholder="Enter your salary per hour"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleSubmit()}
            className="bg-blue-300 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
