import { AutoComplete, Icon, Input, Layout } from 'antd'
import * as React from 'react'
import { isNavBar } from '../../../common'
import './style.less'
const { Header } = Layout
interface IProps {
  collapsed: boolean
  toggle: () => void
}
class BlogHeader extends React.Component<IProps> {
  public state = { options: [], valueTitle: '' }
  public onAutoCompleteSelect = () => {
    console.log(11)
  }
  public handleSearch = () => {
    console.log(11)
  }
  public render() {
    const { collapsed, toggle } = this.props
    const { options, valueTitle } = this.state
    return (
      <Header className="header">
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
        {!isNavBar && (
          <div>
            <AutoComplete
              dataSource={options}
              optionLabelProp="value"
              style={{ width: 300 }}
              value={valueTitle}
              onSelect={this.onAutoCompleteSelect}
              onSearch={this.handleSearch}
              placeholder="全局搜索菜单，功能超棒">
              <Input suffix={<Icon type="search" />} />
            </AutoComplete>
          </div>
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
