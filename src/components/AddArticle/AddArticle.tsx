import { Button, Form, Input, Select } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import * as React from 'react'
import Editor from '../common/Editor/Editor'
const Option = Select.Option
const FormItem = Form.Item
export interface IArticle extends FormComponentProps {
  title: string
  abstract: string
  tag: string
  type: string
  content: string
  nature: string
  addArticle: (payload: object) => void
}
class AddArticle extends React.Component<IArticle> {
  public handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addArticle(values)
      }
    })
  }
  public render() {
    const { getFieldDecorator } = this.props.form
    const selectBefore = getFieldDecorator('nature', { initialValue: '原创' })(
      <Select style={{ width: 70 }}>
        <Option value="原创">原创</Option>
        <Option value="转载">转载</Option>
      </Select>
    )
    return (
      <div>
        <Form onSubmit={this.handleSubmit} layout="inline">
          <FormItem hasFeedback={true} label="文章标题">
            {getFieldDecorator('title', {
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
              rules: [{ required: true, message: '文章标签!' }]
            })(<Input placeholder="填写个文章标签吧" style={{ width: 200 }} />)}
          </FormItem>
          <FormItem hasFeedback={true} label="文章类型" style={{ width: 300 }}>
            {getFieldDecorator('type', {
              initialValue: '',
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
              rules: [{ required: true, message: '文章摘要!' }]
            })(<Input placeholder="文章摘要!" style={{ width: 320 }} />)}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              发表文章
            </Button>
          </FormItem>
          <FormItem>
            {getFieldDecorator('content', {
              rules: [{ required: true, message: '文章摘要!' }]
            })(<Editor />)}
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(AddArticle)
