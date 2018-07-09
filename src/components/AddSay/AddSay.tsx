import { Button, Form } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import * as React from 'react'
import Editor from '../common/Editor/Editor'
const FormItem = Form.Item
interface IProps extends FormComponentProps {
  say?: string
  addSay: (payload: object) => void
}
class AddSay extends React.Component<IProps, any> {
  public handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addSay(values)
      }
    })
  }
  public render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form onSubmit={this.handleSubmit} layout="inline">
          <FormItem>
            {getFieldDecorator('say', {
              rules: [{ required: true, message: '不能为空!' }]
            })(<Editor placeholder="记录自己的心情" />)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" style={{ marginTop: 10 }}>
              发表说说
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(AddSay)
