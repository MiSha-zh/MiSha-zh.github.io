function zhexian() {
    var myChart = echarts.init(document.getElementById('zhexian'));

    dataObj = {
        year: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        data: {
            value: [{
                name: '牲畜超载率',
                value: [32, 31.20, 30, 28, 23, 23.48, 15.20, 13.50, 12.40]
            }]
        }
    }
    let dataArr = []

    dataObj.data.value.map(item => {
        let datachild = []
        let newArr = {
            name: item.name,
            type: 'line',
            smooth: true,
            symbolSize: 20,
            data: item.value,
            barWidth: '40%',
            itemStyle: {
                normal: {
                    color: 'yellow'
                }
            },
            label: {
                show: true, // 显示数据点的数据值
                position: 'top', // 数据值显示在数据点上方
                color: 'white', // 数据值颜色
                fontSize: 22 ,// 数据值字体大小
                style: {
                    textShadow: '2px 2px 3px black' // 使用驼峰命名法
                }
            }
        }

        dataArr.push(newArr)
    })
    option = {
        tooltip: {
            normal:{
                show: false,
            },
            emphasis: {
                show: true,
                trigger: 'axis',
                textStyle: {
                    fontSize: 44,
                },
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            }

        },
        legend: {
            x: 'center',
            top: '25',
            padding: 10,
            barWidth: '40%',
            textStyle: {
                color: 'yellow',
                fontSize: 30,
                style: {
                    textShadow: '2px 2px 3px black' // 使用驼峰命名法
                }
            }
        },
        grid: {
            left: '6%',
            right: '4%',
            top: '25%',
            bottom: '5%',
            containLabel: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center'
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: dataObj.year,
            axisLine: {
                lineStyle: {
                    color: 'black'
                }
            },
            axisLabel: {
                interval: 0,
                color: 'black',
                fontSize: '20'
            }
        }],
        yAxis: [{
            type: 'value',
            name: '(%)',
            nameTextStyle: {
                color: 'black',
                align: 'right',
                lineHeight: 10,
                fontSize: 20
            },
            axisLine: {
                lineStyle: {
                    color: 'black'
                }
            },
            axisLabel: {
                interval: 0,
                color: 'black',
                fontSize: '20'
            },
            splitLine: {
                show: false
            }
        }],
        series: dataArr
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function pieChart() {
    var myChart = echarts.init(document.getElementById('pieChart'));

    var dataObj = {
        data: [
            { name: '草地', value: 26453.01, itemStyle: { color: 'green' } },
            { name: '林地', value: 28412.59, itemStyle: { color: 'brown' } },
            { name: '湿地', value: 2346.93, itemStyle: { color: 'blue' } },
            { name: '耕地', value: 12786.19, itemStyle: { color: 'yellow' } },
            { name: '园地', value: 2017.16, itemStyle: { color: 'orange' } },
            { name: '城镇村及工矿用地', value: 3530.64, itemStyle: { color: 'gray' } },
            { name: '交通运输用地', value: 955.31, itemStyle: { color: 'purple' } },
            { name: '水域及水利设施用地', value: 3628.79, itemStyle: { color: 'cyan' } }
        ]
    };

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}万公顷 ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: dataObj.data.map(item => item.name),
            textStyle: {
                color: 'black',
                fontSize: 14,
            }
        },
        series: [
            {
                name: '全国国土利用状况',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: dataObj.data,
                label: {
                    show: true,
                    formatter: '{b}: {c}万公顷',
                    fontSize:20,
                    
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 1)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function pieChart2() {
    var myChart2 = echarts.init(document.getElementById('pieChart2'));

    var dataObj2 = {
        data: [
            { name: '生活', value: 909.8, itemStyle: { color: 'blue' } },
            { name: '工业', value: 970.2, itemStyle: { color: 'green' } },
            { name: '农业', value: 3672.4, itemStyle: { color: 'yellow' } },
            { name: '人工生态环境补水', value: 354.1, itemStyle: { color: 'purple' } }
        ]
    };

    var option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}亿m³ ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: dataObj2.data.map(item => item.name),
            textStyle: {
                color: 'black',
                fontSize: 14,
            }
        },
        series: [
            {
                name: '全国用水总量',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: dataObj2.data,
                label: {
                    show: true,
                    formatter: '{b}: {c}亿m³',
                    fontSize: 20,
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 1)'
                    }
                }
            }
        ]
    };

    myChart2.setOption(option2);

    window.addEventListener("resize", function () {
        myChart2.resize();
    });
}

function sandian() {
    var myChart = echarts.init(document.getElementById('sandian'));

    var data = [
        { year: '2020', coefficient: 0.565 },
        { year: '2021', coefficient: 0.568 },
        { year: '2022', coefficient: 0.572 },
        { year: '2023', coefficient: 0.576 }
    ];

    var option = {
        tooltip: {
            trigger: 'axis',
            show: true,
        },
        xAxis: {
            type: 'category',
            data: data.map(item => item.year),
            axisLabel: {
                interval: 0,
                color: 'black',
                fontSize: '20'
            }
        },
        yAxis: {
            type: 'value',
            name: '农田灌溉水有效利用系数',
            nameTextStyle: {
                color: 'black',
                fontSize: 20,
                
            },
            nameLocation: 'middle', // 将名称显示在中间
            nameGap: 50, // 调整名称与轴线的间距
            axisLabel: {
                interval: 0,
                color: 'black',
                fontSize: '20',
                splitNumber: 10 // 设置y轴的分割段数
            },
            splitLine: {
                show: false
            },
            min: 0.54, // 设置Y轴的最小值
            interval: 0.01 // 设置Y轴的间隔

        },
        series: [
            {
                name: '农田灌溉水有效利用系数',
                type: 'scatter',
                data: data.map(item => item.coefficient),
                symbolSize: 10,
                itemStyle: {
                    color: 'blue'
                },
                label: {
                    show: true,
                    position: 'bottom',
                    formatter: function (params) {
                        return params.value;
                    },
                    color: 'black',
                    fontSize: 20
                }
            },
            {
                name: '趋势线',
                type: 'line',
                data: data.map(item => item.coefficient),
                symbol: 'none',
                lineStyle: {
                    color: 'red'
                }
            },
        ]
    };

    myChart.setOption(option);

    window.addEventListener("resize", function () {
        myChart.resize();
    });
}


function pieChart3() {
    var myChart = echarts.init(document.getElementById('pieChart3'));

    var dataObj = {
        data: [
            { name: '过度樵采薪材', value: 40, itemStyle: { color: 'blue' }},
            { name: '其他', value: 60, itemStyle: { color: 'yellow' } }
        ]
    };

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}% ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: dataObj.data.map(item => item.name),
            textStyle: {
                color: 'black',
                fontSize: 25,
            }
        },
        series: [
            {
                name: '农村农业结构',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: dataObj.data,
                label: {
                    show: true,
                    formatter: '{b}: {c}%',
                    fontSize: 25,
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 1)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener("resize", function () {
        myChart.resize();
    });
}


