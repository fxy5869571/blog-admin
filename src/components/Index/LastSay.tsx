import { Card } from 'antd'
import * as React from 'react'
import { format } from '../../common'
interface ILastSay {
  create_at?: string
  say?: string
}
interface IProps {
  lastSay: ILastSay
}
const LastSay = ({ lastSay = {} }: IProps) => {
  console.log(lastSay)
  const { create_at, say } = lastSay
  return (
    <div className="last-card">
      <Card title="最新说说" bordered={false}>
        {say && <div dangerouslySetInnerHTML={{ __html: say }} />}
        {create_at && <p>发表于：{format(create_at)}</p>}
      </Card>
    </div>
  )
}

export default LastSay
