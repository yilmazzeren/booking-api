import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="h-7 p-4 border-2"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="h-7 p-4 border-2"
        />
        <button
          disabled={loading}
          className="border-none py-2 px-6 bg-blue-400 text-white font-bold cursor-pointer rounded-md disabled:bg-green-600 disabled:cursor-not-allowed"
          onClick={handleClick}
        >
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
}
