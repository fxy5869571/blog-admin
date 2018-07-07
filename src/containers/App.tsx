import { connect, Dispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from '../components/App/App'
import { RECEIVE_TOKEN, REQUEST_INFO } from '../constants'

interface IInfo {
  info: object
}

const mapStateToProps = ({ info }: IInfo) => {
  return { info }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: dispatch({ type: REQUEST_INFO }),
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
