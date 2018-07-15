import * as React from 'react'

interface IProps {
  collect: object[]
  payload: object
  total: number
  deleteCollect: (id: string) => void
  fetchCollect: (payload: object) => void
}
class Tags extends React.Component<IProps> {
  public componentDidMount() {
    this.props.fetchCollect({ pageIndex: 1, pageSize: 10 })
  }
  public render() {
    console.log(this.props)
    return <div>demo</div>
  }
}

export default Tags
