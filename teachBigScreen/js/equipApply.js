// 设置时间
let setTime = function() {
  let res = getCurrentTime();
  $(".currentTime").text(res.currentTime);
  $(".currentDate").text(res.currentDate);
  $(".currentWeek").text(res.currentWeek);
};
setTime();

// 定时更新时间
let timing = function() {
  setInterval(function() {
    setTime();
  }, 1000);
};
timing();



const myChart1 = echarts.init(document.getElementById("serviceTimeChart"),'dark');
const myChart2 = echarts.init(document.getElementById("gradeRateChart"));
const myChart3 = echarts.init(document.getElementById("mapChart"));
const myChart4 = echarts.init(document.getElementById("situationAnalysisChart"),'dark');
const myChart5 = echarts.init(document.getElementById("distributeByStatusChart"),'dark');
const myChart6 = echarts.init(document.getElementById("distributeByServerChart"));
//饼图
let serviceTimeChart = function() {
  let option = {
    backgroundColor:'',
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['product', '2000', '2001', '2002', '2003', '2004', '2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'],
        ['Live meat animals', 19.3,	24.8,	-2.6,	-25.9,	-10.8,	46.9,29.9	,19.4	,-12.3	,-27.0	,21.2	,-6.0	,16.0,	-0.2,	37.3,	-7.8,	-24.2	,-4.1,	0.6,	11.0,	-4.2,	6.6],
        ['Meats',17.4,	11.2,	0.6,	3.3,	29.2,	0.6, -8.8	,2.4,	-5.7,	-8.8,	10.3,	13.1,	8.5,	4.6,	36.9,	11.8,	-14.1,	3.4,	4.2,	4.5,	7.5,	27.0],
        ['Fish and shellfish 2/',11.5,	-2.2,	3.1,	9.0,	2.3,	6.6,10.7,	2.5,	3.6	,-7.0,	12.2,	13.4,	0.0,	8.0,	12.8,	-7.7,	4.0,	10.7,	4.4,	-2.1,	-2.3,	13.7],
        ['Dairy', -0.6,	8.1,	1.3,	10.3,	16.5,	7.7,	1.8,	7.8,	5.3,	-15.8,	-0.2,	11.8,	7.4,	4.6,	9.3,	2.1,	-0.2,	-1.6,	9.9,	6.4,	-2.5,	15.1],
        ['Vegetables',3.9,	10.3,	5.7,	15.9,	12.6,	5.4,	9.5,	9.6,	7.5,	-3.7,	15.7,	11.0,	2.6,	8.0	,1.8,	3.2,	10.5,	2.1,5.9	,4.1,	11.6,	1.4],
        ['Fruits',-2.8,	1.1,	8.4,	9.6,	7.4,	15.8,	11.8,	19.8,	7.3,	-2.6,	10.3,	12.4,	3.1,	8.5,	8.9,	7.7,	7.5,	7.2,	6.3,	4.0,	0.9,	10.7],
        ['Nuts',1.9,	-15.6,	3.2,	5.6,	38.2,	3.9,	-1.9,	8.2,	14.1,	-5.4,	14.3,	28.1,	10.4,	-2.8,	17.4,	17.1,	3.7,	15.1,	5.7,	-8.9,	-12.7,	13.3],
        ['Coffee, tea, and spices',-4.5, -30.2, 2.3, 17, 9.5, 19.9, 11.2, 14.1, 16.5, -7.5, 21.4, 55.1, -10.2, -12.5, 8.7, 2.9, -2.6, 9.1, -6.7, -0.3, -1, 17.7],
        ['Grains',2.8, 9.4, 12.1, 8.1, 11.1, 5.7, 15.1, 20.3, 29.4, -11, 4.4, 13, 13.1, 12.7, -2.1, 0, 1.9, 6.6, 11.6, 3.8, 6.8, 9.5],
        ['Vegetable oils',-1.2, -12.7, -0.6, 15.7, 48.8, 5.4, 19.3, 24.8, 61.9, -29.1, 11.6, 50.7, -8.2, 6.9, 10.1, -14.1, 3.5, 10.6, -3.1, -9.8, 6.1, 43.1],
        ['Sugar and candy',-1.2, 2.6, 14.4, 14.4, -0.5, 17.6, 22, -13.9, 14.8, 3.1, 30.5, 26.8, -7, -9.5, 5.4, 2.6, -0.6, 0.1, 0, 0.1, 10.6, 9.9],
        ['Cocoa and chocolate',-7.7, 9.3, 14.6, 38.5, 1.8, 10.7, -3.3, 0.1, 24, 5.4, 23.6, 9, -12.5, 1.5, 13.7, 2.8, 4.5, -1.3, -6, 5.6, 1.5, 11.5],
        ['Other edible products',-2.6, 6.6, 8.7, 44.9, 29.2, 15, 7.9, 2.3, 10.3, -8.3, 11, 20.1, 34, -9.5, -1, -0.5, -2.1, 8.5, 37.3, 2.3, 8.4, 13.8],
        ['Beverages 3/',9.1, 5.9, 13.6, 13.8, 6.4, 12.3, 16.8, 7.6, -0.8, -11.3, 6.2, 9.5, 7.1, 3.6, 6.4, 6.9, 5.6, 6.6, 4.2, 2.9, 1.1, 15.9]

      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { 
      top: '150%',
      left:'20%',
      right:'20%',
      // bottom:'-65%'
    },
    series: [
      {
        type: 'pie',
        id: 'pie',
        radius: '40%',
        center: ['50%', '50%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2012} ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012'
        }
      }
    ]
  };
  myChart1.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart1.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart1.setOption(option);
};
serviceTimeChart();

