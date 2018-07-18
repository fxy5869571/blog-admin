import { Card } from 'antd'
import * as React from 'react'
import { format } from '../../common'

interface ITag {
  title: string
}
export interface IArticle {
  abstract?: string
  title?: string
  access?: string
  tag?: ITag
  create_at?: string
}
interface IProps {
  lastArticle: IArticle
}
const LastArticle = ({ lastArticle = {} }: IProps) => {
  const { abstract, title, tag, access, create_at } = lastArticle
  return (
    <div className="last-card">
      {lastArticle && (
        <Card bordered={false} hoverable={true}>
          <div className="last-item">
            <div className="avatar avatar-two">W</div>
            <div className="last-right">
              <h5>{title}</h5>
              <p className="tag">
                <span>发表于：{create_at && format(create_at)}</span>
                <span>标签：{tag && tag.title}</span>
                <span>浏览：{access}</span>
              </p>
              <div className="abstract last-content">{abstract}...</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}

export default LastArticle
