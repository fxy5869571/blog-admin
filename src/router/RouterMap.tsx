import * as React from 'react'
import * as Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'
import '../index.less'
import loading from './loading'
const RouterList: any[] = [
  {
    component: () => import('../containers/Articles'),
    path: '/edit-article'
  },
  {
    component: () => import('../containers/AddArticle'),
    path: '/add-article'
  },
  {
    component: () => import('../containers/Resume'),
    path: '/resumes'
  },
  {
    component: () => import('../components/Login/Login'),
    path: '/login'
  }
]
const RouterMap = () => (
  <Router>
    <App>
      <Switch>
        <Route
          key="/"
          exact={true}
          path="/"
          component={Loadable({
            loader: () => import('../containers/Article'),
            loading
          })}
        />
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

export default RouterMap
