import 'whatwg-fetch'
import { IPayload } from '../actions/articles'
import { blogFetch } from '../common'

const fetchArticles = (payLoad: IPayload) => blogFetch('/articles', payLoad)

const addArticle = (payload: object) =>
  blogFetch('/add-article', payload, 'POST')

const updateArticle = (payload: object) =>
  blogFetch('/update-article', payload, 'POST')

const deleteArticle = (payload: object) =>
  blogFetch('/delete-article', payload, 'POST')

const fetchInfo = () => blogFetch('/info')

const fetchResume = () => blogFetch('/resume')

const fetchArticle = (Id: string) => blogFetch('/article', { Id })

export {
  fetchArticle,
  fetchResume,
  deleteArticle,
  fetchInfo,
  fetchArticles,
  updateArticle,
  addArticle
}
