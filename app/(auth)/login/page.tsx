"use client";

import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import ToastNotification from "@/app/components/shared/ToastNotification";
import { useAuth } from "@/lib/hooks/useAuth";

interface LoginFormState {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login, toast, clearToast } = useAuth();

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
    } catch (err) {
      console.error("Error logging in:", err);
      setError("A server error occurred. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    // Global Container: Same background gradient as InvitationPage.tsx
    <div
      className="
                min-h-screen flex flex-col items-center justify-center 
                bg-gradient-to-br from-blue-50 to-blue-100 
                dark:from-gray-900 dark:to-gray-800
                px-4 py-8
            "
    >
      {/* Login Card: Same shadow, border, and background as InvitationPage.tsx */}
      <div
        className="
                    w-full max-w-md 
                    bg-white dark:bg-gray-900 
                    p-8 rounded-xl shadow-xl border 
                    border-gray-200 dark:border-gray-700
                "
      >
        {/* Logo/Header Section */}
        <div className="text-center mb-8">
          {/* Placeholder for Logo (styled similarly to Lottie placeholder) */}
          <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-blue-100 dark:bg-gray-700 border-4 border-blue-400 dark:border-blue-600 flex items-center justify-center text-blue-600 dark:text-blue-400 text-3xl font-bold">
            💻
          </div>
          <h1 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">Sign In</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Please enter your credentials to access your account.
          </p>
        </div>

        {error && (
          <p className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 text-sm rounded-lg border border-red-300 dark:border-red-700 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                                w-full pl-12 pr-4 py-3 border rounded-md
                                bg-gray-50 dark:bg-gray-800 
                                text-gray-900 dark:text-gray-100 
                                border-gray-300 dark:border-gray-600
                                focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 
                                outline-none transition
                            "
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="
                                w-full pl-12 pr-12 py-3 border rounded-md
                                bg-gray-50 dark:bg-gray-800 
                                text-gray-900 dark:text-gray-100 
                                border-gray-300 dark:border-gray-600
                                focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 
                                outline-none transition
                            "
            />
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-blue-500 transition"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Forgot Password Link (Styled to match the other links) */}
          <div className="flex justify-end text-sm pt-1">
            <a
              href="/forgot-password"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition duration-150"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button: Same primary blue button style as InvitationPage.tsx */}
          <button
            type="submit"
            disabled={isLoading}
            className="
                            bg-blue-600 dark:bg-blue-700 
                            text-white py-2 rounded-md font-semibold
                            hover:bg-blue-700 dark:hover:bg-blue-800 
                            transition
                            disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed
                        "
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Links: Register and Contact Us */}
        <div className="mt-6 text-center space-y-2">
          <a href="/register" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
            Don’t have an account? Register
          </a>
          <br />
          <a
            href="/contact-us"
            className="text-gray-700 dark:text-gray-300 hover:underline text-sm"
          >
            Need assistance? Contact us
          </a>
        </div>
      </div>
      {toast && (
        <ToastNotification type={toast.type} message={toast.message} onClose={clearToast} />
      )}
    </div>
  );
};

export default Login;
