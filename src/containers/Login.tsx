import { connect, Dispatch } from 'react-redux'
import Login from '../components/Login/Login'
import { REQUEST_TOKEN } from '../constants'

interface IUser {
  loading: boolean
  token?: string
}

interface IState {
  user: IUser
}
const mapStateToProps = ({ user }: IState) => {
  const { loading, token } = user
  return { loading, token }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (payload: object) => {
    dispatch({ type: REQUEST_TOKEN, payload })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
