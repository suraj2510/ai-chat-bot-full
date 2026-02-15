import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/auth/login`,
  form
);


      alert("Login successful");

      // ✅ ADD THESE TWO LINES HERE
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // redirect
      navigate("/chat");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">

      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-6 rounded text-white w-80"
      >

        <h2 className="text-2xl mb-4">Login</h2>

        <input
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-3 text-black"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 text-black"
          onChange={handleChange}
        />

        <button className="bg-green-500 w-full p-2">
          Login
        </button>

        <p className="mt-3">
          Don't have account?
          <Link to="/signup" className="text-blue-400"> Signup</Link>
        </p>

      </form>

    </div>
  );
}