// 各种类进口量变化
let gradeRateChart = function() {
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: '15%',//图例距离整个容器底部的距离
      data: ['animals', 'plants', 'Beverages', 'Total'],
      textStyle: { 
        fontSize: 10,
        color: "#FFFDFE" }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,

      axisLine: {
        show:true,//是否显示轴线
        lineStyle: {
          color: '#fff',//刻度线的颜色
        }
      },
      data: [
        '2000','2001','2002','2003','2004','2005', '2006','2007','2008','2009','2010',2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021
      ]
      
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show:true,//是否显示轴线
        lineStyle: {
          color: '#fff',//刻度线的颜色
        }
      }
    },
    series: [
      {
        name: 'animals',
        type: 'line',
        //stack: 'Total',
        data: [
          16053.4, 16691.9, 16985.9, 17683.5, 19267.9, 20670.0, 21959.4, 22939.2,
          22871.4, 20573.7, 22981.7, 25632.5, 26545.7, 28219.3, 33875.3, 33191.7,
          31855.5, 34092.6, 35616.3, 35915.4, 35972.9, 42156.3
        ]
      },
      {
        name: 'plants',
        type: 'line',
        //stack: 'Total',
        data: [
          22447.3, 22115.0, 23877.3, 28169.0, 32113.5, 35810.4, 39663.9, 43965.1,
          51812.8, 47938.0, 54708.9, 67051.3, 69369.4, 70201.2, 73777.2, 75084.5,
          77738.9, 82597.0, 88912.3, 90308.9, 94764.0, 106622.9
        ]
      },
      {
        name: 'Beverages',
        type: 'line',
        //stack: 'Total',
        data: [
          4838.6, 5123.2, 5817.6, 6621.1, 7047.5, 7911.2, 9238.2, 9939.5, 9859.6,
          8749.9, 9293.2, 10174.1, 10894.4, 11290.9, 12013.7, 12841.7, 13558.9,
          14453.7, 15059.0, 15496.4, 15669.2, 18167.3
        ]
      },
      {
        name: 'Total',
        type: 'line',
        //stack: 'Total',
        data: [
          43339.3, 43930.1, 46680.8, 52473.6, 58428.9, 64391.6, 70861.5, 76843.8,
          84543.8, 77261.6, 86983.8, 102857.9, 106809.5, 109711.4, 119666.2,
          121117.9, 123153.3, 131143.3, 139587.6, 141720.7, 146406.1, 166946.5
        ]
      }
    ]
    
  };
  myChart2.setOption(option);
};
gradeRateChart();

