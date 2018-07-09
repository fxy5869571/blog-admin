// blog say payload
interface IPayload {
  pageIndex?: number
  pageSize?: number
  timeFile?: boolean
  id?: string
}

// blog say const
const REQUEST_SAY = 'REQUEST_SAY'
type REQUEST_SAY = typeof REQUEST_SAY
const RECEIVE_SAY = 'RECEIVE_SAY'
type RECEIVE_SAY = typeof RECEIVE_SAY
const DELETE_SAY = 'DELETE_SAY'
type DELETE_SAY = typeof DELETE_SAY
const ADD_SAY = 'ADD_SAY'
type ADD_SAY = typeof ADD_SAY

// blog say action
interface IAddSAY {
  type: ADD_SAY
  payload: object
}
interface IRequestSAY {
  type: REQUEST_SAY
  payload: IPayload
}
interface IDeleteSAY {
  type: DELETE_SAY
  payload: object
}
interface IReceiveSAY {
  type: RECEIVE_SAY
  payload: IPayload
  total: number
  say: object[]
}

type SAYAction = IRequestSAY | IReceiveSAY
export {
  ADD_SAY,
  SAYAction,
  DELETE_SAY,
  REQUEST_SAY,
  RECEIVE_SAY,
  IPayload,
  IAddSAY,
  IDeleteSAY
}
