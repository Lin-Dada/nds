$(function() {
    echart_map();
	echart_score();
	echart_hack();
	echart_dataflow() ;
	echart_from();
    // 点击跳转
    $('#chart_map').click(function() {
        // window.location.href = '';
    });
    $('.t_btn2').click(function() {
        // window.location.href = '';
    });
});
function echart_dataflow() {
//自适应宽
//$("#main").width(window.innerWidth);
$("#dataflow").width($("card_div").width());
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('dataflow'),'roma');
option_flow = {
title : {
	text: 'Network Traffic of Last 60 Seconds ',
	subtext: 'flows per second'
},
tooltip : {
	trigger: 'axis'
},
legend: {
	//data:['意向']
},
toolbox: {
	show : false,
	feature : {
		mark : {show: true},
		dataView : {show: true, readOnly: false},
		magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
		restore : {show: true},
		saveAsImage : {show: true}
	}
},
calculable : true,
xAxis : [
	{
		show:false,
		type : 'category',
		boundaryGap : false,
		data : [' ',' ',' ',' ',' ',' ',' ',' ','1 ',' ',' ',' ',
			' ',' ',' ',' ',' ',' ',' ',' ','1 ',' ',' ',' ',
			' ',' ',' ',' ',' ',' ',' ',' ','1 ',' ',' ',' ',
			' ',' ',' ',' ',' ',' ',' ',' ','1 ',' ',' ',' ',
			' ',' ',' ',' ',' ',' ',' ',' ','1 ',' ',' ',' ',]
	}
],
yAxis : [
	{
		type : 'value'
	}
],
color:['#62d1de'],
series : [
	{
		name:'',
		type:'line',
		smooth:true,
		itemStyle: {normal: {areaStyle: {type: 'default'}}},
		data:['1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822',
			'1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822',
			'1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822',
			'1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822',
			'1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822']
	},
],
grid: {
	show: false,
	borderColor: '#19507c',
	x: 50,
	x2: 20,
	bottom: '3%'
},
animation: false
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option_flow);
	var timeTicket_flow;
	var data = [1200,1400, 808, 811, 626, 488, 1600, 1100, 500, 300, 1998, 822,
	1200,1400, 808, 811, 626, 488, 1600, 1100, 500, 300, 1998, 822,
	1200,1400, 808, 811, 626, 488, 1600, 1100, 500, 300, 1998, 822,
	1200,1400, 808, 811, 626, 488, 1600, 1100, 500, 300, 1998, 822,
	1200,1400, 808, 811, 626, 488, 1600, 1100, 500, 300, 1998, 822,];
	var newdata;
	clearInterval(timeTicket_flow);
	timeTicket_flow = setInterval(function (){
	/*for (var i=0;i<60;i++)
	{
		data[i] = data[i] + parseInt((Math.random()*100).toFixed(0));
	}*/
	newdata = (Math.random()*1600).toFixed(0)
	data = data.slice(1);
	data.push(newdata);
    //alert(data);
	option_flow.series[0].data = data;
	myChart.setOption(option_flow, true);
	},1000);
}
function echart_hack() {
//自适应宽
//$("#main").width(window.innerWidth);
//$("#chart_score").width($("card_score").width());
$("#chart_hack").height(window.innerHeight/2.5);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart_hack'),'macarons');
option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['DDoS','PortScan','BOT','Infiltration','Web Attack','Patator','DoS']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['7days ago','6days ago','5days ago','4days ago','3days ago','2days ago','1day ago']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
	grid: {
	show: false,
	borderColor: '#19507c',
	x: 50,
	x2: 40
	},
    series : [
        {
            name:'DDoS',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'PortScan',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'BOT',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'Infiltration',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'Web Attack',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name:'Patator',
            type:'line',
            stack: '总量',
            data:[220, 432, 601, 534, 1390, 1230, 1120]
        },
        {
            name:'DoS',
            type:'line',
            stack: '总量',
            data:[720, 832, 801, 834, 1190, 1230, 1220]
        }
    ]
};
myChart.setOption(option);
}
function echart_score() {
//自适应宽
//$("#main").width(window.innerWidth);
//$("#chart_score").width($("card_score").width());
$("#chart_score").height(window.innerHeight/3);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart_score'),'roma');
option1 = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'',
            type:'gauge',
            detail : {formatter:'{value}'},
            data:[{value: 90, name: 'Score'}]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option1);
