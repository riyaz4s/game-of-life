import React, { useState } from "react";
import { Cell } from "./cell";
import TextField from '@material-ui/core/TextField';
import { PlayArena } from "./playArena";

interface IEvent {
  target: { value: string }
}

export const Home: React.FC = () => {
  const [row, setRow] = useState<number>(4);
  const [column, setColumn] = useState<number>(4);

  const getInteger = (x: string): number => {
    const result = parseInt(x)
    return isNaN(result) ? 0 : result;
  }

  return (
    <div className="home-container">
      <div className="home-container__custom">
        <TextField label={"Row"} type={"tel"} value={row} onChange={({ target }: IEvent) => setRow(getInteger(target.value))} />
        <TextField label={"Column"} type={"tel"} value={column} onChange={({ target }: IEvent) => setColumn(getInteger(target.value))} />
      </div>
      <PlayArena row={row} column={column} />
    </div>
  )
}
