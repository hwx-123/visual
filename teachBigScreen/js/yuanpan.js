var app = {};

var option;

const gaugeData = [
{
value: 0,
name: 'world',
title: {
  offsetCenter: ['0%', '-50%']
},
detail: {
  valueAnimation: true,
  offsetCenter: ['0%', '-30%']
}
},
{
value: 0,
name: 'Mexico',
title: {
  offsetCenter: ['0%', '-10%']
},
detail: {
  valueAnimation: true,
  offsetCenter: ['0%', '10%']
}
},
{
value: 0,
name: 'Canada',
title: {
  offsetCenter: ['0%', '30%']
},
detail: {
  valueAnimation: true,
  offsetCenter: ['0%', '50%']
}
}
];
option = {
series: [
{
  type: 'gauge',
  startAngle: 90,
  endAngle: -270,
  pointer: {
    show: false
  },
  progress: {
    show: true,
    overlap: false,
    roundCap: true,
    clip: false,
    itemStyle: {
      borderWidth: 1,
      borderColor: '#464646'
    }
  },
  axisLine: {
    lineStyle: {
      width: 20
    }
  },
  splitLine: {
    show: false,
    distance: 0,
    length: 10
  },
  axisTick: {
    show: false
  },
  axisLabel: {
    show: false,
    distance: 50
  },
  data: gaugeData,
  title: {
    fontSize: 14
  },
  detail: {
    width: 7,
    height: 2,
    fontSize: 7,
    color: 'auto',
    borderColor: 'auto',
    borderRadius: 20,
    borderWidth: 1,
    formatter: '{value}%'
  }
}
]
};
