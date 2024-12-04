import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NoteSetCard = ({ noteSet }) => {
  const navigate = useNavigate();
  const onCardClicked = () => {
    navigate(`/type/${noteSet.noteSetId}`);
  };
  return (
    <div
      className="relative bg-slate-700 p-4 rounded-lg text-white hover:cursor-pointer hover:bg-slate-800 hover:shadow-md hover:scale-105 transition-transform group"
      onClick={onCardClicked}
    >
      <Link
        className="absolute top-1 right-1 bg-blue-500 text-white text-sm shadow-md p-1 rounded opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-opacity"
        to={"/edit/" + noteSet.noteSetId}
        onClick={(e) => e.stopPropagation()}
      >
        Edit
      </Link>
      <div className="text-xl font-bold">{noteSet.noteSetName}</div>
      <div className="text-lg">{noteSet.noteSetId}</div>
    </div>
  );
};

export default NoteSetCard;
