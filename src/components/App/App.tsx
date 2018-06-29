import { Layout } from 'antd'
import * as React from 'react'
import { ReactHTML } from 'react'
import BlogHeader from './Header'
import Menu from './Menu'
import './style.less'
const { Sider, Content } = Layout
interface ILocation {
  pathname: string
}
interface IProps {
  children: ReactHTML
  location: ILocation
}
class App extends React.Component<IProps> {
  public state = {
    collapsed: false
  }
  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
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
          style={{ minHeight: '100vh' }}
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
          <Menu />
        </Sider>
        <Layout>
          <BlogHeader collapsed={collapsed} toggle={this.toggle} />
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
