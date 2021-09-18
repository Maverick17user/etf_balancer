import React from 'react'
import { ResponsiveSankey } from '@nivo/sankey'

const testDataSet = {
    "nodes": [
      {
        "id": "John",
        "color": "hsl(68, 70%, 50%)"
      },
      {
        "id": "Raoul",
        "color": "hsl(189, 70%, 50%)"
      },
      {
        "id": "Jane",
        "color": "hsl(308, 70%, 50%)"
      },
      {
        "id": "Marcel",
        "color": "hsl(226, 70%, 50%)"
      },
      {
        "id": "Ibrahim",
        "color": "hsl(123, 70%, 50%)"
      },
      {
        "id": "Junko",
        "color": "hsl(136, 70%, 50%)"
      }
    ],
    "links": [
      {
        "source": "Ibrahim",
        "target": "John",
        "value": 162
      },
      {
        "source": "Ibrahim",
        "target": "Marcel",
        "value": 71
      },
      {
        "source": "Ibrahim",
        "target": "Jane",
        "value": 167
      },
      {
        "source": "Ibrahim",
        "target": "Raoul",
        "value": 43
      },
      {
        "source": "Jane",
        "target": "Raoul",
        "value": 109
      },
      {
        "source": "Junko",
        "target": "Raoul",
        "value": 22
      },
      {
        "source": "Junko",
        "target": "Jane",
        "value": 67
      },
      {
        "source": "Junko",
        "target": "Ibrahim",
        "value": 8
      },
      {
        "source": "John",
        "target": "Raoul",
        "value": 170
      },
      {
        "source": "John",
        "target": "Marcel",
        "value": 150
      },
      {
        "source": "Marcel",
        "target": "Raoul",
        "value": 30
      }
    ]
  }

const SankeyChart = ({ data = testDataSet }) => (
    <div style={{ width: 1000, height: 500 }}>
        <ResponsiveSankey
            data={data}
            margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
            align="justify"
            colors={{ scheme: 'category10' }}
            nodeOpacity={1}
            nodeThickness={18}
            nodeInnerPadding={3}
            nodeSpacing={24}
            nodeBorderWidth={0}
            nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
            linkOpacity={0.5}
            linkHoverOthersOpacity={0.1}
            enableLinkGradient={true}
            labelPosition="outside"
            labelOrientation="vertical"
            labelPadding={16}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 130,
                    itemWidth: 100,
                    itemHeight: 14,
                    itemDirection: 'right-to-left',
                    itemsSpacing: 2,
                    itemTextColor: '#999',
                    symbolSize: 14,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    </div>
)

export default SankeyChart
