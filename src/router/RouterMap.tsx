import * as React from 'react'
import * as Loadable from 'react-loadable'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
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
  }
]
const PrivateRoute = ({ component: Component, token, ...rest }: any) => {
  let isLogin = token
  const user = localStorage.getItem('user')
  if (user) {
    isLogin = JSON.parse(user).token
  }
  return (
    <Route
      {...rest}
      render={props =>
        !isLogin ? (
          <Redirect to={{ pathname: '/admin/login' }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

const RouterMap = (props: any) => {
  return (
    <Router>
      <App>
        <Switch>
          <PrivateRoute
            token={props.token}
            key="/"
            exact={true}
            path="/admin"
            component={Loadable({
              loader: () => import('../containers/Index'),
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
}

const mapStateToProps = (state: any): object => ({ token: state.user.token })
export default connect(mapStateToProps)(RouterMap)
