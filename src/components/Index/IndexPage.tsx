import { Card, Col, Icon, Row } from 'antd'
import * as React from 'react'
import CountUp from 'react-countup'
import Bar from './Bar'
import BrokenLine from './BrokenLine'
import LastArticle, { IArticle } from './LastArticle'
import LastCollect from './LastCollect'
import LastSay from './LastSay'
import './styles.less'
export interface IInfo {
  access: number
  accessData: object[]
  sayNumber: number
  articleNumber: number
  collectNumber: number
  lastArticle: IArticle
  lastCollect: object
  lastSay: object
  data: object[]
}
interface IProps {
  info: IInfo
  fetchInfo: () => void
}
class IndexPage extends React.Component<IProps> {
  public componentDidMount() {
    this.props.fetchInfo()
  }
  public render() {
    const {
      access,
      accessData,
      articleNumber,
      collectNumber,
      data = [],
      lastArticle,
      lastCollect,
      lastSay,
      sayNumber
    } = this.props.info
    const list = [
      { value: access, title: '访问人次', icon: 'team', color: '#70ec9a' },
      {
        color: '#8fc9fb',
        icon: 'file',
        title: '文章数量',
        value: articleNumber
      },
      {
        color: '#ff0d01b8',
        icon: 'heart-o',
        title: '收藏条数',
        value: collectNumber
      },
      {
        color: '#f69899',
        icon: 'message',
        title: '说说条数',
        value: sayNumber
      }
    ]
    return (
      <div className="index-page">
        <Row>
          {list.map((item, index) => (
            <Col
              key={index}
              xs={24}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              xl={{ span: 6 }}
              xxl={{ span: 6 }}>
              <Card className="card" bordered={false} hoverable={true}>
                <div className="card-item">
                  <Icon
                    type={item.icon}
                    style={{ color: item.color }}
                    className="icon"
                  />
                  <div className="card-right">
                    <p className="title">{item.title}</p>
                    <CountUp
                      start={0}
                      end={item.value}
                      separator=","
                      duration={3}
                      style={{ fontSize: 25 }}
                    />
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={24} sm={{ span: 24 }} xl={{ span: 12 }}>
            <BrokenLine data={data} />
          </Col>
          <Col
            xs={24}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            xl={{ span: 12 }}
            xxl={{ span: 12 }}>
            <Bar accessData={accessData} />
          </Col>
        </Row>
        <Row className="last">
          <Col
            xs={24}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            xl={{ span: 12 }}
            xxl={{ span: 12 }}>
            <LastArticle lastArticle={lastArticle} />
          </Col>
          <Col
            xs={24}
            sm={{ span: 12 }}
            md={{ span: 12 }}
            xl={{ span: 6 }}
            xxl={{ span: 6 }}>
            <LastCollect lastCollect={lastCollect} />
          </Col>
          <Col
            xs={24}
            sm={{ span: 12 }}
            md={{ span: 12 }}
            xl={{ span: 6 }}
            xxl={{ span: 6 }}>
            <LastSay lastSay={lastSay} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default IndexPage
