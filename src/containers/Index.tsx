import { connect } from 'react-redux'
import { REQUEST_INFO } from '../actions/'
import IndexPage from '../components/Index/IndexPage'

interface IState {
  info: object
}
const mapStateToProps = ({ info }: IState) => ({
  info
})
const mapDispatchToProps = (dispatch: any) => ({
  fetchInfo: () => {
    dispatch({ type: REQUEST_INFO })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)
