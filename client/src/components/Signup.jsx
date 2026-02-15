import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {

     const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/auth/signup`,
  form
);


      alert("Signup successful");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // save token
      localStorage.setItem("token", res.data.token);

      navigate("/chat");

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">

      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-6 rounded text-white w-80"
      >

        <h2 className="text-2xl mb-4">Signup</h2>

        <input
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-3 text-black"
          onChange={handleChange}
        />

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

        <button className="bg-blue-500 w-full p-2">
          Signup
        </button>

        <p className="mt-3">
          Already have account?
          <Link to="/" className="text-blue-400"> Login</Link>
        </p>

      </form>

    </div>
  );
}
