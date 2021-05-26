import React from "react";
import { Cell } from "./cell";

interface BoardProps {
  row: number,
  column: number,
}
export const Board: React.FC<BoardProps> = ({ row = 4, column = 4 }) => {
  const getMatrixIndexWithStatus = (living: boolean, i: number, j: number): void => {
    const result = {
      living,
      i,
      j
    }
    console.log(result);
  }
  return <React.Fragment>
    {!isNaN(column * row) && (<div className="board-container">
      {
        <div className="board-container__board-column">
          {[...Array(column)].map((el, i) => {
            return <div className="board-container__board-row">
              {[...Array(row)].map((el, j) => {
                return (<Cell
                  key={`${i}${j}`}
                  row={1}
                  column={1}
                  isLiving={false}
                  cellStyle={{}}
                  onClick={(living) => getMatrixIndexWithStatus(living, i, j)}
                />)
              })}
            </div>
          })}
        </div>
      }
    </div>)}
  </React.Fragment>
}
