import { Button, message, Modal, Table, Tag } from 'antd'
import { ColumnProps } from 'antd/lib/table'
import * as React from 'react'
import { IPayload } from '../../actions/articles'
import SearchForm from './SearchForm'
import './style.less'
const confirm = Modal.confirm
interface IArticle {
  _id: string
  content: string
  title: string
  tag: string[]
  create_at: string
  access: string
  abstract: string
  type: string
}
interface IHistory {
  push: (pathname: string) => void
}
interface IProps {
  articles: IArticle[]
  history: IHistory
  total: number
  fetchArticle: (payload: IPayload) => void
  deleteArticle: (id: string) => void
}
class Articles extends React.Component<IProps> {
  public state = {
    pageIndex: 1,
    pageSize: 10
  }
  public onChange = (page: number, pageSize: number) => {
    this.setState(
      {
        pageIndex: page,
        pageSize
      },
      () => {
        this.props.fetchArticle(this.state)
      }
    )
  }
  public onShowSizeChange = (current: number, pageSize: number) => {
    this.setState(
      {
        pageIndex: current,
        pageSize
      },
      () => {
        this.props.fetchArticle({
          pageIndex: current,
          pageSize
        })
      }
    )
  }
  public componentDidMount() {
    this.props.fetchArticle(this.state)
  }
  public deleteArticle = (id: string) => {
    confirm({
      cancelText: '取消',
      okText: '确定',
      onOk: () => {
        this.props.deleteArticle(id)
      },
      title: '确定删除这篇文章吗？',
      onCancel() {
        message.warning('取消删除')
      }
    })
  }
  public render() {
    const { state, props } = this
    const { pageIndex, pageSize } = state
    const { articles, total } = props
    const columns: Array<ColumnProps<IArticle>> = [
      {
        key: 'title',
        render: text => <h4>{text.title}</h4>,
        title: '文章标题'
      },
      {
        dataIndex: 'abstract',
        key: 'abstract',
        title: '文章简介'
      },
      {
        key: 'tag',
        render: text => <Tag key={text.tag}>{text.tag}</Tag>,
        title: '标签'
      },
      {
        dataIndex: 'type',
        key: 'type',
        title: '分类'
      },
      {
        key: 'create_at',
        render: text => (
          <span>{new Date(text.create_at).toLocaleString()}</span>
        ),
        title: '发表时间'
      },
      {
        align: 'center',
        dataIndex: 'access',
        key: 'access',
        title: '浏览数量'
      },
      {
        key: 'action',
        render: article => (
          <span>
            <Button
              icon="edit"
              type="primary"
              size="small"
              style={{ marginRight: 10 }}>
              编辑
            </Button>
            <Button
              icon="delete"
              type="danger"
              size="small"
              onClick={() => this.deleteArticle(article._id)}>
              删除
            </Button>
          </span>
        ),
        title: '操作'
      }
    ]
    return (
      <>
        <div className="search-form">
          <SearchForm />
        </div>
        <Table
          columns={columns}
          bordered={true}
          dataSource={articles}
          rowKey="_id"
          pagination={{
            current: pageIndex,
            onChange: this.onChange,
            onShowSizeChange: this.onShowSizeChange,
            pageSize,
            showSizeChanger: true,
            total
          }}
        />
      </>
    )
  }
}
export default Articles
