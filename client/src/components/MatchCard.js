import React from "react";
import { useDispatch } from "react-redux";
import { deleteMatch } from "../redux/actions";
import { useSelector } from "react-redux";

export const MatchCard = ({ match }) => {
  const user = useSelector((state) => state.user);

  //deleting match
  const dispatch = useDispatch();
  const deletee = () => {
    dispatch(deleteMatch(match._id));
  };
  // Change date js to normal date
  function formatDate() {
    const date = new Date(`${match.date}`);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${month}-${day} ${hours}:${minutes}`;
  }
  const formattedDate = formatDate(`${match.date}`);

  return (
    <>
      {/* Card for match structure */}
      <div className="cardSpace">
        <div className="card">
          <h1>{match.localisation}</h1>
          <p>Nom de terrain:{match.nom_de_terrain}</p>
          <p>Date: {formattedDate}</p>
          <p>Capitaine: {match.organisateur}</p>
          <p>{match.prix}Dtn</p>
          <button>Jouer</button>
          {/*Option Delete only for admin */}
          {user.isAdmin ? <button onClick={deletee}>Delete</button>: <p></p>}
        </div>
      </div>
    </>
  );
};
