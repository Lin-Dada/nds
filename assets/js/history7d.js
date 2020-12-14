$(function() {
	echart_type();
	echart_score();
	echart_dataflow() ;
	echart_from();
	echart_time();
	echart_hack();
	echart_hack7ds();
});

function echart_type() {
//自适应宽
//$("#main").width(window.innerWidth);
$("#type").width($("card_div").width());
$("#type").height(window.innerHeight/2.3);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('type'),'roma');
option = {
	 title : {
        text: 'Total：560',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['DDoS','PortScan','BOT','Infiltration','Web Attack','Patator','DoS']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'center',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'Type',
            type:'pie',
            radius : ['50%', '70%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '20',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                {value:150, name:'DDoS'},
                {value:70, name:'PortScan'},
                {value:80, name:'BOT'},
                {value:90, name:'Infiltration'},
                {value:10, name:'Web Attack'},
				{value:100, name:'Patator'},
				{value:60, name:'DoS'}
            ]
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

}

function echart_dataflow() {
//自适应宽
//$("#main").width(window.innerWidth);
$("#dataflow").width($("card_div").width());
$("#dataflow").height(window.innerHeight/2.3);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('dataflow'),'roma');
option = {

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
		magicType : {show: false, type: ['line', 'bar', 'stack', 'tiled']},
		restore : {show: false},
		saveAsImage : {show: true}
	}
},
calculable : true,
xAxis : [
	{
		show:true,
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
color:['#62d1de'],
series : [
	{
		name:'',
		type:'line',
		smooth:true,
		itemStyle: {normal: {areaStyle: {type: 'default'}}},
		data:['1200', '1400', '808', '811', '626', '488', '1600']
		
	},
	
],
grid: {
	show: false,
	borderColor: '#19507c',
	x: 50,
	x2: 50,
	y:10,
	y2:30
}
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

}


function echart_score() {
//自适应宽
//$("#main").width(window.innerWidth);
//$("#chart_score").width($("card_score").width());
$("#chart_score").height(window.innerHeight/2.3);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart_score'),'roma');


option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
		show:false,
        data:['Safety Factor']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            show:true,
			type : 'category',
            boundaryGap : false,
            data : ['7days ago','6days ago','5days ago','4days ago','3days ago','2days ago','1day ago']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            }
        }
    ],
    series : [
        {
            name:'Safety Factor',
            type:'line',
            data:[92,99,60,50,40,80,85],
            markPoint : {
                data : [
                    {type : 'max', name: 'Max'},
                    {type : 'min', name: 'Min'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: 'Average'}
                ]
            }
        }
    ],
	grid: {
	show: false,
	borderColor: '#19507c',
	x: 50,
	x2: 50,
	y:45,
	y2:30
}
};
               

//clearInterval(timeTicket);
/* timeTicket = setInterval(function (){
    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000); */
             

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

}

function echart_from() {
//自适应宽
//$("#main").width(window.innerWidth);
//$("#chart_from").width($("card_score").width());
$("#chart_from").height(window.innerHeight/2.3);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart_from'),'roma');


option = {
    
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    legend: {
        data : ['Bejing','Shanghai','Guangdong','Chongqing','Yunnan']
    },
    calculable : true,
    series : [
        {
            name:'From',
            type:'funnel',
            width: '60%',
			height:'70%',
            data:[
                {value:60, name:'Beijing'},
                {value:40, name:'Shanghai'},
                {value:20, name:'Guangdong'},
                {value:80, name:'Chongqing'},
                {value:100, name:'Yunnan'}
            ]
        }
    ],
	
};
                    
                    
myChart.setOption(option);

}

function echart_time() {
//自适应宽
//$("#main").width(window.innerWidth);
//$("#chart_score").width($("card_score").width());
$("#chart_time").height(window.innerHeight/2.3);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart_time'),'macarons');


option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
		show:false,
        data:['']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
			type : 'category',
            boundaryGap : false,
            data : ['15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','00:00','01:00','02:00',
					'03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00',
			]
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            }
        }
    ],
    series : [
        {
            name:'Numbers of Anomaly',
            type:'line',
            data:[17,17,15,22,22,13,15,19,10,17,14,12,
				  17,22,13,15,19,10,17,14,12,17,12,12
				 ],
            markPoint : {
                data : [
                    {type : 'max', name: 'Max'},
                    {type : 'min', name: 'Min'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: 'Average'}
                ]
            }
        }
    ],
	grid: {
	show: false,
	borderColor: '#19507c',
	x: 50,
	x2: 50,
	y:35,
	y2:30
}
};
               

//clearInterval(timeTicket);
/* timeTicket = setInterval(function (){
    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000); */
             

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

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
            stack: 'Total',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'PortScan',
            type:'line',
            stack: 'Total',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'BOT',
            type:'line',
            stack: 'Total',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'Infiltration',
            type:'line',
            stack: 'Total',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'Web Attack',
            type:'line',
            stack: 'Total',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name:'Patator',
            type:'line',
            stack: 'Total',
            data:[220, 432, 601, 534, 1390, 1230, 1120]
        },
        {
            name:'DoS',
            type:'line',
            stack: 'Total',
            data:[720, 832, 801, 834, 1190, 1230, 1220]
        }
    ]
};
                    
myChart.setOption(option);

}

function echart_hack7ds() {
//自适应宽
//$("#main").width(window.innerWidth);
//$("#chart_score").width($("card_score").width());
$("#chart_hack_everyday").height(window.innerHeight/2.5);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart_hack_everyday'),'roma');

option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Total Attacks']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: false},
            dataView : {show: false, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
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
            name:'Total Attacks',
            type:'bar',
            data:[350,200,360,400,180,600,190],
            markLine : {
                data : [
                    {type : 'average', name : 'Average'}
                ]
            }
        }
    ]
};
                    
                    
myChart.setOption(option);

}
