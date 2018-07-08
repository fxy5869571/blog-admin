import {
  RECEIVE_INFO,
  RECEIVE_RESUME,
  REQUEST_INFO,
  REQUEST_RESUME
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
