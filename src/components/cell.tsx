import React from "react";
import classnames from "classnames"

interface ICellProps {
  row: number,
  column: number,
  isLiving: boolean,
  cellStyle: object,
  onClick: (living: boolean) => void

}

export const Cell: React.FC<ICellProps> = ({ isLiving: living = false, onClick }) => {

  const toggle = () =>  {
    const newStatus = !living;
    onClick(newStatus);
  }
  return (
    <div
      className={classnames("cell-container", { "living": living }, { "dead": !living })}
      onClick={toggle}
    />
  )
}