//map
let mapChart = function() {
  let option = {
    tooltip: {
      trigger: "item"
    },
    visualMap: {  
      min: 0,  
      max: 1000000,  
      text:['High','Low'],  
      realtime: false,  
      calculable: true, 
      textStyle:{
        color:"red"
      } ,
      color: ['orangered','yellow','lightskyblue']  
  },  
    series: [
      {
        name: 'Sum Of FoodValue',  
        type: 'map',  
        mapType: 'world',  
        roam: true, 
        itemStyle:{  
            emphasis:{label:{show:true}}  
        },  
        
        itemStyle:{
          areaColor:'#0347ad',
          borderColor:"#0ec7ff",
        },
        data: [  
          {name: 'Afghanistan', value: 28397.812},  
          {name: 'Angola', value: 19549.124},  
          {name: 'Albania', value: 3150.143},  
          {name: 'United Arab Emirates', value: 8441.537},  
          {name: 'Argentina', value: 40374.224},  
          {name: 'Armenia', value: 2963.496},  
          {name: 'French Southern and Antarctic Lands', value: 268.065},  
          {name: 'Australia', value: 22404.488},  
          {name: 'Austria', value: 8401.924},  
          {name: 'Azerbaijan', value: 9094.718},  
          {name: 'Burundi', value: 9232.753},  
          {name: 'Belgium', value: 10941.288},  
          {name: 'Benin', value: 9509.798},  
          {name: 'Burkina Faso', value: 15540.284},  
          {name: 'Bangladesh', value: 151125.475},  
          {name: 'Bulgaria', value: 7389.175},  
          {name: 'The Bahamas', value: 66402.316},  
          {name: 'Bosnia and Herzegovina', value: 3845.929},  
          {name: 'Belarus', value: 9491.07},  
          {name: 'Belize', value: 308.595},  
          {name: 'Bermuda', value: 64.951},  
          {name: 'Bolivia', value: 716.939},  
          {name: 'Brazil', value: 195210.154},  
          {name: 'Brunei', value: 27.223},  
          {name: 'Bhutan', value: 716.939},  
          {name: 'Botswana', value: 1969.341},  
          {name: 'Central African Republic', value: 4349.921},  
          {name: 'Canada', value: 34126.24},  
          {name: 'Switzerland', value: 7830.534},  
          {name: 'Chile', value: 17150.76},  
          {name: 'China', value: 1359821.465},  
          {name: 'Ivory Coast', value: 60508.978},  
          {name: 'Cameroon', value: 20624.343},  
          {name: 'Democratic Republic of the Congo', value: 62191.161},  
          {name: 'Republic of the Congo', value: 3573.024},  
          {name: 'Colombia', value: 46444.798},  
          {name: 'Costa Rica', value: 4669.685},  
          {name: 'Cuba', value: 11281.768},  
          {name: 'Northern Cyprus', value: 1.468},  
          {name: 'Cyprus', value: 1103.685},  
          {name: 'Czech Republic', value: 10553.701},  
          {name: 'Germany', value: 83017.404},  
          {name: 'Djibouti', value: 834.036},  
          {name: 'Denmark', value: 5550.959},  
          {name: 'Dominican Republic', value: 10016.797},  
          {name: 'Algeria', value: 37062.82},  
          {name: 'Ecuador', value: 15001.072},  
          {name: 'Egypt', value: 78075.705},  
          {name: 'Eritrea', value: 5741.159},  
          {name: 'Spain', value: 46182.038},  
          {name: 'Estonia', value: 1298.533},  
          {name: 'Ethiopia', value: 87095.281},  
          {name: 'Finland', value: 5367.693},  
          {name: 'Fiji', value: 860.559},  
          {name: 'Falkland Islands', value: 49.581},  
          {name: 'France', value: 63230.866},  
          {name: 'Gabon', value: 1556.222},  
          {name: 'United Kingdom', value: 62066.35},  
          {name: 'Georgia', value: 4388.674},  
          {name: 'Ghana', value: 24262.901},  
          {name: 'Guinea', value: 10876.033},  
          {name: 'Gambia', value: 1680.64},  
          {name: 'Guinea Bissau', value: 10876.033},  
          {name: 'Equatorial Guinea', value: 696.167},  
          {name: 'Greece', value: 11109.999},  
          {name: 'Greenland', value: 56.546},  
          {name: 'Guatemala', value: 14341.576},  
          {name: 'French Guiana', value: 231.169},  
          {name: 'Guyana', value: 786.126},  
          {name: 'Honduras', value: 7621.204},  
          {name: 'Croatia', value: 4338.027},  
          {name: 'Haiti', value: 9896.4},  
          {name: 'Hungary', value: 10014.633},  
          {name: 'Indonesia', value: 240676.485},  
          {name: 'India', value: 1205624.648},  
          {name: 'Ireland', value: 4467.561},  
          {name: 'Iran', value: 240676.485},  
          {name: 'Iraq', value: 30962.38},  
          {name: 'Iceland', value: 318.042},  
          {name: 'Israel', value: 7420.368},  
          {name: 'Italy', value: 60508.978},  
          {name: 'Jamaica', value: 2741.485},  
          {name: 'Jordan', value: 6454.554},  
          {name: 'Japan', value: 127352.833},  
          {name: 'Kazakhstan', value: 15921.127},  
          {name: 'Kenya', value: 40909.194},  
          {name: 'Kyrgyzstan', value: 5334.223},  
          {name: 'Cambodia', value: 14364.931},  
          {name: 'South Korea', value: 51452.352},  
          {name: 'Kosovo', value: 97.743},  
          {name: 'Kuwait', value: 2991.58},  
          {name: 'Laos', value: 6395.713},  
          {name: 'Lebanon', value: 4341.092},  
          {name: 'Liberia', value: 3957.99},  
          {name: 'Libya', value: 6040.612},  
          {name: 'Sri Lanka', value: 20758.779},  
          {name: 'Lesotho', value: 2008.921},  
          {name: 'Lithuania', value: 3068.457},  
          {name: 'Luxembourg', value: 507.885},  
          {name: 'Latvia', value: 2090.519},  
          {name: 'Morocco', value: 31642.36},  
          {name: 'Moldova', value: 103.619},  
          {name: 'Madagascar', value: 21079.532},  
          {name: 'Mexico', value: 117886.404},  
          {name: 'Macedonia', value: 507.885},  
          {name: 'Mali', value: 13985.961},  
          {name: 'Myanmar', value: 51931.231},  
          {name: 'Montenegro', value: 620.078},  
          {name: 'Mongolia', value: 2712.738},  
          {name: 'Mozambique', value: 23967.265},  
          {name: 'Mauritania', value: 3609.42},  
          {name: 'Malawi', value: 15013.694},  
          {name: 'Malaysia', value: 28275.835},  
          {name: 'Namibia', value: 2178.967},  
          {name: 'New Caledonia', value: 246.379},  
          {name: 'Niger', value: 15893.746},  
          {name: 'Nigeria', value: 159707.78},  
          {name: 'Nicaragua', value: 5822.209},  
          {name: 'Netherlands', value: 16615.243},  
          {name: 'Norway', value: 4891.251},  
          {name: 'Nepal', value: 26846.016},  
          {name: 'New Zealand', value: 4368.136},  
          {name: 'Oman', value: 2802.768},  
          {name: 'Pakistan', value: 173149.306},  
          {name: 'Panama', value: 3678.128},  
          {name: 'Peru', value: 29262.83},  
          {name: 'Philippines', value: 93444.322},  
          {name: 'Papua New Guinea', value: 6858.945},  
          {name: 'Poland', value: 38198.754},  
          {name: 'Puerto Rico', value: 3709.671},  
          {name: 'North Korea', value: 1.468},  
          {name: 'Portugal', value: 10589.792},  
          {name: 'Paraguay', value: 6459.721},  
          {name: 'Qatar', value: 1749.713},  
          {name: 'Romania', value: 21861.476},  
          {name: 'Russia', value: 21861.476},  
          {name: 'Rwanda', value: 10836.732},  
          {name: 'Western Sahara', value: 514.648},  
          {name: 'Saudi Arabia', value: 27258.387},  
          {name: 'Sudan', value: 35652.002},  
          {name: 'South Sudan', value: 9940.929},  
          {name: 'Senegal', value: 12950.564},  
          {name: 'Solomon Islands', value: 526.447},  
          {name: 'Sierra Leone', value: 5751.976},  
          {name: 'El Salvador', value: 6218.195},  
          {name: 'Somaliland', value: 9636.173},  
          {name: 'Somalia', value: 9636.173},  
          {name: 'Republic of Serbia', value: 3573.024},  
          {name: 'Suriname', value: 524.96},  
          {name: 'Slovakia', value: 5433.437},  
          {name: 'Slovenia', value: 2054.232},  
          {name: 'Sweden', value: 9382.297},  
          {name: 'Swaziland', value: 1193.148},  
          {name: 'Syria', value: 7830.534},  
          {name: 'Chad', value: 11720.781},  
          {name: 'Togo', value: 6306.014},  
          {name: 'Thailand', value: 66402.316},  
          {name: 'Tajikistan', value: 7627.326},  
          {name: 'Turkmenistan', value: 5041.995},  
          {name: 'East Timor', value: 10016.797},  
          {name: 'Trinidad and Tobago', value: 1328.095},  
          {name: 'Tunisia', value: 10631.83},  
          {name: 'Turkey', value: 72137.546},  
          {name: 'United Republic of Tanzania', value: 44973.33},  
          {name: 'Uganda', value: 33987.213},  
          {name: 'Ukraine', value: 46050.22},  
          {name: 'Uruguay', value: 3371.982},  
          {name: 'Uzbekistan', value: 27769.27},  
          {name: 'Venezuela', value: 236.299},  
          {name: 'Vietnam', value: 89047.397},  
          {name: 'Vanuatu', value: 236.299},  
          {name: 'West Bank', value: 13.565},  
          {name: 'Yemen', value: 22763.008},  
          {name: 'South Africa', value: 51452.352},  
          {name: 'Zambia', value: 13216.985},  
          {name: 'Zimbabwe', value: 13076.978}  
          ] 
      },
    ]
  };
  myChart3.setOption(option);
};
mapChart();
//折线图
let situationAnalysisChart = function() {
  let option = {
    backgroundColor:'',
    legend: {
      orient:'horizontal',
      itemHeight:6,
      itemSize:6,
      top:'18',
      x:'left',
      y:'top',

    },
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['product', '2000', '2001', '2002', '2003', '2004', '2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'],
        ['Live meat animals', 19.3,	24.8,	-2.6,	-25.9,	-10.8,	46.9,29.9	,19.4	,-12.3	,-27.0	,21.2	,-6.0	,16.0,	-0.2,	37.3,	-7.8,	-24.2	,-4.1,	0.6,	11.0,	-4.2,	6.6],
        ['Meats',17.4,	11.2,	0.6,	3.3,	29.2,	0.6, -8.8	,2.4,	-5.7,	-8.8,	10.3,	13.1,	8.5,	4.6,	36.9,	11.8,	-14.1,	3.4,	4.2,	4.5,	7.5,	27.0],
        ['Fish and shellfish 2/',11.5,	-2.2,	3.1,	9.0,	2.3,	6.6,10.7,	2.5,	3.6	,-7.0,	12.2,	13.4,	0.0,	8.0,	12.8,	-7.7,	4.0,	10.7,	4.4,	-2.1,	-2.3,	13.7],
        ['Dairy', -0.6,	8.1,	1.3,	10.3,	16.5,	7.7,	1.8,	7.8,	5.3,	-15.8,	-0.2,	11.8,	7.4,	4.6,	9.3,	2.1,	-0.2,	-1.6,	9.9,	6.4,	-2.5,	15.1],
        ['Vegetables',3.9,	10.3,	5.7,	15.9,	12.6,	5.4,	9.5,	9.6,	7.5,	-3.7,	15.7,	11.0,	2.6,	8.0	,1.8,	3.2,	10.5,	2.1,5.9	,4.1,	11.6,	1.4],
        ['Fruits',-2.8,	1.1,	8.4,	9.6,	7.4,	15.8,	11.8,	19.8,	7.3,	-2.6,	10.3,	12.4,	3.1,	8.5,	8.9,	7.7,	7.5,	7.2,	6.3,	4.0,	0.9,	10.7],
        ['Nuts',1.9,	-15.6,	3.2,	5.6,	38.2,	3.9,	-1.9,	8.2,	14.1,	-5.4,	14.3,	28.1,	10.4,	-2.8,	17.4,	17.1,	3.7,	15.1,	5.7,	-8.9,	-12.7,	13.3],
        ['Coffee, tea, and spices',-4.5, -30.2, 2.3, 17, 9.5, 19.9, 11.2, 14.1, 16.5, -7.5, 21.4, 55.1, -10.2, -12.5, 8.7, 2.9, -2.6, 9.1, -6.7, -0.3, -1, 17.7],
        ['Grains',2.8, 9.4, 12.1, 8.1, 11.1, 5.7, 15.1, 20.3, 29.4, -11, 4.4, 13, 13.1, 12.7, -2.1, 0, 1.9, 6.6, 11.6, 3.8, 6.8, 9.5],
        ['Vegetable oils',-1.2, -12.7, -0.6, 15.7, 48.8, 5.4, 19.3, 24.8, 61.9, -29.1, 11.6, 50.7, -8.2, 6.9, 10.1, -14.1, 3.5, 10.6, -3.1, -9.8, 6.1, 43.1],
        ['Sugar and candy',-1.2, 2.6, 14.4, 14.4, -0.5, 17.6, 22, -13.9, 14.8, 3.1, 30.5, 26.8, -7, -9.5, 5.4, 2.6, -0.6, 0.1, 0, 0.1, 10.6, 9.9],
        ['Cocoa and chocolate',-7.7, 9.3, 14.6, 38.5, 1.8, 10.7, -3.3, 0.1, 24, 5.4, 23.6, 9, -12.5, 1.5, 13.7, 2.8, 4.5, -1.3, -6, 5.6, 1.5, 11.5],
        ['Other edible products',-2.6, 6.6, 8.7, 44.9, 29.2, 15, 7.9, 2.3, 10.3, -8.3, 11, 20.1, 34, -9.5, -1, -0.5, -2.1, 8.5, 37.3, 2.3, 8.4, 13.8],
        ['Beverages 3/',9.1, 5.9, 13.6, 13.8, 6.4, 12.3, 16.8, 7.6, -0.8, -11.3, 6.2, 9.5, 7.1, 3.6, 6.4, 6.9, 5.6, 6.6, 4.2, 2.9, 1.1, 15.9]

      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { 
      top: '35%',
      left:'10%',
      right:'10%',
      bottom:'10%'
    },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
    ]
  };
  myChart4.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart1.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart4.setOption(option);
};
situationAnalysisChart();

