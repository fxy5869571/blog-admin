import {
  RECEIVE_ARTICLE,
  RECEIVE_INFO,
  RECEIVE_RESUME,
  REQUEST_ARTICLE,
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

// blog article action
export interface IRequestArticle {
  type: REQUEST_ARTICLE
  Id: string
}
export interface IReceiveArticle {
  type: RECEIVE_ARTICLE
  Id: string
  article: object[]
}
export type ArticleAction = IRequestArticle | IReceiveArticle

// blog resume action
export interface IRequestResume {
  type: REQUEST_RESUME
}
export interface IReceiveResume {
  type: RECEIVE_RESUME
  resume: object
}
export type ResumeAction = IRequestResume | IReceiveResume
