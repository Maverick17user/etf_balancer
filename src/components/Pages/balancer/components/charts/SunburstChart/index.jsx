import React from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst'

const testDataSet = {
    "name": "nivo",
    "color": "hsl(170, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(131, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(302, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(247, 70%, 50%)",
                "loc": 136773
              },
              {
                "name": "xAxis",
                "color": "hsl(299, 70%, 50%)",
                "loc": 57975
              },
              {
                "name": "yAxis",
                "color": "hsl(149, 70%, 50%)",
                "loc": 155323
              },
              {
                "name": "layers",
                "color": "hsl(92, 70%, 50%)",
                "loc": 37158
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(229, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(145, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(218, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(243, 70%, 50%)",
                        "loc": 39811
                      },
                      {
                        "name": "slices",
                        "color": "hsl(262, 70%, 50%)",
                        "loc": 34802
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(49, 70%, 50%)",
                        "loc": 19337
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(135, 70%, 50%)",
                    "loc": 166510
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(195, 70%, 50%)",
                    "loc": 157113
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(323, 70%, 50%)",
                "loc": 163436
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(157, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(91, 70%, 50%)",
            "loc": 92544
          },
          {
            "name": "hsl",
            "color": "hsl(66, 70%, 50%)",
            "loc": 105635
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(89, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(125, 70%, 50%)",
            "loc": 51528
          },
          {
            "name": "resetClock",
            "color": "hsl(83, 70%, 50%)",
            "loc": 65349
          },
          {
            "name": "noop",
            "color": "hsl(227, 70%, 50%)",
            "loc": 51528
          },
          {
            "name": "tick",
            "color": "hsl(334, 70%, 50%)",
            "loc": 32106
          },
          {
            "name": "forceGC",
            "color": "hsl(71, 70%, 50%)",
            "loc": 155908
          },
          {
            "name": "stackTrace",
            "color": "hsl(73, 70%, 50%)",
            "loc": 73902
          },
          {
            "name": "dbg",
            "color": "hsl(37, 70%, 50%)",
            "loc": 39089
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(258, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(156, 70%, 50%)",
            "loc": 190721
          },
          {
            "name": "city",
            "color": "hsl(14, 70%, 50%)",
            "loc": 110961
          },
          {
            "name": "animal",
            "color": "hsl(89, 70%, 50%)",
            "loc": 148438
          },
          {
            "name": "movie",
            "color": "hsl(152, 70%, 50%)",
            "loc": 96735
          },
          {
            "name": "user",
            "color": "hsl(345, 70%, 50%)",
            "loc": 53402
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(21, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(342, 70%, 50%)",
            "loc": 46077
          },
          {
            "name": "intersect",
            "color": "hsl(91, 70%, 50%)",
            "loc": 168102
          },
          {
            "name": "merge",
            "color": "hsl(74, 70%, 50%)",
            "loc": 28872
          },
          {
            "name": "reverse",
            "color": "hsl(227, 70%, 50%)",
            "loc": 176029
          },
          {
            "name": "toArray",
            "color": "hsl(141, 70%, 50%)",
            "loc": 168489
          },
          {
            "name": "toObject",
            "color": "hsl(178, 70%, 50%)",
            "loc": 171640
          },
          {
            "name": "fromCSV",
            "color": "hsl(142, 70%, 50%)",
            "loc": 41680
          },
          {
            "name": "slice",
            "color": "hsl(345, 70%, 50%)",
            "loc": 182740
          },
          {
            "name": "append",
            "color": "hsl(69, 70%, 50%)",
            "loc": 166891
          },
          {
            "name": "prepend",
            "color": "hsl(139, 70%, 50%)",
            "loc": 73137
          },
          {
            "name": "shuffle",
            "color": "hsl(169, 70%, 50%)",
            "loc": 51018
          },
          {
            "name": "pick",
            "color": "hsl(43, 70%, 50%)",
            "loc": 50454
          },
          {
            "name": "plouc",
            "color": "hsl(11, 70%, 50%)",
            "loc": 122065
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(226, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(258, 70%, 50%)",
            "loc": 114783
          },
          {
            "name": "slugify",
            "color": "hsl(110, 70%, 50%)",
            "loc": 40506
          },
          {
            "name": "snakeCase",
            "color": "hsl(219, 70%, 50%)",
            "loc": 35288
          },
          {
            "name": "camelCase",
            "color": "hsl(174, 70%, 50%)",
            "loc": 164752
          },
          {
            "name": "repeat",
            "color": "hsl(238, 70%, 50%)",
            "loc": 136668
          },
          {
            "name": "padLeft",
            "color": "hsl(330, 70%, 50%)",
            "loc": 92017
          },
          {
            "name": "padRight",
            "color": "hsl(264, 70%, 50%)",
            "loc": 48993
          },
          {
            "name": "sanitize",
            "color": "hsl(26, 70%, 50%)",
            "loc": 111591
          },
          {
            "name": "ploucify",
            "color": "hsl(334, 70%, 50%)",
            "loc": 100663
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(188, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(108, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(314, 70%, 50%)",
                "loc": 65737
              },
              {
                "name": "HOWDY",
                "color": "hsl(77, 70%, 50%)",
                "loc": 124731
              },
              {
                "name": "aloha",
                "color": "hsl(287, 70%, 50%)",
                "loc": 160736
              },
              {
                "name": "AHOY",
                "color": "hsl(113, 70%, 50%)",
                "loc": 188078
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(257, 70%, 50%)",
            "loc": 68519
          },
          {
            "name": "path",
            "color": "hsl(301, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(134, 70%, 50%)",
                "loc": 109242
              },
              {
                "name": "pathB",
                "color": "hsl(14, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(240, 70%, 50%)",
                    "loc": 20347
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(179, 70%, 50%)",
                    "loc": 139294
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(41, 70%, 50%)",
                    "loc": 3943
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(52, 70%, 50%)",
                    "loc": 155920
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(232, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(251, 70%, 50%)",
                    "loc": 110879
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(123, 70%, 50%)",
                    "loc": 113653
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(335, 70%, 50%)",
                    "loc": 35167
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(239, 70%, 50%)",
                    "loc": 137234
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(125, 70%, 50%)",
                    "loc": 122520
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(212, 70%, 50%)",
                    "loc": 157176
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(200, 70%, 50%)",
                    "loc": 38250
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(176, 70%, 50%)",
                    "loc": 44612
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(104, 70%, 50%)",
                    "loc": 117638
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

const SunburstChart = ({ data = testDataSet }) => (
    <div style={{ width: 500, height: 500 }}>
        <ResponsiveSunburst
            data={data}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            id="name"
            value="loc"
            cornerRadius={2}
            borderWidth={6}
            borderColor={{ theme: 'background' }}
            colors={{ scheme: 'purple_blue_green' }}
            childColor={{ from: 'color', modifiers: [ [ 'brighter', '0' ] ] }}
            enableArcLabels={true}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.4 ] ] }}
        />
    </div>
)

export default SunburstChart