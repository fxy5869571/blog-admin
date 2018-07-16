import { Button, Form, Input, Select } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import * as React from 'react'
import { IPayload } from '../../actions/articles'
const Option = Select.Option
const FormItem = Form.Item
interface IArticle extends FormComponentProps {
  title?: string
  abstract?: string
  type?: string
  payload: object
  fetchArticle: (payload: IPayload) => void
}
class Login extends React.Component<IArticle> {
  public handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        this.props.fetchArticle({ ...this.props.payload, ...values })
      }
    })
  }
  public render() {
    const { getFieldDecorator } = this.props.form
    const selectBefore = getFieldDecorator('nature', { initialValue: '' })(
      <Select style={{ width: 70 }}>
        <Option value="">全部</Option>
        <Option value="原创">原创</Option>
        <Option value="转载">转载</Option>
      </Select>
    )
    return (
      <Form onSubmit={this.handleSubmit} layout="inline">
        <FormItem hasFeedback={true} label="文章标题">
          {getFieldDecorator('title')(
            <Input
              addonBefore={selectBefore}
              placeholder="搜索文章标题"
              style={{ width: 220 }}
            />
          )}
        </FormItem>
        <FormItem hasFeedback={true} label="文章类型" style={{ width: 300 }}>
          {getFieldDecorator('type', { initialValue: '' })(
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
        <FormItem>
          <Button type="primary" htmlType="submit" icon="search">
            查询
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(Login)
