import { Button, Form, Icon, Input } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import * as React from 'react'
import './style.less'
const FormItem = Form.Item

interface IProps extends FormComponentProps {
  userName: string
  password: string
  login: (payload: object) => void
  loading: boolean
  token?: string
  history: IPush
}
interface IPush {
  push: (pathname: string) => void
}

class Login extends React.Component<IProps, any> {
  public static getDerivedStateFromProps(props: IProps) {
    const { history, token } = props
    if (token) {
      history.push('/admin')
    }
    return null
  }
  public state = {}
  public handleSubmit = (e: any) => {
    e.preventDefault()
    const { form, login } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        login(values)
      }
    })
  }
  public isLogin = () => {
    const user = localStorage.getItem('user')
    if (user && user !== 'undefined') {
      this.props.history.push('/admin')
    } else {
      // this.props.history.push('/admin/login')
    }
  }
  public componentDidMount() {
    this.isLogin()
  }
  public render() {
    const { loading } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login">
        <div className="logo">
          <img alt="logo" src="http://antd-admin.zuiidea.com/public/logo.svg" />
          <span>Blog ADMIN</span>
        </div>
        <Form onSubmit={this.handleSubmit}>
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
              loading={loading}
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
