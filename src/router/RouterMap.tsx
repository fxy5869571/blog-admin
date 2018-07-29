import * as React from 'react'
import * as Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'
import '../index.less'
import loading from './loading'
const RouterList: any[] = [
  {
    component: () => import('../containers/Articles'),
    path: '/admin/edit-article'
  },
  {
    component: () => import('../containers/Say'),
    path: '/admin/edit-say'
  },
  {
    component: () => import('../containers/AddSay'),
    path: '/admin/add-say'
  },
  {
    component: () => import('../containers/AddArticle'),
    path: '/admin/add-article'
  },
  {
    component: () => import('../containers/Collect'),
    path: '/admin/edit-collect'
  },
  {
    component: () => import('../containers/AddCollect'),
    path: '/admin/add-collect'
  },
  {
    component: () => import('../containers/Login'),
    path: '/admin/login'
  },
  {
    component: () => import('../containers/Index'),
    path: '/admin'
  }
]
const RouterMap = () => {
  return (
    <Router>
      <App>
        <Switch>
          {RouterList.map(item => (
            <Route
              key={item.path}
              exact={true}
              path={item.path}
              component={Loadable({
                loader: item.component,
                loading
              })}
            />
          ))}
        </Switch>
      </App>
    </Router>
  )
}

export default RouterMap