var timeTicket_score;
clearInterval(timeTicket_score);
timeTicket_score = setInterval(function (){
    option1.series[0].data[0].value = (Math.random()*30).toFixed(0) - 0 + 70;
    myChart.setOption(option1, true);
},2000);
}
function echart_from() {
//自适应宽
//$("#main").width(window.innerWidth);
//$("#chart_from").width($("card_score").width());
$("#chart_from").height(window.innerHeight/2.5);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart_from'),'roma');
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
            x: '50%',               // for funnel
            max: 40,                // for funnel
            sort : 'ascending',     // for funnel 
            data:[
                {value:10, name:'Taiwan'},
                {value:5, name:'Hainan'},
                {value:15, name:'Guangxi'},
                {value:25, name:'Xinjiang'},
                {value:20, name:'Jiangsu'},
                {value:35, name:'Shanghai'},
                {value:30, name:'Guangzhou'},
                {value:40, name:'Beijing'}
            ]
        }
    ]
};
var timeTicket;
clearInterval(timeTicket);
timeTicket = setInterval(function (){
    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000); 
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
}
function echart_map() {
    // 基于准备好的dom，初始化echarts实例
	$("#chart_map").height(window.innerHeight/1.6);
    var myChart = echarts.init(document.getElementById('chart_map'),'roma');
	option_map = {
		title : {
			text: 'Anomaly From Different Areas',
			subtext: 'Only count the the last 1,000 network traffics'
		},
		tooltip : {
			trigger: 'item'
		},
		legend: {
			x:'right',
			selectedMode:false,
			data:['北京','上海','广东']
		},
		dataRange: {
			orient: 'horizontal',
			min: 0,
			max: 169,
			text:['High','Low'],           // 文本，默认为数值文本
			splitNumber:0
		},
		toolbox: {
			show : false,
			orient: 'vertical',
			x:'right',
			y:'center',
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false}
			}
		},
		series : [
			{
				name: 'Attack Number',
				type: 'map',
				mapType: 'china',
				mapLocation: {
					x: 'left'
				},
				selectedMode : 'multiple',
				itemStyle:{
					normal:{label:{show:true}},
					emphasis:{label:{show:true}}
				},
				data:[
					{name:'西藏', value:60},
					{name:'青海', value:16},
					{name:'宁夏', value:21},
					{name:'海南', value:25},
					{name:'甘肃', value:50},
					{name:'贵州', value:57},
					{name:'新疆', value:66},
					{name:'云南', value:88},
					{name:'重庆', value:100},
					{name:'吉林', value:105},
					{name:'山西', value:11},
					{name:'天津', value:11},
					{name:'江西', value:117},
					{name:'广西', value:117},
					{name:'陕西', value:25},
					{name:'黑龙江', value:82},
					{name:'内蒙古', value:88},
					{name:'安徽', value:65},
					{name:'北京', value:93, selected:false},
					{name:'福建', value:18},
					{name:'上海', value:169, selected:false},
					{name:'湖北', value:26},
					{name:'湖南', value:56},
					{name:'四川', value:68},
					{name:'辽宁', value:22},
					{name:'河北', value:6},
					{name:'河南', value:69},
					{name:'浙江', value:32},
					{name:'山东', value:45},
					{name:'江苏', value:49},
					{name:'广东', value:53, selected:false}
				]
			},
			/* {
				name:'2011全国GDP对比',
				type:'pie',
				roseType : 'area',
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				center: [document.getElementById('main').offsetWidth - 250, 225],
				radius: [30, 120],
				data:[
					{name: '北京', value: 16251.93},
					{name: '上海', value: 19195.69},
					{name: '广东', value: 53210.28}
				]
			} */
		],
		animation: false
	};
	myChart.setOption(option_map, true);
	var timeTicket_map;
	clearInterval(timeTicket_map);
	timeTicket_map = setInterval(function (){
		for (var i=0;i<31;i++)
		{
			flag=parseInt(Math.random().toFixed(0)); 
			if(flag == 0)
				option_map.series[0].data[i].value = option_map.series[0].data[i].value + parseInt((Math.random()*10).toFixed(0));
			else 
				option_map.series[0].data[i].value = option_map.series[0].data[i].value - parseInt((Math.random()*10).toFixed(0));
			if (option_map.series[0].data[i].value <= 0) option_map.series[0].data[i].value = 0;
		}
		myChart.setOption(option_map, true);
	},1000);	
}