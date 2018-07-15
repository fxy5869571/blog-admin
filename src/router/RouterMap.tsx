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
    path: '/edit-article'
  },
  {
    component: () => import('../containers/Say'),
    path: '/edit-say'
  },
  {
    component: () => import('../containers/AddSay'),
    path: '/add-say'
  },
  {
    component: () => import('../containers/AddArticle'),
    path: '/add-article'
  },
  {
    component: () => import('../containers/Collect'),
    path: '/edit-collect'
  },
  {
    component: () => import('../containers/Login'),
    path: '/login'
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
          <Redirect to={{ pathname: '/login' }} />
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
            path="/"
            component={Loadable({
              loader: () => import('../components/index/Index'),
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
