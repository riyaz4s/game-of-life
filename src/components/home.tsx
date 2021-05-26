import React, { useState } from "react";
import { Cell } from "./cell";
import TextField from '@material-ui/core/TextField';
import { Board } from "./board";

interface Event {
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
        <TextField label={"Row"} type={"tel"} value={row} onChange={({ target }: Event) => setRow(getInteger(target.value))} />
        <TextField label={"Column"} type={"tel"} value={column} onChange={({ target }: Event) => setColumn(getInteger(target.value))} />
      </div>
      <Board row={row} column={column} />
    </div>
  )
}
