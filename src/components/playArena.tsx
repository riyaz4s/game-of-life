import { Button, Slider } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { getNextGeneration, IObjectType, safeSet } from "../utils/helper";
import { Board } from "./board";

interface IPlayArenaProps {
  row: number,
  column: number,
}

const DEFAULT_SPEED = 200;

export const PlayArena: React.FC<IPlayArenaProps> = ({ row, column }) => {
  const [selectedStates, updateSelectedStates] = useState<IObjectType>({});
  const [isPlaying, updateIsPlaying] = useState<boolean>(false);
  const [generationCount, updateGenerationCount] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(DEFAULT_SPEED);
  const playingRef: { current: undefined | ReturnType<typeof setTimeout>} = useRef();
  const updateLivingStatus = (living: boolean, i: number, j: number): void => {
    safeSet(selectedStates, `${i}.${j}`, living);
    updateSelectedStates(JSON.parse(JSON.stringify(selectedStates)));
  }

  const clearMyInterval = (): void => {
    const id: undefined | ReturnType<typeof setTimeout> = playingRef.current;
      if(id !== undefined) {
        clearInterval(id);
        playingRef.current = undefined;
      }
  }

  const setMyInterval = (): void => {
    const id = setInterval(() => {
      updateSelectedStates(selectedStates => getNextGeneration(row, column, selectedStates));
      updateGenerationCount(generationCount => generationCount + 1);
    }, speed);
    playingRef.current = id;
  }
  useEffect(() => {
    if(isPlaying) {
      setMyInterval();
    } else if(!isPlaying) {
      clearMyInterval();
      updateGenerationCount(0)
    }
    return clearMyInterval
  }, [ isPlaying ])

  const play = () => {
    updateIsPlaying(!isPlaying);
  }

  const getSliderMarkText = (value: number): string => {
    return `${value} ms`
  }

  const sliderChange = (event: React.ChangeEvent<{}>, value: number | number[]): void => {
    Array.isArray(value) ? setSpeed(value[0]) : setSpeed(value);
    if(isPlaying) {
      clearMyInterval();
      setMyInterval();
    }
  }

  const onClear = () => {
    updateIsPlaying(false);
    updateSelectedStates(() => ({}));
  }

  return <React.Fragment>
    {!isNaN(column * row) && (<div className="play-arena-container">
      <Board row={row} column={column} updateLivingStatus={updateLivingStatus} selectedStates={selectedStates} />
      <p className={"play-arena-container__generation"}>Generations: {generationCount}</p>
      <div className={"play-arena-container__controllers"}>
        <Slider
          className={"play-arena-container__controllers__slider"}
          defaultValue={DEFAULT_SPEED}
          getAriaValueText= {getSliderMarkText}
          step={100}
          onChange={sliderChange}
          marks
          min={100}
          max={500}
        />
        <Button variant="contained" color="primary" type={"submit"} onClick={play}>{ isPlaying ? "STOP" : "START" }</Button>
        <Button variant="contained" color="primary" type={"submit"} onClick={onClear}>CLEAR</Button>
      </div>
    </div>
    )}
  </React.Fragment>
}
