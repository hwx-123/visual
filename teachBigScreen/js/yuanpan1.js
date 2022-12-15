var dom = document.getElementById('container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
gaugeData[2].value = 1445/25;
  gaugeData[1].value = 522/25;
  gaugeData[0].value = 1967/25;
setInterval(function () {
    myChart.setOption({
    series: [
      {
        data: gaugeData,
        pointer: {
          show: false
        }
      }
    ]
    });
    }, 3000);
    
    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
    
    window.addEventListener('resize', myChart.resize);
    