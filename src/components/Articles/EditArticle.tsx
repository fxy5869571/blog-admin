import { Form, Input, Modal, Select } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import * as React from 'react'
import Editor from '../common/Editor/Editor'
const Option = Select.Option
const FormItem = Form.Item
interface IArticle extends FormComponentProps {
  _id?: string
  title?: string
  abstract?: string
  visible: boolean
  tag?: any
  type?: string
  content?: string
  nature?: string
  addArticle?: (payload: object) => void
}
interface IState {
  visible: boolean
}
class Login extends React.Component<IArticle> {
  public static getDerivedStateFromProps(
    { visible }: IArticle,
    prevState: IState
  ) {
    console.log(prevState)
    if (visible === prevState.visible) {
      return null
    } else {
      return {
        visible
      }
    }
  }
  public state = {
    visible: false
  }
  public handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }
  public handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  public handleOk = () => {
    this.setState({
      visible: false
    })
  }
  public render() {
    const { getFieldDecorator } = this.props.form
    const { content, type, tag, nature, title, abstract } = this.props
    console.log(this.state.visible)
    const selectBefore = getFieldDecorator('nature', { initialValue: nature })(
      <Select style={{ width: 70 }}>
        <Option value="原创">原创</Option>
        <Option value="转载">转载</Option>
      </Select>
    )
    return (
      <Modal
        width={1400}
        destroyOnClose={true}
        title="文章编辑"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}>
        <Form onSubmit={this.handleSubmit} layout="inline">
          <FormItem hasFeedback={true} label="文章标题">
            {getFieldDecorator('title', {
              initialValue: title,
              rules: [{ required: true, message: '请填写文章标题!' }]
            })(
              <Input
                addonBefore={selectBefore}
                placeholder="请填写文章标题"
                style={{ width: 220 }}
              />
            )}
          </FormItem>
          <FormItem hasFeedback={true} label="文章标签">
            {getFieldDecorator('tag', {
              initialValue: tag && tag.title,
              rules: [{ required: true, message: '文章标签!' }]
            })(<Input placeholder="填写个文章标签吧" style={{ width: 200 }} />)}
          </FormItem>
          <FormItem hasFeedback={true} label="文章类型" style={{ width: 300 }}>
            {getFieldDecorator('type', {
              initialValue: type,
              rules: [{ required: true, message: '文章类型!' }]
            })(
              <Select style={{ width: 200 }}>
                <Option value="">请选择类型</Option>
                <Option value="typescript">typescript</Option>
                <Option value="javascript">javascript</Option>
                <Option value="react">react</Option>
                <Option value="node">node</Option>
                <Option value="css">css</Option>
              </Select>
            )}
          </FormItem>
          <FormItem hasFeedback={true} label="文章摘要">
            {getFieldDecorator('abstract', {
              initialValue: abstract,
              rules: [{ required: true, message: '文章摘要!' }]
            })(<Input placeholder="文章摘要!" style={{ width: 320 }} />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('content', {
              initialValue: content,
              rules: [{ required: true, message: '文章摘要!' }]
            })(<Editor />)}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(Login)
