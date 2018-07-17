import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { RECEIVE_TOKEN } from '../actions/user'
import App from '../components/App/App'

interface IInfo {
  info: object
  user: any
}

const mapStateToProps = ({ info, user }: IInfo) => {
  return { info, token: user.token }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    isLogin: () => {
      const user = localStorage.getItem('user')
      if (user) {
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
