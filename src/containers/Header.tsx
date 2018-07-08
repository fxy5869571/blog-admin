import { connect, Dispatch } from 'react-redux'
import { CLEAR_TOKEN } from '../actions/user'
import Header from '../components/Layout/Header/Header'

interface IUser {
  userName: string
}

interface IState {
  user: IUser
}
const mapStateToProps = ({ user }: IState) => {
  return { userName: user.userName }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => {
    dispatch({ type: CLEAR_TOKEN })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
