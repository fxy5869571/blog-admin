// blog  login const
const REQUEST_TOKEN = 'REQUEST_TOKEN'
type REQUEST_TOKEN = typeof REQUEST_TOKEN
const RECEIVE_TOKEN = 'RECEIVE_TOKEN'
type RECEIVE_TOKEN = typeof RECEIVE_TOKEN
const CLEAR_TOKEN = 'CLEAR_TOKEN'
type CLEAR_TOKEN = typeof CLEAR_TOKEN
interface IRequestToken {
  type: REQUEST_TOKEN
  payload: object
}
interface IReceiveToken {
  type: RECEIVE_TOKEN
  user: object
  payload: object
}
interface IClearToken {
  type: CLEAR_TOKEN
  user: object
  payload: object
}
type TokenAction = IRequestToken | IReceiveToken | IClearToken

export {
  CLEAR_TOKEN,
  TokenAction,
  IClearToken,
  IReceiveToken,
  IRequestToken,
  RECEIVE_TOKEN,
  REQUEST_TOKEN
}
