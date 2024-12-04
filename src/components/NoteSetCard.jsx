import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NoteSetCard = ({ noteSet }) => {
  const navigate = useNavigate();
  const onCardClicked = () => {
    navigate(`/type/${noteSet.noteSetId}`);
  };
  return (
    <div
      className="relative bg-slate-700 p-4 rounded-lg text-white hover:cursor-pointer hover:bg-slate-800 hover:shadow-md hover:scale-105 transition-transform"
      onClick={onCardClicked}
    >
      <Link
        className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
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
