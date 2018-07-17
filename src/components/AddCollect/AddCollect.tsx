import { Button, Form, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import * as React from 'react'
import Editor from '../common/Editor/Editor'
const FormItem = Form.Item
interface IArticle extends FormComponentProps {
  title: string
  tag: string
  content: string
  addCollect: (payload: object) => void
}
class AddCollect extends React.Component<IArticle> {
  public handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addCollect(values)
      }
    })
  }
  public render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form onSubmit={this.handleSubmit} layout="inline">
          <FormItem hasFeedback={true} label="收藏标题">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请填写收藏标题!' }]
            })(<Input placeholder="请填写收藏标题" style={{ width: 220 }} />)}
          </FormItem>
          <FormItem hasFeedback={true} label="收藏标签">
            {getFieldDecorator('tag', {
              rules: [{ required: true, message: '收藏标签!' }]
            })(<Input placeholder="填写个收藏标签吧" style={{ width: 200 }} />)}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              添加收藏
            </Button>
          </FormItem>
          <FormItem>
            {getFieldDecorator('content', {
              rules: [{ required: true, message: '收藏摘要!' }]
            })(<Editor placeholder="填写个收藏地址吧" />)}
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(AddCollect)
