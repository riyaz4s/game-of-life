import React, { useState } from "react";
import { IObjectType, safeGet } from "../utils/helper";
import { Cell } from "./cell";

interface IBoardProps {
  row: number,
  column: number,
  selectedStates: IObjectType,
  updateLivingStatus: (living: boolean, i: number, j: number) => void 
}

export const Board: React.FC<IBoardProps> = ({ row, column, selectedStates, updateLivingStatus }) => {
  return <div className="board-container">
      {
        <div className="board-container__board-column">
          {[...Array(row)].map((el, i) => {
            return <div key={`row${i}`} className="board-container__board-row">
              {[...Array(column)].map((el, j) => {
                const status = Boolean(safeGet(selectedStates, `${i}.${j}`));
                return (<Cell
                  key={`${i}${j}`}
                  row={1}
                  column={1}
                  isLiving={status}
                  cellStyle={{}}
                  onClick={(living) => updateLivingStatus(living, i, j)}
                />)
              })}
            </div>
          })}
        </div>
      }
    </div>
}
