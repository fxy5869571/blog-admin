import { Layout } from 'antd'
import * as React from 'react'
import { ReactHTML } from 'react'
import Header from '../Layout/Header/Header'
import Menu, { IMenuItem } from '../Layout/Menu/Menu'
import Tags from '../Layout/Tags/Tags'
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
  public menuList = [
    { label: '首页', url: '/', icon: 'home', key: '1' },
    {
      children: [
        { label: '文章管理', url: '/edit-article', icon: 'form', key: '2' },
        { label: '发表文章', url: '/add-article', icon: 'upload', key: '3' }
      ],
      icon: 'book',
      key: '7',
      label: '文章'
    },
    {
      children: [
        { label: '说说管理', url: '/edit-say', icon: 'form', key: '5' },
        { label: '发表说说', url: '/add-say', icon: 'upload', key: '6' }
      ],
      icon: 'message',
      key: '8',
      label: '说说'
    },
    {
      icon: 'exception',
      key: '9',
      label: '简历',
      url: '/resume'
    },
    {
      icon: 'user',
      key: '10',
      label: '用户',
      url: '/user'
    }
  ]
  public state = {
    collapsed: false,
    tagList: [{ label: '首页', url: '/', icon: 'home', key: '1' }]
  }
  public componentDidMount() {
    this.setState({
      tagList: JSON.parse(localStorage.getItem('tagList') || '[]')
    })
  }
  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  public handleTag = (item: IMenuItem) => {
    const tagKeys = new Set(this.state.tagList.map(tag => tag.key))
    if (tagKeys.has(item.key)) {
      this.setState(
        {
          tagList: [...this.state.tagList]
        },
        () => {
          localStorage.setItem('tagList', JSON.stringify(this.state.tagList))
        }
      )
    } else {
      this.setState(
        {
          tagList: [...this.state.tagList, item]
        },
        () => {
          localStorage.setItem('tagList', JSON.stringify(this.state.tagList))
        }
      )
    }
  }
  public render() {
    const { children, location } = this.props
    const { collapsed, tagList } = this.state
    const isLogin = location.pathname === '/login'
    return !isLogin ? (
      <Layout className="menu" style={{ minHeight: '100vh' }}>
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
          <Menu
            menuList={this.menuList}
            pathname={location.pathname}
            handleTag={this.handleTag}
          />
        </Sider>
        <Layout>
          <Header collapsed={collapsed} toggle={this.toggle} />
          <Tags tagList={tagList} pathname={location.pathname} />
          <Content
            style={{
              background: '#fff',
              margin: '0 16px 24px 16px',
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
