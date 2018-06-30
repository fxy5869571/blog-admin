import { Icon, Menu } from 'antd'
import * as React from 'react'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
interface IMenuItem {
  label: string
  url?: string
  children?: IMenuItem[]
  icon: string
  key: number
}
class BlogMenu extends React.Component {
  public menuList = [
    { label: '首页', url: '/', icon: 'home', key: 1 },
    {
      children: [
        { label: '文章管理', url: '', icon: 'form', key: 2 },
        { label: '添加文章', url: '', icon: 'upload', key: 3 }
      ],
      icon: 'book',
      key: 7,
      label: '文章'
    },
    {
      children: [
        { label: '说说管理', url: '', icon: 'form', key: 5 },
        { label: '发表说说', url: '', icon: 'upload', key: 6 }
      ],
      icon: 'message',
      key: 8,
      label: '说说'
    },
    {
      icon: 'exception',
      key: 9,
      label: '简历'
    },
    {
      icon: 'user',
      key: 10,
      label: '用户'
    }
  ]
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
          <MenuItem key={item.key}>
            <Icon type={item.icon} className="big-icon-font" />
            <span>{item.label}</span>
          </MenuItem>
        )
      }
    })
  }
  public render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {this.renderMenu(this.menuList)}
      </Menu>
    )
  }
}

export default BlogMenu
