import { Icon, Menu } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
export interface IMenuItem {
  label: string
  url?: string
  children?: IMenuItem[]
  icon: string
  key: string
}
interface IProps {
  menuList: IMenuItem[]
  pathname: string
  handleTag: (item: IMenuItem) => void
}
class BlogMenu extends React.Component<IProps> {
  // 保持菜单选中
  public static getDerivedStateFromProps(nextProps: IProps) {
    const { pathname, menuList } = nextProps
    let nextState = {}
    menuList.forEach(items => {
      if (Array.isArray(items.children)) {
        items.children.forEach(item => {
          if (item.url === pathname) {
            nextState = {
              key: item.key,
              openKeys: items.key
            }
          }
        })
      } else {
        if (items.url === pathname) {
          nextState = { key: items.key }
        }
      }
    })
    return nextState
  }
  public state = {
    key: '1',
    openKeys: ''
  }

  public onMenuItem = (item: IMenuItem) => {
    this.props.handleTag(item)
    this.setState({ key: item.key })
  }

  public onOpenChange = (openKeys: string[]) => {
    this.setState({ openKeys: openKeys[openKeys.length - 1] })
  }

  // 递归生成菜单
  public renderMenu = (menuList: IMenuItem[]): any => {
    return menuList.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} className="big-icon-font" />
                <span>{item.label}</span>
              </span>
            }>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <MenuItem key={item.key} onClick={() => this.onMenuItem(item)}>
            <Link to={item.url || ''}>
              <Icon type={item.icon} className="big-icon-font" />
              <span>{item.label}</span>
            </Link>
          </MenuItem>
        )
      }
    })
  }

  public render() {
    const { openKeys, key } = this.state
    return (
      <Menu
        theme="dark"
        mode="inline"
        onOpenChange={this.onOpenChange}
        selectedKeys={[key]}
        openKeys={[openKeys]}>
        {this.renderMenu(this.props.menuList)}
      </Menu>
    )
  }
}

export default BlogMenu
