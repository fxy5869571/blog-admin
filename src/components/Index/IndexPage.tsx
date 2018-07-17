import DataSet from '@antv/data-set'
import { BackTop, Card, Col, Icon, Row } from 'antd'
import { Axis, Chart, Geom, Legend, Tooltip } from 'bizcharts'
import * as React from 'react'
import LastArticle, { IArticle } from './LastArticle'
import LastCollect from './LastCollect'
import LastSay from './LastSay'
import './styles.less'
interface IInfo {
  access: number
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
  public onTooltipChange = (event: any) => {
    const { items } = event
    items.forEach((item: any) => {
      if (item.name === 'say') {
        item.name = '说说'
      } else if (item.name === 'collect') {
        item.name = '收藏'
      } else {
        item.name = '文章'
      }
    })
  }
  public itemFormatter = (text: string) => {
    if (text === 'say') {
      return '说说'
    } else if (text === 'collect') {
      return '收藏'
    } else {
      return '文章'
    }
  }
  public render() {
    const {
      access,
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
    const ds = new DataSet()
    const dv = ds.createView().source(data)
    dv.transform({
      fields: ['article', 'say', 'collect'], // 展开字段集,
      key: 'city', // key字段
      type: 'fold',
      value: 'temperature' // value字段
    })
    return (
      <div className="index-page">
        <BackTop />
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
                    <p className="number">{item.value}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Card className="card-chart">
          <Chart
            height={400}
            data={dv}
            forceFit={true}
            onTooltipChange={this.onTooltipChange}>
            <Legend itemFormatter={this.itemFormatter} />
            <Axis
              name="month"
              label={{
                formatter: (val: number) => val
              }}
            />
            <Axis
              name="temperature"
              label={{ formatter: (val: number) => val }}
            />

            <Tooltip crosshairs={{ type: 'y' }} />
            <Geom
              type="line"
              position="month*temperature"
              size={3}
              color={'city'}
              shape={'smooth'}
            />
            <Geom
              type="point"
              position="month*temperature"
              size={4}
              shape={'circle'}
              color={'city'}
              style={{ stroke: '#fff', lineWidth: 1 }}
            />
          </Chart>
        </Card>
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
