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
  const { create_at, say } = lastSay
  const replaceHtml = /<(?:.|\s)*?>/g
  return (
    <div className="last-card">
      <Card bordered={false} hoverable={true}>
        <div className="last-item">
          <div className="avatar avatar-three">S</div>
          <div className="last-right">
            <h5>最新说说</h5>
            {create_at && <p className="tag">发表于：{format(create_at)}</p>}
            <div className="last-content">
              {say && say.replace(replaceHtml, '')}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default LastSay
