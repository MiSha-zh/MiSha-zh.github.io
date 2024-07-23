$(function () {

	map();

	leidatu();
	wuran();
	huaxing();
	zhexian();

	//大屏

	function leida1() {
		var myChart = echarts.init(document.getElementById('map'));


		myChart.setOption(option);
		window.addEventListener("resize", function () {
			myChart.resize();
		});

	}


})


function map() {
	var myChart = echarts.init(document.getElementById('map'));
	let iconRQ = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII="

	let data = [
		//前面是经度，后面是纬度，最后是值
		{
			name: "塔克拉玛干沙漠",
			value: [84, 39, 100]
		},
		{
			name: "古尔班通古特沙漠",
			value: [90, 42, 100]
		},
		{
			name: "巴丹吉林沙漠",
			value: [104, 41, 100]
		},
		{
			name: "腾格里沙漠",
			value: [98, 39, 100]
		},
		{
			name: "柴达木沙漠",
			value: [93, 38, 100]
		},
		{
			name: "库姆塔格沙漠",
			value: [84, 37, 100]
		},
		{
			name: "库布齐沙漠",
			value: [87, 42, 100]
		},
		{
			name: "乌兰布和沙漠",
			value: [105, 41, 100]
		},
		// {
		//     name: "北京",
		//     value: [116.24, 39.55, 100]
		// },

	]
	let LableData = [
		// 前面是定位经度，后面是纬度，最后是值	
		// value[1]面积（万平方公里）,value[2]降水量（毫米）
		{
			name: "塔克拉玛干沙漠",
			coords: [
				[84, 39],
				[74, 44]
			], // 线条位置[开始位置，结束位置]
			value: [35.73, '0~15']
		},
		{
			name: "古尔班通古特沙漠",
			coords: [
				[90, 42],
				[95, 52]
			], // 线条位置[开始位置，结束位置]
			value: [5.68, '70~150']
		},
		{
			name: "巴丹吉林沙漠",
			coords: [
				[104, 41],
				[105, 35]
			], // 线条位置[开始位置，结束位置]
			value: [5.50, '20~60']
		},
		{
			name: "腾格里沙漠",
			coords: [
				[98, 39],
				[102, 47]
			],
			value: [4.3, '33.3~150.3']
		},
		{
			name: "柴达木沙漠",
			coords: [
				[93, 38],
				[83, 33]
			],
			value: [3.49, '10~170']
		},
		{
			name: "库姆塔格沙漠",
			coords: [
				[84, 37],
				[74, 27]
			],
			value: [2.21, '20-60']
		},
		{
			name: "库布齐沙漠",
			coords: [
				[87, 42],
				[83, 47]
			],
			value: [1.39, '150~350']
		},
		{
			name: "乌兰布和沙漠",
			coords: [
				[105, 41],
				[108, 38]
			],
			value: [0.91, '33.3~150.3']
		}

		// {
		// 	name: "北京",
		// 	coords: [
		// 		[116.24, 39.55, 100],
		// 		[120.24, 46.55, 100]
		// 	], // 线条位置[开始位置，结束位置]
		// 	value: [1021, 120]
		// },
	];

	option = {
		geo: {
			map: 'china',
			aspectScale: 0.85,
			layoutCenter: ["50%", "50%"], //地图位置
			layoutSize: '100%',
			itemStyle: {
				normal: {
					shadowColor: '#276fce',
					shadowOffsetX: 0,
					shadowOffsetY: 15,
					opacity: 0.5,
				},
				emphasis: {
					areaColor: '#276fce',
				}
			},
			regions: [{
				name: '南海诸岛',
				itemStyle: {
					areaColor: 'rgba(0, 10, 52, 1)',

					borderColor: 'rgba(0, 10, 52, 1)',
					normal: {
						opacity: 0.3,
						label: {
							show: true,
							color: "orange",
						}
					},


				},
				label: {
					show: false,
					color: 'orange',
					fontSize: 24,
				},


			}],

		},
		series: [
			// 常规地图
			{
				type: 'map',
				mapType: 'china',
				aspectScale: 0.85,
				layoutCenter: ["50%", "50%"], //地图位置
				layoutSize: '100%',
				zoom: 1, //当前视角的缩放比例
				// roam: true, //是否开启平游或缩放
				scaleLimit: { //滚轮缩放的极限控制
					min: 1,
				},
				itemStyle: {
					normal: {
						areaColor: '#0c274b',
						borderColor: '#1cccff',
						borderWidth: 1.5
					},
					emphasis: {
						areaColor: '#02102b',
						label: {
							fontSize: 30,
							textAlign: 'left',
							color: "#fff"
						}

					}
				},
			},
			{ //首都星图标
				name: '首都',
				type: 'scatter',
				coordinateSystem: 'geo',
				data: [{
					name: '首都',
					value: [116.24, 41.55, 100],

				},],
				symbol: iconRQ,
				symbolSize: 20,
				label: {
					normal: {
						show: false,

					},
					emphasis: {
						show: false
					}
				},

			},
			// 区域散点图
			{
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				symbolSize: 20,
				rippleEffect: { //坐标点动画
					period: 3,
					scale: 5,
					brushType: 'fill'
				},
				label: {
					normal: {
						show: false,
						position: 'right',
						formatter: '{b}',
						color: '#b3e2f2',
						fontWeight: "bold",
						fontSize: 16
					},
					emphasis: {
						show: true,
						position: 'right',
						formatter: '{b}',
						color: '#b3e2f2',
						fontWeight: "bold",
						fontSize: 20
					}
				},
				data: data,
				itemStyle: { //坐标点颜色
					normal: {
						show: true,
						color: '#ff8003',
						shadowBlur: 20,
						shadowColor: '#fff',
					},
					emphasis: {
						areaColor: '#f00'
					}
				},


			},
			// 区域线图
			{
				type: 'lines',
				zlevel: 3,
				symbol: 'circle',
				symbolSize: [5, 5],
				color: '#ff8003',
				opacity: 1,
				label: {
					show: true, // 默认不显示标签
					padding: [10, 20],
					color: '#fff',
					backgroundColor: "#1a3961",
					borderColor: '#aee9fb',
					borderWidth: 1,
					borderRadius: 6,
					formatter(params) {
						let arr = [params.name, "面积近：" + params.value[1] + "万平方公里", "年降水量" + params.value[0] + "毫米"];
						return arr.join("\n")
					},
					textStyle: {
						align: 'left',
						fontSize: 27,
						lineHeight: 30,
					}
				},
				// 提示线的设置
				lineStyle: {
					type: 'solid',
					color: 'orange',
					width: 3,
					opacity: 0.8,
				},
				data: LableData,
			},
		]
	};

	myChart.on('click', function (params) {
		console.log(params);
	});
	myChart.setOption(option);
	window.addEventListener("resize", function () {
		myChart.resize();
	});


}



