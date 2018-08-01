import DataSet from '@antv/data-set'
import { Card } from 'antd'
import * as React from 'react'

import { Axis, Chart, Geom, Legend, Tooltip } from 'bizcharts'

interface IProps {
  data: object
}
const onTooltipChange = (event: any) => {
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
const itemFormatter = (text: string) => {
  if (text === 'say') {
    return '说说'
  } else if (text === 'collect') {
    return '收藏'
  } else {
    return '文章'
  }
}
const BrokeLine = ({ data }: IProps) => {
  const ds = new DataSet()
  const dv = ds.createView().source(data)
  dv.transform({
    fields: ['article', 'say', 'collect'], // 展开字段集,
    key: 'city', // key字段
    type: 'fold',
    value: 'temperature' // value字段
  })
  return (
    <Card className="card-chart" hoverable={true} bordered={false}>
      <p className="title">博客各月份更新数据统计</p>
      <Chart
        height={350}
        style={{ maxWidth: 750 }}
        data={dv}
        forceFit={true}
        onTooltipChange={onTooltipChange}>
        <Legend itemFormatter={itemFormatter} />
        <Axis
          name="month"
          label={{
            formatter: (val: number) => val
          }}
        />
        <Axis name="temperature" label={{ formatter: (val: number) => val }} />

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
  )
}

export default BrokeLine
