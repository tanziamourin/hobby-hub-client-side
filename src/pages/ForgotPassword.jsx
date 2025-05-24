import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    window.open("https://mail.google.com", "_blank");
    toast.success("Opening your email client...");
  };

  useEffect(() => {
    document.title = "Forgot Password | Hobby Hub";
  }, []);

  return (
    <section className="flex justify-center items-center min-h-[80vh] px-4 my-10">
      <div className="  bg-base border-b-pink-400   shadow-2xl shadow-pink-400 transition duration-300  rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row ">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 background text-white p-8">
          <h2 className="text-4xl font-bold mb-4">Hobby Hub</h2>
          <p className="text-center text-sm opacity-90">
            Need help accessing your account? We'll send a reset link.
          </p>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="p-10 w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold text-center mb-6 text">
            Forgot Password
          </h2>
          <div className="space-y-5 custom-input">
            <input
              type="email"
              placeholder="Enter your email"
              className="custom-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
            <button
              onClick={handleReset}
              className="w-full background text-white font-semibold p-3 rounded-lg hover:shadow-md transition"
            >
              Reset Password
            </button>
            <div className="text-center mt-4 text-sm">
              <button
                onClick={() => navigate("/login")}
                className="text-indigo-600 hover:underline"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
