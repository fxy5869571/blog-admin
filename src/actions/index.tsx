import {
  RECEIVE_INFO,
  RECEIVE_RESUME,
  RECEIVE_TOKEN,
  REQUEST_INFO,
  REQUEST_RESUME,
  REQUEST_TOKEN
} from '../constants'

// blog info action
export interface IRequestInfo {
  type: REQUEST_INFO
}
export interface IReceiveInfo {
  type: RECEIVE_INFO
  info: object
}
export type InfoAction = IRequestInfo | IReceiveInfo

// blog resume action
export interface IRequestResume {
  type: REQUEST_RESUME
}
export interface IReceiveResume {
  type: RECEIVE_RESUME
  resume: object
}
export type ResumeAction = IRequestResume | IReceiveResume

// blog login action
export interface IRequestToken {
  type: REQUEST_TOKEN
  payload: object
}
export interface IReceiveToken {
  type: RECEIVE_TOKEN
  user: object
  payload: object
}
export type TokenAction = IRequestToken | IReceiveToken