//故障状态分布
let distributeByStatusChart = function() {
  
  let option = {
    backgroundColor:'',
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   type: 'shadow'
      // }
    },
    legend: {
      top: '5%',//图例距离整个容器底部的距离
      textStyle: { 
        fontSize: 10,
        color: "#FFFDFE" }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['Guatemala', 'Spain', 'China', 'Peru', 'Canada', 'Mexico']
    },
    series: [
      {
        name: '2021',
        type: 'bar',
        data: [304.0,	383.2,	506.5,	644.4,	3603.9, 7791.7]
      },
      {
        name: '2020',
        type: 'bar',
        data: [274.1,	369.3,	507.2,	596.2,	3365.1,	8168.1]
      }
    ]
  };
    myChart5.setOption(option);
};
distributeByStatusChart();
//保修服务分布
let distributeByServerChart = function() {
  let option = {
  
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    // legend: {
    //   orient: 'vertical',
    //   x:'left',
    //   textStyle:{
    //                           fontSize: 10,//字体大小
    //                           color: '#ffffff'//字体颜色
    //                       },
    //   data: ['beef', 'chicken, fish','pig, sheep, shrimp', 'bread, potatoes, corn, vegetables']
      
    // },
    
    series: [
      {
        name: 'Food',
        type: 'funnel',
        left: '0%',
        top: 6,
        bottom: 6,
        width: '100%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'ascending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 60, name: 'pig, sheep, shrimp'},
          { value: 40, name: 'chicken, fish' },
          { value: 20, name: 'beef' },
          { value: 80, name: 'bread, potatoes, corn, vegetables' },
          
        ]
      }
    ]
  };
  myChart6.setOption(option);
};
distributeByServerChart();


//图例适应屏幕变化
let chartResize = function(){
  myChart1.resize();
  myChart2.resize();
  myChart3.resize();
  myChart4.resize();
  myChart5.resize();
  myChart6.resize();
}
window.onresize = debounce(chartResize,500);
