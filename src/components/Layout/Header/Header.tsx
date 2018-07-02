import { Icon, Layout, Popover } from 'antd'
import * as React from 'react'
import './style.less'
const { Header } = Layout
interface IProps {
  collapsed: boolean
  isMobile: boolean
  toggle: () => void
}
class BlogHeader extends React.Component<IProps> {
  public render() {
    const { collapsed, toggle, children, isMobile } = this.props
    return (
      <Header className="header">
        {isMobile ? (
          <Popover content={children} placement="bottomRight" trigger="click">
            <Icon className="trigger" type="bars" onClick={toggle} />
          </Popover>
        ) : (
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        )}
        <Icon
          type="user"
          className="trigger"
          style={{ marginRight: 20, fontSize: 20 }}
        />
      </Header>
    )
  }
}

export default BlogHeader