function leidatu() {
	var myChart = echarts.init(document.getElementById('leida'));
	option = {

		color: ['hsl(110, 100%, 62%)', '#00c2ff', '#f9cf67', '#e92b77'],
		legend: {
			show: true,

			bottom: 135,
			center: 0,
			itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
			itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
			itemGap: 1, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
			textStyle: {
				fontSize: 12,
				color: 'black'
			},
			data: ['总减少加量', '1994-2004', '2004-2009', '2009-2014'],
		},
		radar: [{
			// 2004年，全国荒漠化土地总面积为263.62万平方公里,单
			indicator: [
				{
					name: '总减少加量',
					min: -1,
					max: 1.5
				},
				{
					text: '新疆',
					min: -0.1,
					max: 1.5
				},
				{
					text: '内蒙古',
					min: -0.7,
					max: 1.5
				},
				{
					text: '西藏',
					min: -0.2,
					max: 1.5
				},
				{
					text: '青海',
					min: -0.9,
					max: 1.5
				},
				{
					text: '甘肃',
					min: -0.9,
					max: 1.5
				}
			],

			textStyle: {
				color: 'red'
			},
			center: ['50%', '50%'],
			radius: 60,
			startAngle: 90,
			splitNumber: 3,
			orient: 'horizontal',
			name: {
				formatter: '{value}',
				textStyle: {
					fontSize: 17, //外圈标签字体大小
					fontWeight: 'bold',
					color: '#0F0000' //外圈标签字体颜色
				}
			},
			splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
				show: true,
				areaStyle: { // 分隔区域的样式设置。
					color: ['#141c42', '#141c42'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
				}
			},
			axisLine: { //指向外圈文本的分隔线样式
				lineStyle: {
					color: '#153269'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#113865', // 分隔线颜色
					width: 1, // 分隔线线宽
				}
			}
		},],
		series: [{
			name: '雷达图',
			type: 'radar',
			itemStyle: {
				emphasis: {
					lineStyle: {
						width: 4
					}
				}
			},
			data: [
				{
					name: '总减少加量',
					value: [-0.14, 1.29, 0.10, -0.96, -0.14],
					areaStyle: {
						normal: { // 单项区域填充样式
							color: {
								type: 'linear',
								x: 0, //右
								y: 0, //下
								x2: 1, //左
								y2: 1, //上
								colorStops: [{
									offset: 0,
									color: 'hsl(110, 100%, 62%)'
								}, {
									offset: 0.5,
									color: 'rgba(0,0,0,0)'
								}, {
									offset: 1,
									color: 'hsl(110, 100%, 62%)'
								}],
								globalCoord: false
							},
							opacity: 0.4 // 区域透明度
						}
					},
					symbolSize: [2.5, 5], // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
					label: {                    // 单个拐点文本的样式设置
						normal: {
							show: false,             // 单个拐点文本的样式设置。[ default: false ]
							position: 'top',        // 标签的位置。[ default: top ]
							distance: 10,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
							color: 'hsl(110, 100%, 62%)',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
							fontSize: 15,
							fontWeight: 14,           // 文字的字体大小
							formatter: function (params) {
								return params.value;
							}
						},
						emphasis: {
							show: true, // 鼠标悬浮时显示标签
							position: 'top', // 标签的位置。[ default: top ]
							distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
							color: 'white', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
							fontSize: 15,
							fontWeight: 14, // 文字的字体大小
							formatter: function (params) {
								return params.value;
							}
						}
					},
					itemStyle: {
						normal: { //图形悬浮效果
							borderColor: 'hsl(110, 100%, 62%)',
							borderWidth: 2.5
						}
					},

				},
				{
					name: '1994-2004',
					value: [0.06, -0.49, 0.20, -0.86, 0.90],
					areaStyle: {
						normal: { // 单项区域填充样式
							color: {
								type: 'linear',
								x: 0, //右
								y: 0, //下
								x2: 1, //左
								y2: 1, //上
								colorStops: [{
									offset: 0,
									color: '#00c2ff'
								}, {
									offset: 0.5,
									color: 'rgba(0,0,0,0)'
								}, {
									offset: 1,
									color: '#00c2ff'
								}],
								globalCoord: false
							},
							opacity: 0.4 // 区域透明度
						}
					},
					symbolSize: [2.5, 5], // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
					label: {                    // 单个拐点文本的样式设置
						normal: {
							show: false,             // 单个拐点文本的样式设置。[ default: false ]
							position: 'top',        // 标签的位置。[ default: top ]
							distance: 10,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
							color: '#00c2ff',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
							fontSize: 15,
							fontWeight: 14,           // 文字的字体大小
							formatter: function (params) {
								return params.value;
							}
						},
						emphasis: {
							show: true, // 鼠标悬浮时显示标签
							position: 'top', // 标签的位置。[ default: top ]
							distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
							color: 'white', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
							fontSize: 15,
							fontWeight: 14, // 文字的字体大小
							formatter: function (params) {
								return params.value;
							}
						}
					},
					itemStyle: {
						normal: { //图形悬浮效果
							borderColor: '#00c2ff',
							borderWidth: 2.5
						}
					},

				}, {
					name: '2004-2009',
					value: [0.04, -0.12, -0.06, -0.06, -0.11],
					symbolSize: 2.5,
					itemStyle: {
						normal: {
							borderColor: '#f9cf67',
							borderWidth: 2.5,
						}
					},
					areaStyle: {
						normal: { // 单项区域填充样式
							color: {
								type: 'linear',
								x: 0, //右
								y: 0, //下
								x2: 1, //左
								y2: 1, //上
								colorStops: [{
									offset: 0,
									color: '#f9cf67'
								}, {
									offset: 0.5,
									color: 'rgba(0,0,0,0)'
								}, {
									offset: 1,
									color: '#f9cf67'
								}],
								globalCoord: false
							},
							opacity: 0.4 // 区域透明度
						}
					},
					symbolSize: [2.5, 5], // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
					label: {                    // 单个拐点文本的样式设置
						normal: {
							show: false,             // 单个拐点文本的样式设置。[ default: false ]
							position: 'top',        // 标签的位置。[ default: top ]
							distance: 10,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
							color: 'write',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
							fontSize: 15,
							fontWeight: 14,           // 文字的字体大小
							formatter: function (params) {
								return params.value;
							}
						},
						emphasis: {
							show: true, // 鼠标悬浮时显示标签
							position: 'top', // 标签的位置。[ default: top ]
							distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
							color: 'white', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
							fontSize: 15,
							fontWeight: 14, // 文字的字体大小
							formatter: function (params) {
								return params.value;
							}
						}
					},
					itemStyle: {
						normal: { //图形悬浮效果
							borderColor: '#f9cf67',
							borderWidth: 2.5
						}
					},
				}, {
					name: '2009-2014',
					value: [0.04, -0.68, -0.04, -0.04, 0.25],
					symbolSize: 2.5,
					itemStyle: {
						normal: {
							borderColor: '#e92b77',
							borderWidth: 2.5,
						}
					},
					areaStyle: {
						normal: { // 单项区域填充样式
							color: {
								type: 'linear',
								x: 0, //右
								y: 0, //下
								x2: 1, //左
								y2: 1, //上
								colorStops: [{
									offset: 0,
									color: '#e92b77'
								}, {
									offset: 0.5,
									color: 'rgba(0,0,0,0)'
								}, {
									offset: 1,
									color: '#e92b77'
								}],
								globalCoord: false
							},
							opacity: 0.4 // 区域透明度
						}

					},
					symbolSize: [2.5, 5], // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
					label: {
						normal: {
							show: false, // 默认不显示标签
							position: 'top', // 标签的位置。[ default: top ]
							distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
							color: 'write', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
							fontSize: 15,
							fontWeight: 14, // 文字的字体大小
							formatter: function (params) {
								return params.value;
							}
						},
						emphasis: {
							show: true, // 鼠标悬浮时显示标签
							position: 'top', // 标签的位置。[ default: top ]
							distance: 10, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
							color: 'white', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
							fontSize: 15,
							fontWeight: 14, // 文字的字体大小
							formatter: function (params) {
								return params.value;
							}
						}
					},
					itemStyle: {
						normal: { // 图形悬浮效果
							borderColor: '#e92b77',
							borderWidth: 2.5
						}
					}
				}]
		},]
	};


	myChart.setOption(option);
}

