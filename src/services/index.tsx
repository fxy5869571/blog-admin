import 'whatwg-fetch'
import { IPayload } from '../actions/articles'
import { blogFetch } from '../common'
// article
const fetchArticles = (payLoad: IPayload) => blogFetch('/get-articles', payLoad)

const addArticle = (payload: object) =>
  blogFetch('/add-article', payload, 'POST')

const updateArticle = (payload: object) =>
  blogFetch('/update-article', payload, 'POST')

const deleteArticle = (payload: object) =>
  blogFetch('/delete-article', payload, 'POST')

// say
const getSay = (payLoad: object) => blogFetch('/get-say', payLoad)

const blogPost = (url: string, payload: object) =>
  blogFetch(url, payload, 'POST')

const fetchInfo = () => blogFetch('/get-info')

const fetchCollect = (payload: object) => blogFetch('/get-collect', payload)

const login = (payload: object) => blogFetch('/login', payload, 'POST')


export {
  blogPost,
  login,
  fetchCollect,
  deleteArticle,
  getSay,
  fetchInfo,
  fetchArticles,
  updateArticle,
  addArticle
}
