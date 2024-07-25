import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addMatch} from "../redux/actions"

export const AddMatch = () => {
  // state for creating a match
  const [isOpen, setIsOpen] = useState(false);
  const [nom_de_terrain, setNomTerrain] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [date, setTime] = useState("");
  const [prix, setPrix] = useState("")
  const [nombre_de_joueur, setPlayers] = useState("");

  //Save match in database
  const dispatch=useDispatch()
  const addNewMatch =()=>{
    const newMatch={
      nom_de_terrain,localisation,date,nombre_de_joueur,prix
    }
    dispatch(addMatch(newMatch))
    setIsOpen(!isOpen)

  }
  return (
    <>
        {/* modal for creating a game */}
        <header>
          <button onClick={() => setIsOpen(true)}>Creé un match</button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} addNewMatch={addNewMatch} >
            <div className="creeUnMatch">
              <input
              className="creeMatchInputs"
                placeholder="Nom du terrain"
                onChange={(e) => setNomTerrain(e.target.value)}
              ></input>
              <input
                className="creeMatchInputs"
                placeholder="Localisation"
                onChange={(e) => setLocalisation(e.target.value)}
              ></input>
              <div>
                <input
                  type="datetime-local"
                  onChange={(e) => setTime(e.target.value)}
                />
                <label>Nombre de Joueur: </label>
                <input
                  type="number"
                  style={{ width: "40px" }}
                  onChange={(e) => setPlayers(e.target.value)}
                ></input>
                 <label>Prix par personne: </label>
                <input
                  type="number"
                  style={{ width: "40px" }}
                  onChange={(e) => setPrix(e.target.value)}
                ></input>
              </div>
            </div>
          </Modal>
        </header>


    </>
  );
};
