export interface IDictionary<T>{
  [key:string]: T
}

export interface IParam {
  service?: string,
  appFunc?: string,
  keyFunc?: string,
  args?: { [key: string]: any }
}

export interface IRequest {
  func?: string,
  param?: IParam,
}
export interface IResponse {
  code: number,
  message: string,
  data?: { [key: string]: any }
}

export interface IFunctionalArgMap<T>{
  [key: string]: (args: T) => Promise<any | void>
}
export interface IFunctionalMap{
  [key: string]: () => Promise<any | void>
}

export interface IUser {
  id?: string,
  username: string,
  password: string,
  acl?: IGroup | string
}
export interface IGroup {
  id?: string,
  groupname: string,
  exec: string[],
  read: string[],
  write: string[]
}