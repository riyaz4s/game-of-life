import React, { useState } from "react";
import classnames from "classnames"

interface ICellProps {
  row: number,
  column: number,
  isLiving: boolean,
  cellStyle: object,
  onClick: (living: boolean) => void

}

export const Cell: React.FC<ICellProps> = ({ isLiving, onClick }) => {
  let [living, setLiving] = useState<boolean>(isLiving);
  let [prevLiving, setPrevLiving] = useState<boolean | null>(null);

  if(living !== prevLiving) {
    setLiving(living);
    setPrevLiving(living)
  }

  const toggle = () =>  {
    const newStatus = !living;
    setLiving(newStatus);
    onClick(newStatus);
  }
  return (
    <div
      className={classnames("cell-container", { "living": living }, { "dead": !living })}
      onClick={toggle}
    />
  )
}
