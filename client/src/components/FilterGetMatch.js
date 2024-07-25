import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getMatchs } from "../redux/actions";
import { MatchList } from "./MatchList";

function FilterGetMatch() {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    localisation: "",
    prix: "",
    nombre_de_joueur: "",
    nom_de_terrain: "",
  });
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getMatchs(filters));
  }, [dispatch, filters]);

  const matchState = useSelector((state) => state.matchs);
  
  console.log(matchState)

  return (
    <>
    <header className="filter">
      <input
        placeholder="Nom de terrain"
        name="nom_de_terrain"
        value={filters.nom_de_terrain}
        onChange={handleChange}
      />
      <input
        placeholder="Localisation"
        name="localisation"
        value={filters.localisation}
        onChange={handleChange}
      />
      <div>
        <label>Nombre de joueur: </label>
        <input
          type="number"
          name="nombre_de_joueur"
          value={filters.nombre_de_joueur}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Prix: </label>
        <input
          type="number"
          name="prix"
          value={filters.prix}
          onChange={handleChange}
        />
      </div>
      </header>

      <body className="creeUnMatch">
          <MatchList matchState ={matchState}/>  
      </body>   
    </>
  );
}

export default FilterGetMatch;
