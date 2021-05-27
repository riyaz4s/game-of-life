export interface ISelectedStatesType { [key: string]: boolean }
export interface IObjectType { [key: string]: IObjectType | ISelectedStatesType } 

export const safeSet = (obj: IObjectType, path: string, value: any): object => {
  const keys = path.split('.');
  const lastKey = keys.pop();
  let temp = obj;
  keys.forEach((value: string) => {
    if(temp[value] === undefined ) {
      temp[value] = {};
    }
    temp = <IObjectType>temp[value];
  })
  if(lastKey) {
    temp[lastKey] = value
  }
  return obj
}

export const safeGet = (obj: IObjectType, path: string): any => {
  const keys = path.split('.');
  const lastKey = keys.pop();
  let temp = obj;
  keys.forEach((value: string) => {
    if(temp[value] === undefined ) {
      temp[value] = {};
    }
    temp = <IObjectType>temp[value];
  })
  if(lastKey) {
    return temp[lastKey]
  }
  return obj
}

export const getNextGeneration = (rows: number, columns: number, board: IObjectType): IObjectType => {
  const findNeighbours = (i: number, j: number, board: IObjectType): { ones: number, zeros: number } => {
      const topLeft = {i: i-1, j: j-1};
      const top = {i: i-1, j};
      const topRight = {i: i-1, j: j+1};
      const left = {i, j: j-1};
      const right = {i, j: j+1};
      const bottomLeft = {i: i+1, j: j-1};
      const bottom = {i: i+1, j};
      const bottomRight = {i: i+1, j: j+1};
      const indexes = [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight]
      let ones: number = 0;
      let zeros: number = 0;
      indexes.forEach(({i, j}) => {
         if(board[`${i}`] && board[`${i}`][`${j}`]) {
            ones++;
         } else {
            zeros++
         }
      });
      return { ones, zeros }
  }
  const findStatus = (i: number, j: number, board: IObjectType): boolean => {
      const { ones } = findNeighbours(i, j, board);
      const curr = board[`${i}`][`${j}`];
      if(curr) {
          if(ones === 2 || ones === 3) {
              return true;
          } else {
              return false;
          } 
      } else {
          if(ones === 3) {
              return true;
          } else {
              return false;
          } 
      }
  }

  const boardCopy : IObjectType  = JSON.parse(JSON.stringify(board));

  for (let i = 0; i < rows; i++) {
      for (let j=0; j < columns; j++) {
        boardCopy[`${i}`][`${j}`] = findStatus(i, j, board);
      }
  }
  return boardCopy;
  
};