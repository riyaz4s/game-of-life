import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { IObjectType, safeSet } from "../utils/helper";
import { Board } from "./board";

interface IPlayArenaProps {
  row: number,
  column: number,
}

export const PlayArena: React.FC<IPlayArenaProps> = ({ row, column }) => {
  const [selectedStates, updateSelectedStates] = useState<IObjectType>({})
  const updateLivingStatus = (living: boolean, i: number, j: number): void => {
    safeSet(selectedStates, `${i}.${j}`, living);
    updateSelectedStates(selectedStates);
  }
  return <React.Fragment>
    {!isNaN(column * row) && (<div className="play-arena-container">
      <Board row={row} column={column} updateLivingStatus={updateLivingStatus} selectedStates={selectedStates} />
      <Button variant="contained" color="primary" type={"submit"} onClick={() => console.log('start')}>START</Button>
    </div>
    )}
  </React.Fragment>
}
