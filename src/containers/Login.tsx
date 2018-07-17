import { connect } from 'react-redux'
import { REQUEST_TOKEN } from '../actions/user'
import Login from '../components/Login/Login'

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
const mapDispatchToProps = (dispatch: any) => ({
  login: (payload: object) => {
    dispatch({ type: REQUEST_TOKEN, payload })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
