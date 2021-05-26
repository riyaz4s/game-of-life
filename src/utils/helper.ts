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