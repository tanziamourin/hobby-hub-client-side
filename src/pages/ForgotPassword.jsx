import { useLocation } from "react-router";
import { useState, useEffect } from "react";


const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    window.open("https://mail.google.com", "_blank");
  };

  useEffect(() => {
    document.title = "Forget Password | JobTrack";
  }, []);

  return (
    <section className="p-10 my-16 shadow-md rounded-lg overflow-hidden max-w-5xl mx-auto w-full flex flex-col md:flex-row">
      {/* Image Section */}
      {/* <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={forgotImg}
          alt="Forgot Password Illustration"
          className="w-full max-w-sm"
        />
      </div> */}

      {/* Form Section */}
      <div className="w-full md:w-1/2 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Reset Password
        </h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border-b-4 rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            onClick={handleReset}
            className="w-full bg-[#003366] hover:bg-[#005599] text-white p-3 rounded transition"
          >
            Reset Password
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
