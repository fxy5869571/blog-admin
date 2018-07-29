import { Icon, Tag } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IMenuItem } from '../Menu/Menu'
import './style.less'
interface IProps {
  tagList: IMenuItem[]
  pathname: string
  onClose: (item: IMenuItem) => void
}
class Tags extends React.Component<IProps> {
  public render() {
    const { tagList, pathname, onClose } = this.props
    return (
      <div className="tags">
        {tagList.map(
          item =>
            item.url === '/admin' ? (
              <Link to={item.url || ''} key={item.key}>
                <Tag color={item.url === pathname ? '#1890ff' : 'blue'}>
                  <Icon type={item.icon} className="big-icon-font right" />
                  {item.label}
                </Tag>
              </Link>
            ) : (
              <Link to={item.url || ''} key={item.key}>
                <Tag
                  color={item.url === pathname ? '#1890ff' : 'blue'}
                  onClose={() => onClose(item)}
                  closable={true}>
                  <Icon type={item.icon} className="icon-font right" />
                  {item.label}
                </Tag>
              </Link>
            )
        )}
      </div>
    )
  }
}

export default Tags
