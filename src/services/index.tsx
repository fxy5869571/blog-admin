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

const fetchInfo = () => blogFetch('/info')

const fetchResume = () => blogFetch('/resume')

const login = (payload: object) => blogFetch('/login', payload, 'POST')

// say
const blogPost = (url: string, payload: object) =>
  blogFetch(url, payload, 'POST')

const getSay = (payLoad: object) => blogFetch('/get-say', payLoad)
export {
  blogPost,
  login,
  fetchResume,
  deleteArticle,
  getSay,
  fetchInfo,
  fetchArticles,
  updateArticle,
  addArticle
}
