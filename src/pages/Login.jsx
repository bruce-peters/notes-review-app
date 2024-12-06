import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in", user);
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center">
      {isLogin ? (
        <div className="mx-auto bg-white p-3 rounded-md shadow-xl text-lg text-center flex flex-col align-middle justify-center">
          <h2 className="text-xl font-bold">Login</h2>
          <form onSubmit={handleEmailLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              type="submit"
              className="mt-3 bg-blue-500 text-white p-2 rounded"
            >
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="mt-3 bg-blue-500 text-white p-2 rounded"
          >
            Login with Google
          </button>
          <button
            className="self-end mt-4"
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Register
          </button>
        </div>
      ) : (
        <div className="mx-auto bg-white p-3 rounded-md shadow-xl text-lg text-center flex flex-col align-middle justify-center">
          <h2 className="text-xl font-bold mt-5">Register</h2>
          <form onSubmit={handleRegister}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              type="submit"
              className="mt-3 bg-blue-500 text-white p-2 rounded"
            >
              Register
            </button>
          </form>
          <button
            className="self-end mt-4"
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
