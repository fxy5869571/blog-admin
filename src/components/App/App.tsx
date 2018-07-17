import { Icon, Layout, Switch } from 'antd'
import * as React from 'react'
import { ReactHTML } from 'react'
import Header from '../../containers/Header'
import Menu, { IMenuItem } from '../Layout/Menu/Menu'
import Tags from '../Layout/Tags/Tags'
import './style.less'

const { Sider, Content } = Layout
export interface IHistory {
  push: (pathname: string) => void
}
interface ILocation {
  pathname: string
}
interface IProps {
  children: ReactHTML
  location: ILocation
  history: IHistory
  isLogin: () => void
  token: string
}

class App extends React.Component<IProps> {
  public timer: any
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
      children: [
        { label: '收藏管理', url: '/edit-collect', icon: 'form', key: '13' },
        { label: '添加收藏', url: '/add-collect', icon: 'upload', key: '12' }
      ],
      icon: 'file-add',
      key: '11',
      label: '收藏'
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
    isMobile: false,
    tagList: [{ label: '首页', url: '/', icon: 'home', key: '1' }],
    theme: true
  }
  public componentDidMount() {
    this.props.isLogin()
    this.onResize()
    this.setState({
      tagList: JSON.parse(localStorage.getItem('tagList') || '[]')
    })
  }
  public onClose = (tag: IMenuItem) => {
    this.setState(
      { tagList: this.state.tagList.filter(item => item.key !== tag.key) },
      () => {
        const { url } = this.state.tagList[this.state.tagList.length - 1]
        this.props.history.push(url)
        this.setLocalStorage()
      }
    )
  }
  public onResize = () => {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      window.onresize = () => {
        this.setState({
          isMobile: document.body.clientWidth < 769
        })
      }
    }, 500)
  }
  public toggle = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }
  public setLocalStorage = () => {
    localStorage.setItem('tagList', JSON.stringify(this.state.tagList))
  }
  public handleTag = (item: IMenuItem) => {
    const tagKeys = new Set(this.state.tagList.map(tag => tag.key))
    if (tagKeys.has(item.key)) {
      this.setState({ tagList: [...this.state.tagList] }, this.setLocalStorage)
    } else {
      this.setState(
        { tagList: [...this.state.tagList, item] },
        this.setLocalStorage
      )
    }
  }
  public switchOnChange = () => {
    this.setState({ theme: !this.state.theme })
  }
  public render() {
    const { children, location } = this.props
    const { collapsed, tagList, isMobile, theme } = this.state
    const isLogin = location.pathname === '/login'
    const isTransparent = location.pathname === '/edit-collect'
    const isIndex = location.pathname === '/'
    return !isLogin ? (
      <Layout className="menu" style={{ height: '100vh' }}>
        {!isMobile && (
          <Sider
            theme={theme ? 'dark' : 'light'}
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
              theme={theme}
            />
            <div className={theme ? 'switch-theme dark' : 'switch-theme light'}>
              {!collapsed && (
                <span>
                  <Icon type="bulb" />
                  <span className="title">切换主题</span>
                </span>
              )}
              <Switch
                checkedChildren="dark"
                unCheckedChildren="light"
                defaultChecked={true}
                onChange={this.switchOnChange}
              />
            </div>
          </Sider>
        )}
        <Layout>
          <Header
            push={this.props.history.push}
            collapsed={collapsed}
            toggle={this.toggle}
            isMobile={isMobile}>
            {isMobile && (
              <Menu
                menuList={this.menuList}
                pathname={location.pathname}
                handleTag={this.handleTag}
                theme={theme}
              />
            )}
          </Header>
          <Tags
            tagList={tagList}
            pathname={location.pathname}
            onClose={this.onClose}
          />
          <Content
            className="content"
            style={{
              backgroundColor: isTransparent || isIndex ? 'transparent' : '#fff'
            }}>
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>
    ) : (
      <div>{children}</div>
    )
  }
}

export default App
