import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
  const { login, githubLogin } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Invalid credentials");
    }
  };

  const handleGitHub = async () => {
    try {
      await githubLogin();
      toast.success("Logged in with GitHub");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "GitHub login failed");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password", { state: { email: formData.email } });
  };

  useEffect(() => {
    document.title = "Login | Hobby Hub";
  }, []);

  return (
    <section className="flex justify-center items-center min-h-[80vh] px-4 my-10 bg-gradient-to-br ">
      <div className="shadow-xl rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row bg-white">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 background text-white p-8">
          <h2 className="text-4xl font-bold mb-4">Hobby Hub</h2>
          <p className="text-center text-sm opacity-90">
            Discover your passion. Join groups. Explore hobbies.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-10 w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-transparent text">
            Welcome Back
          </h2>
          <form onSubmit={handleLogin} className="space-y-5 custom-input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="custom-input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="custom-input"
              required
            />
            <div className="text-right text-sm">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-indigo-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full background text-white font-semibold p-3 rounded-lg hover:shadow-md transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleGitHub}
              className="w-full bg-gray-800 text-white font-semibold p-3 rounded-lg hover:bg-gray-900 transition"
            >
              Login with GitHub
            </button>
          </form>
          <div className="text-center mt-6 text-sm">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="font-medium nav-link"
            >
              Register here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
