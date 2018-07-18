import { Card } from 'antd'
import * as React from 'react'
import { format } from '../../common'
interface ILastCollect {
  create_at?: string
  title?: string
  content?: string
  tag?: string
}
interface IProps {
  lastCollect: ILastCollect
}
const LastSay = ({ lastCollect = {} }: IProps) => {
  const { create_at, content, tag, title } = lastCollect
  const replaceHtml = /<(?:.|\s)*?>/g
  return (
    <div className="last-card">
      <Card bordered={false} hoverable={true}>
        <div className="last-item">
          <div className="avatar avatar-one">C</div>
          <div className="last-right">
            <h5>{title}</h5>
            <p className="tag">
              {create_at && <span>发表于：{format(create_at)}</span>}
              <span>标签：{tag}</span>
            </p>
            <div className="last-content">
              {content && content.replace(replaceHtml, '')}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default LastSay
