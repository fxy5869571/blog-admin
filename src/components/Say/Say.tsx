import { Modal, Timeline } from 'antd'
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
  say: ISay[]
  fetchSay: () => void
  deleteSay: (id: string) => void
}
class Say extends React.Component<IProps> {
  public componentDidMount() {
    this.props.fetchSay()
  }
  public deleteSay = (id: string) => {
    confirm({
      onOk: () => {
        this.props.deleteSay(id)
      },
      title: '确定删除这条说说?'
    })
  }
  public render() {
    console.log(this.props.say)
    return (
      <div className="time-line-wrp">
        <Timeline className="time-line">
          {this.props.say &&
            this.props.say.map(item => (
              <Item key={item._id}>
                <div className="item" onClick={() => this.deleteSay(item._id)}>
                  <p dangerouslySetInnerHTML={{ __html: item.say }} />
                  <span className="posted">
                    发表于：{new Date(item.create_at).toLocaleString()}
                  </span>
                </div>
              </Item>
            ))}
        </Timeline>
      </div>
    )
  }
}

export default Say
