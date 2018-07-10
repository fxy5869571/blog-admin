import { Modal, Pagination, Timeline } from 'antd'
import * as React from 'react'
import './style.less'
const Item = Timeline.Item
const confirm = Modal.confirm
interface ISay {
  say: string
  create_at: string
  _id: string
}
interface IProps {
  payload: any
  total: number
  say: ISay[]
  fetchSay: (payload?: object) => void
  deleteSay: (id: string) => void
}
class Say extends React.Component<IProps> {
  public componentDidMount() {
    this.props.fetchSay({ pageIndex: 1, pageSize: 10 })
  }
  public deleteSay = (id: string) => {
    confirm({
      onOk: () => {
        this.props.deleteSay(id)
      },
      title: '确定删除这条说说?'
    })
  }
  public onChange = (pageIndex: number, pageSize: number) => {
    this.props.fetchSay({ pageIndex, pageSize })
  }
  public onShowSizeChange = (pageIndex: number, pageSize: number) => {
    this.props.fetchSay({ pageIndex, pageSize })
  }
  public render() {
    const { say, total, payload } = this.props
    const { pageIndex, pageSize } = payload
    return (
      <div className="time-line-wrp">
        <Timeline className="time-line">
          {say &&
            say.map(item => (
              <Item key={item._id}>
                <div className="item" onClick={() => this.deleteSay(item._id)}>
                  <div dangerouslySetInnerHTML={{ __html: item.say }} />
                  <span className="posted">
                    发表于：{new Date(item.create_at).toLocaleString()}
                  </span>
                </div>
              </Item>
            ))}
        </Timeline>
        <div className="pagination">
          <Pagination
            current={pageIndex}
            pageSize={pageSize}
            total={total}
            showSizeChanger={true}
            onChange={this.onChange}
            onShowSizeChange={this.onShowSizeChange}
          />
        </div>
      </div>
    )
  }
}

export default Say
