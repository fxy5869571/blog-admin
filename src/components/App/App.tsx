import { Icon, Layout, Menu } from 'antd'
import * as React from 'react'
const { Header, Sider, Content } = Layout
import { ReactHTML } from 'react'
import './style.less'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
interface ILocation {
  pathname: string
}
interface IProps {
  children: ReactHTML
  location: ILocation
}
class App extends React.Component<IProps> {
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
  public state = {
    collapsed: false
  }
  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  public renderMenu = (menuList: any[]): any => {
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
    const { children, location } = this.props
    const { collapsed } = this.state
    const isLogin = location.pathname === '/login'
    return !isLogin ? (
      <Layout
        className="menu"
        style={{
          minHeight: '100vh',
          overflow: 'auto'
        }}>
        <Sider
          style={{
            minHeight: '100vh'
          }}
          trigger={null}
          collapsed={collapsed}
          collapsible={true}>
          <div className="logo">
            <img
              alt="logo"
              src="http://antd-admin.zuiidea.com/public/logo.svg"
            />
            {!collapsed && <span>Blog ADMIN</span>}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {this.renderMenu(this.menuList)}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              background: '#fff',
              margin: '24px 16px',
              padding: 24
            }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    ) : (
      { children }
    )
  }
}

export default App
