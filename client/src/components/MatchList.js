import React from "react";
import { MatchCard } from "./MatchCard";


export const MatchList = ({matchState}) => {
  // //map the array of matchs and send it to match Card
  const matchs = matchState.matchs 
  console.log(matchs)
  return <>{matchs && matchs.map((match)=>(<MatchCard match={match} />))}</>;
 
};

// User give him the key 