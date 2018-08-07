import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { RECEIVE_TOKEN } from '../actions/user'
import App from '../components/App/App'

interface IInfo {
  user: any
}

const mapStateToProps = ({ user }: IInfo) => {
  return { token: user.token }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    isLogin: () => {
      const user = localStorage.getItem('user')
      if (user && user !== 'undefined') {
        dispatch({ type: RECEIVE_TOKEN, user: JSON.parse(user) })
      }
    }
  }
}
const AppMap: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default withRouter(AppMap)
