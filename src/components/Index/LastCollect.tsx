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
  console.log(lastCollect)
  const { create_at, content, tag, title } = lastCollect
  return (
    <div className="last-card">
      <Card title="最新收藏" bordered={false}>
        <p>{title}</p>
        <span>{tag}</span>
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        {create_at && <p>发表于：{format(create_at)}</p>}
      </Card>
    </div>
  )
}

export default LastSay
