import React from "react";
import NoteSetsView from "../components/NoteSetsView";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../state/AuthContext";
import { Link } from "react-router-dom";
import useNoteSets from "../state/useNoteSets";

const Home = () => {
  const user = useAuth();
  const noteSets = useNoteSets();

  if (user.currentUser === null) {
    return (
      <div className="flex flex-col justify-center align-middle h-full">
        <div className="text-center text-white bg-primary text-2xl p-5">
          Please Sign in to view your notes
          <Link
            className="block text-xl bg-secondary-light text-black mx-auto w-fit p-2 rounded-md mt-4 hover:scale-105 hover:shadow-lg transition-transform"
            to="/login"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start align-middle text-center gap-8">
      <button
        className="self-start bg-primary p-2 m-2 rounded-full text-white hover:scale-105 transform transition-all duration-200"
        onClick={() => {
          signOut(auth);
        }}
      >
        Sign Out
      </button>
      <h1 className="mt-12 text-5xl font-bold">
        Hello,{" "}
        <span className="text-primary">
          {user.currentUser ? user.currentUser.displayName : ""}
        </span>
      </h1>
      <NoteSetsView noteSets={noteSets} />
    </div>
  );
};

export default Home;
