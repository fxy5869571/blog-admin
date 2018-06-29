import { Button, Form, Icon, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import * as React from 'react'
import './style.less'
const FormItem = Form.Item
interface IUserFormProps extends FormComponentProps {
  userName: string
  password: string
}
class Login extends React.Component<IUserFormProps, any> {
  public render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login">
        <div className="logo">
          <img alt="logo" src="http://antd-admin.zuiidea.com/public/logo.svg" />
          <span>Blog ADMIN</span>
        </div>
        <Form>
          <FormItem hasFeedback={true}>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '账号不能为空!' }]
            })(
              <Input
                prefix={
                  <Icon
                    type="user"
                    style={{ color: 'rgba(0,0,0,.5)', fontSize: 16 }}
                  />
                }
                placeholder="请输入账号"
              />
            )}
          </FormItem>
          <FormItem hasFeedback={true}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '密码不能为空!' }]
            })(
              <Input
                prefix={
                  <Icon
                    type="lock"
                    style={{ color: 'rgba(0,0,0,.5)', fontSize: 16 }}
                  />
                }
                type="password"
                placeholder="请输入密码"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              登录
            </Button>
          </FormItem>
        </Form>
        <p>
          <span>Username：guest</span>
          <span>Password：guest</span>
        </p>
      </div>
    )
  }
}
export default Form.create()(Login)