function wuran() {

	var myChart = echarts.init(document.getElementById('wuran'));
	var salvProName = ["草地", "林地", "湿地", "湿地", "园地", "城镇村及工矿用地", "交通运输用地", "水域及水利设施用地"];
	var salvProValue = [26453.01, 28412.59, 2346.93, 12786.19, 2017.16, 3530.64, 955.31, 3628.79];
	var salvProMax = [];//背景按最大值
	for (let i = 0; i < salvProValue.length; i++) {
		salvProMax.push(salvProValue[0])
	}
	option = {
		grid: {
			left: '2%',
			right: '2%',
			bottom: '-6%',
			top: '8%',
			containLabel: true,
		},
		tooltip: {
			trigger: 'axis',
			textStyle: {
				fontSize: 24,
			},
			axisPointer: {
				type: 'none',
			},
			formatter: function (params) {
				return params[0].name + ' : ' + params[0].value + '万公顷'
			}
		},
		xAxis: {
			show: false,
			type: 'value'
		},
		yAxis: [{
			type: 'category',
			inverse: true,
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize: '20'
				},
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			data: salvProName
		}, {
			type: 'category',
			inverse: true,
			axisTick: 'none',
			axisLine: 'none',
			show: true,
			axisLabel: {
				textStyle: {
					color: '#ffffff',
					fontSize: '20'
				},
			},
			data: salvProValue
		}],
		series: [{
			name: '值',
			type: 'bar',
			zlevel: 1,
			itemStyle: {
				normal: {
					barBorderRadius: 30,
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: 'rgb(57,89,255,1)'
					}, {
						offset: 1,
						color: 'rgb(46,200,207,1)'
					}]),
				},
			},
			barWidth: 10,
			data: salvProValue
		},
		{
			name: '背景',
			type: 'bar',
			barWidth: 10,
			barGap: '-100%',
			data: salvProMax,
			itemStyle: {
				normal: {
					color: 'rgba(24,31,68,1)',
					barBorderRadius: 30,
				}
			},
		},
		]
	};

	myChart.setOption(option);


}

