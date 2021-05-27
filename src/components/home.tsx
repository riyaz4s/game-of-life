import React, { useState } from "react";
import { Cell } from "./cell";
import TextField from '@material-ui/core/TextField';
import { PlayArena } from "./playArena";

interface IEvent {
  target: { value: string }
}

const BOARD_UNITS = {
  ROW: 'ROW',
  COL: 'COL',
}

export const Home: React.FC = () => {
  const getBoardDimension = (unit: string): number => {
    return getInteger(localStorage.getItem(unit));
  }

  const getInteger = (x: string | null): number => {
    if(x === null) {
      return 0;
    }
    const result = parseInt(x)
    return isNaN(result) ? 0 : result;
  }

  const setBoardDimensions = (val: string, unit: string): void => {
    const intVal = getInteger(val);
    if(unit === BOARD_UNITS.ROW ) {
      setRow(intVal);
      localStorage.setItem(BOARD_UNITS.ROW, `${intVal}`);
    } else {
      setColumn(intVal);
      localStorage.setItem(BOARD_UNITS.COL, `${intVal}`);
    }
  }

  const [row, setRow] = useState<number>(getBoardDimension(BOARD_UNITS.ROW) || 4);
  const [column, setColumn] = useState<number>(getBoardDimension(BOARD_UNITS.COL) || 4);


  return (
    <div className="home-container">
      <div className="home-container__custom">
        <TextField label={"Row"} type={"tel"} value={row} onChange={({ target }: IEvent) => setBoardDimensions(target.value, BOARD_UNITS.ROW)} />
        <TextField label={"Column"} type={"tel"} value={column} onChange={({ target }: IEvent) => setBoardDimensions(target.value, BOARD_UNITS.COL)} />
      </div>
      <PlayArena row={row} column={column} />
    </div>
  )
}
