import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import { Toast } from "@/app/components/shared/ToastNotification";

interface User {
  id: number;
  fullName: string;
  email: string;
  role: "admin" | "member";
  status: "Active" | "Pending" | "Inactive";
  eventsAttended?: number;
}

interface UseAuthReturn {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  toast: Toast | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  clearToast: () => void;
}

export function useAuth(): UseAuthReturn {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState<Toast | null>(null);

  // Clear toast function
  const clearToast = () => {
    setToast(null);
  };

  // Fetch user data from backend
  const fetchUser = async () => {
    try {
      const authToken = Cookies.get("authToken");

      if (!authToken) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      const res = await axios.get("http://localhost:4000/api/users/me", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        withCredentials: true,
      });

      if (res.status !== 200) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      const userData = res.data.user;
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
      Cookies.remove("authToken");
    } finally {
      setIsLoading(false);
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );

      if (res.status !== 200) {
        setToast({
          type: "error",
          message: res.data.message || "Invalid email or password.",
        });
        setIsLoading(false);
        return;
      }

      const { token, user } = res.data;

      // Store token in cookie
      Cookies.set("authToken", token, { expires: 7 });
      setUser(user);

      setToast({
        type: "success",
        message: "Login successful! Redirecting...",
      });

      // Redirect after a short delay to show success message
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error: any) {
      console.error("Login error:", error);
      setToast({
        type: "error",
        message: error.response?.data?.message || "Login failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      const authToken = Cookies.get("authToken");

      await axios.post(
        "http://localhost:4000/api/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          withCredentials: true,
        }
      );

      setToast({
        type: "success",
        message: "Logged out successfully!",
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear cookie and user state
      Cookies.remove("authToken");
      setUser(null);
      router.push("/login");
    }
  };

  // Refresh user data
  const refreshUser = async () => {
    setIsLoading(true);
    await fetchUser();
  };

  // Fetch user on mount
  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    toast,
    login,
    logout,
    refreshUser,
    clearToast,
  };
}