function huaxing() {
	var myChart = echarts.init(document.getElementById('huaxing'));

	var dataStyle = {
		normal: {
			label: {
				show: false
			},
			labelLine: {
				show: false
			},
			shadowBlur: 0,
			shadowColor: '#203665'
		}
	};
	option = {
		series: [{
			name: '生活用水',
			type: 'pie',
			clockWise: false,
			radius: [60, 75],
			itemStyle: dataStyle,
			hoverAnimation: false,
			center: ['15%', '50%'],
			data: [{
				value: 909.8,
				label: {
					normal: {
						rich: {
							a: {
								color: '#fff',
								align: 'center',
								fontSize: 25,
								fontWeight: "bold",
								textBorderColor: '#3a7ad5',
								textBorderWidth: 3,
								textShadowColor: 'rgba(0,0,0,0.1)',
							},
							b: {
								color: '#fff',
								align: 'center',
								fontSize: 20
							}
						},
						formatter: function (params) {
							return "{b|生活用水}\n\n" + "{a|" + params.value + "亿m³}" + "\n\n{b|占比15.40%}";
						},
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '20',
							fontWeight: 'normal',
							color: '#fff'
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#2c6cc4',
						shadowColor: '#2c6cc4',
						shadowBlur: 0
					}
				}
			}, {
				value: 4957.2, // 总用水量减去生活用水量
				name: 'invisible',
				itemStyle: {
					normal: {
						color: '#24375c'
					},
					emphasis: {
						color: '#24375c'
					}
				}
			}]
		}, {
			name: '工业用水',
			type: 'pie',
			clockWise: false,
			radius: [60, 75],
			itemStyle: dataStyle,
			hoverAnimation: false,
			center: ['40%', '50%'],
			data: [{
				value: 970.2,
				label: {
					normal: {
						rich: {
							a: {
								color: '#fff',
								align: 'center',
								fontSize: 20,
								fontWeight: "bold",
								textBorderColor: '#d03e93',
								textBorderWidth: 3,
								textShadowColor: 'rgba(0,0,0,0.1)',
							},
							b: {
								color: '#fff',
								align: 'center',
								fontSize: 20
							}
						},
						formatter: function (params) {
							return "{b|工业用水}\n\n" + "{a|" + params.value + "亿m³}" + "\n\n{b|占比16.40%}";
						},
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '20',
							fontWeight: 'normal',
							color: '#fff'
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#ef45ac',
						shadowColor: '#ef45ac',
						shadowBlur: 0
					}
				}
			}, {
				value: 4906.8, // 总用水量减去工业用水量
				name: 'invisible',
				itemStyle: {
					normal: {
						color: '#412a4e'
					},
					emphasis: {
						color: '#412a4e'
					}
				}
			}]
		}, {
			name: '农业用水',
			type: 'pie',
			clockWise: false,
			radius: [60, 75],
			itemStyle: dataStyle,
			hoverAnimation: false,
			center: ['65%', '50%'],
			data: [{
				value: 3672.4,
				label: {
					normal: {
						rich: {
							a: {
								color: '#fff',
								align: 'center',
								fontSize: 20,
								fontWeight: "bold",
								textBorderColor: '#603dd0',
								textBorderWidth: 3,
								textShadowColor: 'rgba(0,0,0,0.9)',
							},
							b: {
								color: '#fff',
								align: 'center',
								fontSize: 20
							}
						},
						formatter: function (params) {
							return "{b|农业用水}\n\n" + "{a|" + params.value + "亿m³}" + "\n\n{b|占比62.20%}";
						},
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '20',
							fontWeight: 'normal',
							color: '#fff'
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#613fd1',
						shadowColor: '#613fd1',
						shadowBlur: 0
					}
				}
			}, {
				value: 2204.6, // 总用水量减去农业用水量
				name: 'invisible',
				itemStyle: {
					normal: {
						color: '#453284'
					},
					emphasis: {
						color: '#453284'
					}
				}
			}]
		}, {
			name: '人工生态环境补水',
			type: 'pie',
			clockWise: false,
			radius: [60, 75],
			itemStyle: dataStyle,
			hoverAnimation: false,
			center: ['89%', '50%'],
			data: [{
				value: 354.1,
				label: {
					normal: {
						rich: {
							a: {
								color: '#fff',
								align: 'center',
								fontSize: 20,
								fontWeight: "bold",
								textBorderColor: '#603d',
								textBorderWidth: 3,
								textShadowColor: 'rgba(0,0,0,0.9)',
							},
							b: {
								color: '#fff',
								align: 'center',
								fontSize: 20
							}
						},
						formatter: function (params) {
							return "{b|人工生态环境补水}\n\n" + "{a|" + params.value + "亿m³}" + "\n\n{b|占比6.00%}";
						},
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '20',
							fontWeight: 'normal',
							color: '#fff'
						}
					}
				},
				itemStyle: {
					normal: {
						color: 'green',
						shadowColor: 'black',
						shadowBlur: 0
					}
				}
			}, {
				value: 5522.9, // 总用水量减去人工生态环境补水量
				name: 'invisible',
				itemStyle: {
					normal: {
						color: 'orange'
					},
					emphasis: {
						color: 'yellow'
					}
				}
			}]
		}]
	}

	myChart.setOption(option);
}



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
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#f0c725'
				}
			}
		}

		dataArr.push(newArr)
	})
	option = {
		color: ['#f0c725'],

		tooltip: {
			trigger: 'axis',
			textStyle: {
				fontSize: 24,
			},
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			x: 'center',
			top: '25',
			padding: 10,
			textStyle: {
				color: 'yellow',
				"fontSize": 30
			}
		},
		grid: {
			left: '6%',
			right: '4%',
			top: '25%',
			bottom: '3%',
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
					color: 'rgba(240,199,37,0.5)'
				}
			},
			axisLabel: {
				interval: 0,
				color: '#c1cadf',
				fontSize: '20'
			}
		}],
		yAxis: [{
			type: 'value',
			name: '(%)',
			nameTextStyle: {
				color: '#c1cadf',
				align: 'right',
				lineHeight: 10,
				fontSize: 25
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(240,199,37,0.5)'
				}
			},
			axisLabel: {
				interval: 0,
				color: '#c1cadf',
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
