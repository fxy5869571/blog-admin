import { message } from 'antd'
import 'whatwg-fetch'
const api = 'http://localhost:8001'
const dataToString = (data: object) => {
  const array: any = []
  let index = 0
  for (const item in data) {
    if (data[item]) {
      array[index++] = [item, data[item]]
    }
  }
  return new URLSearchParams(array).toString()
}
const format = (date: string): string => {
  const myDate = new Date(date)
  const year = myDate.getFullYear()
  const month = myDate.getMonth() + 1
  const day = myDate.getDate()
  return `${year}-${month}-${day}`
}
const blogFetch = (
  url: string,
  data?: object,
  method: string = 'GET'
): Promise<Response> => {
  let initObj = {}
  url = api + url
  let dataStr = ''
  if (data) {
    dataStr = dataToString(data)
  }
  if (method === 'GET') {
    if (data) {
      if (url.indexOf('?') > -1) {
        url += '&' + dataStr
      } else {
        url += '?' + dataStr
      }
    }
  } else {
    let token = ''
    const user = localStorage.getItem('user')
    if (user) {
      token = JSON.parse(user).token
    }
    console.log(token)
    initObj = {
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }),
      method
    }
  }
  return fetch(url, initObj)
    .then(response => response.json())
    .then(response => {
      if (response.message) {
        if (response.type === 'error') {
          message.warning(response.message)
        } else {
          message.success(response.message)
        }
      }
      return response
    })
}
export { blogFetch, format }
