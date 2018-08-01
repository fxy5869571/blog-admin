import { Dropdown, Icon, Layout, Menu, Popover } from 'antd'
import * as React from 'react'
import { IHistory } from '../../App/App'
import './style.less'
const { Header } = Layout
interface IProps extends IHistory {
  collapsed: boolean
  isMobile: boolean
  userName: string
  toggle: () => void
  logout: () => void
}
class BlogHeader extends React.Component<IProps> {
  public onClick = () => {
    this.props.logout()
    this.props.push('/admin/login')
  }
  public render() {
    const { collapsed, toggle, children, isMobile, userName } = this.props
    const menu = (
      <Menu>
        <Menu.Item key="logout" onClick={this.onClick}>
          退出登录
        </Menu.Item>
      </Menu>
    )
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
        <Dropdown overlay={menu} placement="bottomLeft">
          <div className="user">
            <Icon type="user" style={{ marginRight: 5, fontSize: 20 }} />
            <span>{userName}</span>
          </div>
        </Dropdown>
      </Header>
    )
  }
}

export default BlogHeader
