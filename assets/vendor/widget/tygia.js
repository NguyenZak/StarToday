(function () {
	var jQueryhighcharts;
	var jQueryAllowedVersion = '1.12.4';
	var jQueryUrl = 'https://cls.giavangvietnam.com/js/jquery.js';
	var highChartUrl = 'https://cls.giavangvietnam.com/js/highcharts.js';
	function loadScript(e, t) {
	    var a = document.createElement("script");
	    a.type = "text/javascript", a.readyState ? a.onreadystatechange = function() {
	        "loaded" != a.readyState && "complete" != a.readyState || (a.onreadystatechange = null, t())
	    } : a.onload = function() {
	        t()
	    }, a.src = e, document.getElementsByTagName("head")[0].appendChild(a)
	}

	function formatNumberK(number) {
	    k = number.toString().replace(/,0{3}$/g, 'K');
	    return result = k.replace(/^[\s||-]+/g, '');
	}

	function formatNumber(num) {
	    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	function priceChangeFormat(num, change) {
		if (num != 0 && num != '') {
			var price = formatNumberK(formatNumber(num));
			return (change == 'up' ? 'â–²' : 'â–¼') + price;
		}
		return '';
	}

	function getMyTreeLocation(o) {
		var widget_class_id = "", widget_path = "";
		
		while (true) {
			widget_class_id = o.tree_name + widget_class_id;
			widget_path = o.tree_name + widget_path;
			o = o.tree_parent;
			if (o.tree_parent == null) {
				break;
			}
			widget_class_id = "-" + widget_class_id;
			widget_path = "." + widget_path;
		}
		return [widget_class_id, widget_path];
	}

	function addChildToTree(o, childName, childO) {
		o[childName] = childO;
		childO.tree_parent = o;
		childO.tree_name = childName;
	}

	function specialize_with(o, S) { for (var prop in S) { o[prop] = S[prop]; } }


	function typical_widget_new (dom_id, spec_o) {
		if (this.instances == null) { this.instances = []; }
		var instance_id = this.instances.length;
		var el;
		
		if (this.ever_instantiated == null) {	// first instance ever
			this.ever_instantiated = 1;

			[this.widget_class_id, this.widget_path] = getMyTreeLocation(this);

			el = document.createElement('style');
			el.type = 'text/css';
			el.innerHTML = this.CSS_Literal
				.replace(/\{\{WIDGET_CLASS_ID\}\}/g, this.widget_class_id);
			document.getElementsByTagName('head')[0].appendChild(el);
		}
		
		var Widget = {
			tree_parent: this,
			instance_id: instance_id,
		};
		this.instances.push(Widget);
		
		specialize_with(Widget, spec_o);
		specialize_with(Widget, this.WidgetSpecializer);
		
		var base_el = document.getElementById(dom_id);
		base_el.innerHTML = this.HTML_Literal
			.replace(/\{\{WIDGET_CLASS_ID\}\}/g, this.widget_class_id);

		Widget.DOME = base_el;
		return Widget;
	}

	function initHighChart(buyJson, sellJson, dateJson, drawToViewId) {
		var highChartHomeModule;
		(function($) {
	        "use strict";
	        highChartHomeModule = (function() {
	            return {
	                init: function() {
	                    this.changeInit();
	                },
	                changeInit: function() {
	                    this.changeShowChart();
	                }
	            }
	        }());
	    })(jQueryhighcharts);

	    (function($) {
	        "use strict";
	        highChartHomeModule.changeShowChart = function() {
	            var options = {
	                chart: {
	                    type: 'line',
	                },
	                credits: {
	                    enabled: false
	                },
	                title: {
	                    text: ''
	                },
	                subtitle: {
	                    text: ''
	                },
	                xAxis: {
	                    categories: dateJson,
	                    tickPositioner: function(min, max) {
	                        if (max < 1)
	                            return [min, max];
	                        var positions = [],
	                            tick = (this.dataMin),
	                            increment = ((this.dataMax - this.dataMin) / 2);
	                        if (this.dataMax !== null && this.dataMin !== null) {
	                            for (tick; tick - increment <= this.dataMax; tick += increment) {
	                                positions.push(Math.floor(tick));
	                            }
	                        }
	                        return positions;
	                    },
	                    labels: {}
	                },
	                yAxis: {
	                    title: {
	                        text: ''
	                    }
	                },
	                tooltip: {
	                    shared: true,
	                    crosshairs: true,
	                    formatter: function() {
	                        return '<span> NgĂ y: ' + this.x + '</span><br>' +
	                        '<span style="color:' + this.points[1].series.color + '">' + this.points[1].series.name + '</span>' + ': ' + '<strong>' + formatNumber(this.points[1].y) + '</strong>' + '<br>' +
	                        '<span style="color:' + this.points[0].series.color + '">' + this.points[0].series.name + '</span>' + ': ' + '<strong>' + formatNumber(this.points[0].y) + '</strong>' + '<br>' +
	                        '<span >ChĂªnh lá»‡ch</span>' + ': ' + '<strong>' + formatNumberK(formatNumber(this.points[1].y - this.points[0].y)) + '</strong>';
	                    }
	                },
	                series: [{
	                    name: 'Mua vĂ o',
	                    color: '#f13628',
	                    data: buyJson
	                }, {
	                    name: 'BĂ¡n ra',
	                    color: '#258a29',
	                    data: sellJson
	                }]
	            };
	            Highcharts.chart(drawToViewId, options);
	        }
	    })(jQueryhighcharts);

	    jQueryhighcharts(document).ready(function() {
	        highChartHomeModule.init();
	    });
	}

	var Module_Path = ["BangTyGia", "Shared", "Widget"];
	var curr = this;
	Module_Path.forEach(function(i){if (curr[i] == null) {addChildToTree(curr, i, {})} curr = curr[i]});

	specialize_with(curr, {
		CHART_Data: {"buy":[56500000,56700000,56700000,56400000,56400000,56350000,56350000,56350000,56350000,56450000,56450000,56350000,56350000,56250000],"sell":[57150000,57350000,57350000,57050000,57050000,57000000,57000000,57000000,57000000,57100000,57100000,56950000,56950000,56850000],"date":["2021-09-23 00:00:02","2021-09-23 08:24:01","2021-09-24 00:00:02","2021-09-24 08:20:02","2021-09-25 00:00:03","2021-09-25 08:26:01","2021-09-26 00:00:03","2021-09-27 00:00:02","2021-09-28 00:00:03","2021-09-28 08:30:02","2021-09-29 00:00:02","2021-09-29 08:24:01","2021-09-30 00:00:03","2021-09-30 08:24:02"]},
		GOLD_Data: {"sjc":{"name":"SJC","link":"\/gia-vang-sjc\/","buy":56250000,"sell":56850000,"buy_change":-100000,"sell_change":-100000,"buy_change_class":"down","sell_change_class":"down"},"pnj":{"name":"PNJ","link":"\/gia-vang-pnj\/","buy":56400000,"sell":57200000,"buy_change":-100000,"sell_change":0,"buy_change_class":"down","sell_change_class":"none"},"doji":{"name":"DOJI","link":"\/gia-vang-doji\/","buy":56700000,"sell":57580000,"buy_change":0,"sell_change":0,"buy_change_class":"none","sell_change_class":"none"},"phuquy":{"name":"Ph\u00fa Qu\u00fd","link":"\/gia-vang-phu-quy\/","buy":57000000,"sell":57500000,"buy_change":-100000,"sell_change":-100000,"buy_change_class":"down","sell_change_class":"down"},"btmc":{"name":"B\u1ea3o T\u00edn Minh Ch\u00e2u","link":"\/gia-vang-bao-tin-minh-chau\/","buy":57030000,"sell":57480000,"buy_change":-90000,"sell_change":-120000,"buy_change_class":"down","sell_change_class":"down"},"mihong":{"name":"Mi H\u1ed3ng","link":"\/gia-vang-mi-hong\/","buy":56950000,"sell":57250000,"buy_change":0,"sell_change":0,"buy_change_class":"none","sell_change_class":"none"}},
		XAUUSD_Data: {"price":"1743.20","change":"+16.10","percent":"+0.93","class":"up"},
		RATES_Data: {"gold":"1743.20 USD\/Oz","usd_rate":"22,860 VND","exchange":"48,218 tri\u1ec7u\/l\u01b0\u1ee3ng","difference":"8,632 tri\u1ec7u"},
		BITCOIN_Data: {"price":"47,867.80","change_1h":"-0.38%","change_24h":"-0.87%","class":"down"},
		UPDATE_Time: "21:00:03 30\/09\/2021",
		CSS_Literal: `
			.{{WIDGET_CLASS_ID}}-base * {
				background: none;
				margin: 0px;
				padding: 0px;
				color: #3d3d3d;
				font-family: -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
				font-size: 12px;
			}
			.{{WIDGET_CLASS_ID}}-base a {
				text-decoration: none;
				color: #005cef
			}
			.{{WIDGET_CLASS_ID}}-sjc table {
				border-collapse: collapse;
			}
			.{{WIDGET_CLASS_ID}}-sjc table tr th {
				text-align: left;
			}
			.{{WIDGET_CLASS_ID}}-sjc table tr:hover td {
				background: #00b60024
			}
			.{{WIDGET_CLASS_ID}}-sjc table td a {
				font-weight: bold;
			}
			.{{WIDGET_CLASS_ID}}-sjc table,
			.{{WIDGET_CLASS_ID}}-sjc table th,
			.{{WIDGET_CLASS_ID}}-sjc table td {
				border: 1px solid #cccccc75
			}
			.{{WIDGET_CLASS_ID}}-sjc table th, .{{WIDGET_CLASS_ID}}-sjc table td {
				padding: 7px;
				font-size: 14px;
			}
			.{{WIDGET_CLASS_ID}}-span {
				white-space: nowrap;
			}
			.{{WIDGET_CLASS_ID}}-widget-header {
				margin-bottom: 5px;
				margin-top: 15px;
				font-size: 14px;
				border-left: 3px #005cef solid;
				padding-left: 5px;
			}
			.{{WIDGET_CLASS_ID}}-widget-header a{
				font-size: 13px;
			}
			.{{WIDGET_CLASS_ID}}-loading-view {
				animation-name: bgload;
				animation-duration: 2s;
				animation-iteration-count: infinite;
				animation-timing-function: linear;
				background: linear-gradient(90deg, #eee 8%, #ddd 18%, #eee 33%);
				background-size: 800px auto;
			}
			.{{WIDGET_CLASS_ID}}-xau-usd, .{{WIDGET_CLASS_ID}}-bitcoin {
				border: 1px solid #f0f0f0;
				padding: 5px !important;
			}
			.{{WIDGET_CLASS_ID}}-price-down{
				color: #ff0000;
				font-weight: normal !important;
				font-size: 11px !important;
			}
			.{{WIDGET_CLASS_ID}}-price-up{
				color: #00b600;
				font-weight: normal !important;
				font-size: 11px !important;
			}
			.{{WIDGET_CLASS_ID}}-xau-usd-type, .{{WIDGET_CLASS_ID}}-bitcoin-type {
				color: #131722;
				font-weight: 700;
				align-items: center;
			}
			.{{WIDGET_CLASS_ID}}-xau-usd-description, .{{WIDGET_CLASS_ID}}-bitcoin-description {
				color: #787b86 !important;
				letter-spacing: .5px;
				font-size: 12px !important;
				margin-top: 4px !important;
				line-height: 14px;
				height: 14px;
				text-transform: uppercase;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.{{WIDGET_CLASS_ID}}-xau-usd-price, .{{WIDGET_CLASS_ID}}-bitcoin-price {
				font-size: 28px !important;
				font-weight: 700;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.{{WIDGET_CLASS_ID}}-sjc-current {
				text-align:center;
				font-size: 18px !important;
				font-weight: 700;
			    padding: 10px !important;
			    margin-top: 10px !important;
			    margin-bottom: 10px !important;
			}
			.{{WIDGET_CLASS_ID}}-copyright {
				font-size: 11px;
			    color: #666;
			    text-align: right;
			    margin-top: 10px;
			    border-top: 1px solid #cccccc75;
				padding-top: 10px;
			}
			.{{WIDGET_CLASS_ID}}-update-time {
				font-size: 11px;
				color: red
			}
			.{{WIDGET_CLASS_ID}}-exchange table, .{{WIDGET_CLASS_ID}}-exchange table tr, .{{WIDGET_CLASS_ID}}-exchange table tr td {
				border: 0px;
				margin: 0px;
				padding: 0px;
			}
			.{{WIDGET_CLASS_ID}}-exchange table tr td
			{
				border-top: 1px solid #ebebeb;
				padding: 7px;
				padding-left: 0px;
				font-size: 13px;
			}
			.{{WIDGET_CLASS_ID}}-exchange .{{WIDGET_CLASS_ID}}-usd-unit-gold:before {
			    content: " ";
			    border-left: 2px solid #ffd300;
			    padding-left: 5px;
			}
			.{{WIDGET_CLASS_ID}}-exchange .{{WIDGET_CLASS_ID}}-usd-unit-tygia:before {
			    content: " ";
			    border-left: 2px solid #00b9eb;
			    padding-left: 5px;
			}
			.{{WIDGET_CLASS_ID}}-exchange .{{WIDGET_CLASS_ID}}-usd-unit-quydoi:before {
			    content: " ";
			    border-left: 2px solid #00d084;
			    padding-left: 5px;
			}
			.{{WIDGET_CLASS_ID}}-exchange .{{WIDGET_CLASS_ID}}-usd-unit-chenhlech:before {
			    content: " ";
			    border-left: 2px solid red;
			    padding-left: 5px;
			}
			.{{WIDGET_CLASS_ID}}-exchange .{{WIDGET_CLASS_ID}}-usd-unit {
			    font-weight: bold;
			}
			#{{WIDGET_CLASS_ID}}-chart-view {
				height: 400px;
			}
			@keyframes bgload {
				0% {
					background-position: -468px 0
				}
				to {
					background-position: 468px 0
				}
			}
		`,
		HTML_Literal: `
			<div class="{{WIDGET_CLASS_ID}}-base">
				<div class="{{WIDGET_CLASS_ID}}-wbitcoin">
					<p class="{{WIDGET_CLASS_ID}}-widget-header"><a href="https://bangtygia.com/gia-bitcoin-hom-nay/" target="_blank"><img src="https://s2.coinmarketcap.com/static/img/coins/16x16/1.png" style="vertical-align: middle;" title="Giá bitcoin hôm nay"/> Giá bitcoin</a></p>
					<div class="{{WIDGET_CLASS_ID}}-bitcoin"><p class="{{WIDGET_CLASS_ID}}-bitcoin-type">BTC</p><p class="{{WIDGET_CLASS_ID}}-bitcoin-description">Bitcoin</p><p class="{{WIDGET_CLASS_ID}}-price-detail"> <span class="{{WIDGET_CLASS_ID}}-bitcoin-price">-</span> <span class="{{WIDGET_CLASS_ID}}-bitcoin-change">-</span></p></div>
				</div>
				<div class="{{WIDGET_CLASS_ID}}-chart">
					<p class="{{WIDGET_CLASS_ID}}-widget-header"><a href="https://bangtygia.com/bieu-do-gia-vang-sjc-1-tuan-qua/" target="_blank">Biểu giá vàng SJC</a></p>
					<p class="{{WIDGET_CLASS_ID}}-sjc-current">-</p>
					<div id="{{WIDGET_CLASS_ID}}-chart-view" class="{{WIDGET_CLASS_ID}}-loading-view"></div>
				</div>
				<div class="{{WIDGET_CLASS_ID}}-sjc">
					<p class="{{WIDGET_CLASS_ID}}-widget-header"><a href="https://bangtygia.com/gia-vang/" target="_blank">Giá vàng trong nước</a></p>
					<table width="100%" border="0">
					    <tbody>
					        <tr>
					            <th>Đơn vị</th>
					            <th>Mua</th>
					            <th>Bán</th>
					        </tr>
					    </tbody>
					</table>
				</div>
				<div class="{{WIDGET_CLASS_ID}}-xauusd">
					<p class="{{WIDGET_CLASS_ID}}-widget-header"><a href="https://bangtygia.com/gia-vang-the-gioi/" target="_blank">Giá vàng thế giới</a></p>
					<div class="{{WIDGET_CLASS_ID}}-xau-usd"><p class="{{WIDGET_CLASS_ID}}-xau-usd-type">XAUUSD</p><p class="{{WIDGET_CLASS_ID}}-xau-usd-description">Vàng/Đô la Mỹ</p><p class="{{WIDGET_CLASS_ID}}-price-detail"> <span class="{{WIDGET_CLASS_ID}}-xau-usd-price">-</span> <span class="{{WIDGET_CLASS_ID}}-xau-usd-change">-</span></p></div>
				</div>
				<div class="{{WIDGET_CLASS_ID}}-exchange">
					<p class="{{WIDGET_CLASS_ID}}-widget-header"><a href="https://bangtygia.com/gia-vang-the-gioi/" target="_blank">Quy đổi vàng thế giới</a></p>
					<table width="100%"><tbody><tr><td class="{{WIDGET_CLASS_ID}}-usd-title {{WIDGET_CLASS_ID}}-usd-unit-gold">Gold</td><td class="{{WIDGET_CLASS_ID}}-usd-unit {{WIDGET_CLASS_ID}}-usd-unit-gold-value"></td></tr><tr><td class="{{WIDGET_CLASS_ID}}-usd-title {{WIDGET_CLASS_ID}}-usd-unit-tygia">Tỉ giá USD</td><td class="{{WIDGET_CLASS_ID}}-usd-unit {{WIDGET_CLASS_ID}}-usd-unit-rate-value"></td></tr><tr><td class="{{WIDGET_CLASS_ID}}-usd-title {{WIDGET_CLASS_ID}}-usd-unit-quydoi">Quy đổi</td><td class="{{WIDGET_CLASS_ID}}-usd-unit {{WIDGET_CLASS_ID}}-usd-unit-exchange-value"></td></tr><tr><td class="{{WIDGET_CLASS_ID}}-usd-title {{WIDGET_CLASS_ID}}-usd-unit-chenhlech">Chênh lệch</td><td class="{{WIDGET_CLASS_ID}}-usd-unit {{WIDGET_CLASS_ID}}-usd-unit-difference-value"></td></tr></tbody></table>
				</div>
				<div class="{{WIDGET_CLASS_ID}}-copyright">Cập nhật: <span class="{{WIDGET_CLASS_ID}}-update-time">-</span><br/Tổng hợp bởi <a href="https://bangtygia.com" target="_blank">Bảng tỷ giá</a>
				</div>
			</div>
		`,
		new: typical_widget_new,
		WidgetSpecializer: {
			drawChart: function() {
				var chart = document.getElementById(this.DOME.id);
				var status = chart.getAttribute("show-chart");
				
				if (status !== 'true') {
					document.getElementsByClassName(this.tree_parent.widget_class_id + '-chart')[0].style.display = "none";
					return;
				}
				var chartViewId = this.tree_parent.widget_class_id + '-chart-view';
				var chartJson = this.tree_parent.CHART_Data;
				
				if (typeof jQuery != 'undefined') {
			    	if (jQuery.fn.jquery != jQueryAllowedVersion) {
			    		loadScript(jQueryUrl, function() {
			    			jQueryhighcharts = jQuery.noConflict(true);
					        loadScript(highChartUrl, function() {
					           initHighChart(chartJson.buy, chartJson.sell, chartJson.date, chartViewId);
					        })
					    })
			    	} else {
			    		jQueryhighcharts = jQuery.noConflict(true);
			    		loadScript(highChartUrl, function() {
					           initHighChart(chartJson.buy, chartJson.sell, chartJson.date, chartViewId);
					     })
			    	}
				} else {
					loadScript(jQueryUrl, function() {
		    			jQueryhighcharts = jQuery.noConflict(true);
				        loadScript(highChartUrl, function() {
				           initHighChart(chartJson.buy, chartJson.sell, chartJson.date, chartViewId);
				        })
				    })
				}
				var sjcData = this.tree_parent.GOLD_Data.sjc;
				var sjcSell = formatNumber(sjcData.sell);
				var sjcSellChange = formatNumber(sjcData.sell_change);

				this.DOME.querySelector("." + this.tree_parent.widget_class_id + "-sjc-current").innerHTML = sjcSell + ' <span class="' + this.tree_parent.widget_class_id + '-price-' + sjcData.sell_change_class + '">' + priceChangeFormat(sjcData.sell_change, sjcData.sell_change_class) + '</span>';
				
			},
			goldPrice: function() {
				var chart = document.getElementById(this.DOME.id);
				var dataType = chart.getAttribute("show-prices");
				if (dataType == '' || dataType == null) {
					document.getElementsByClassName(this.tree_parent.widget_class_id + '-sjc')[0].style.display = "none";
					return;
				}
				var goldData = this.tree_parent.GOLD_Data;
				var tableElement = document.getElementsByClassName(this.tree_parent.widget_class_id + '-sjc')[0].getElementsByTagName('tbody')[0];
				var priceChangeClass = this.tree_parent.widget_class_id + '-price-';
				dataType.split(",").forEach((type) => {
					if (goldData[type] != undefined) {
						var gold = goldData[type];

						var tr = tableElement.insertRow(-1);
			            var target = tr.insertCell(0);
			            var buy = tr.insertCell(1);
			            var sell = tr.insertCell(2);

			            target.innerHTML = '<a href="https://bangtygia.com' + gold.link + '" target="_blank">' + gold.name + '</a>';
			            buy.innerHTML = formatNumber(gold.buy) + '<br/><span class="' + priceChangeClass + gold.buy_change_class + '">' + priceChangeFormat(gold.buy_change, gold.buy_change_class) + '</span>';
			            sell.innerHTML = formatNumber(gold.sell) + '<br/><span class="' + priceChangeClass + gold.sell_change_class + '">' + priceChangeFormat(gold.sell_change, gold.sell_change_class) + '</span>';
					}
				});

			},
			xauUSD: function() {
				var chart = document.getElementById(this.DOME.id);
				var status = chart.getAttribute("show-xauusd");
				if (status !== 'true') {
					document.getElementsByClassName(this.tree_parent.widget_class_id + '-xauusd')[0].style.display = "none";
					return;
				}
				var data = this.tree_parent.XAUUSD_Data;
				this.DOME.querySelector("." + this.tree_parent.widget_class_id + "-xau-usd-price").innerHTML = data.price;
				this.DOME.querySelector("." + this.tree_parent.widget_class_id + "-xau-usd-change").innerHTML =  data.percent + "(" + data.change + ")";
				var changeElement = document.getElementsByClassName(this.tree_parent.widget_class_id + '-xau-usd-change');
					changeElement[0].classList.add(this.tree_parent.widget_class_id + '-price-' + data.class);
			},
			bitcoin: function() {
				var chart = document.getElementById(this.DOME.id);
				var status = chart.getAttribute("show-bitcoin");
				if (status !== 'true') {
					document.getElementsByClassName(this.tree_parent.widget_class_id + '-wbitcoin')[0].style.display = "none";
					return;
				}
				var data = this.tree_parent.BITCOIN_Data;
				this.DOME.querySelector("." + this.tree_parent.widget_class_id + "-bitcoin-price").innerHTML = data.price;
				this.DOME.querySelector("." + this.tree_parent.widget_class_id + "-bitcoin-change").innerHTML =  data.change_1h + "(" + data.change_24h + ")";
				var changeElement = document.getElementsByClassName(this.tree_parent.widget_class_id + '-bitcoin-change');
					changeElement[0].classList.add(this.tree_parent.widget_class_id + '-price-' + data.class);
			},
			goldUSDExchange: function() {
				var chart = document.getElementById(this.DOME.id);
				var status = chart.getAttribute("show-exchange");
				if (status !== 'true') {
					document.getElementsByClassName(this.tree_parent.widget_class_id + '-exchange')[0].style.display = "none";
					return;
				}
				var data = this.tree_parent.RATES_Data;
				this.DOME.querySelector("." + this.tree_parent.widget_class_id + "-usd-unit-gold-value").innerHTML = data.gold;
				this.DOME.querySelector("." + this.tree_parent.widget_class_id + "-usd-unit-rate-value").innerHTML = data.usd_rate;
				this.DOME.querySelector("." + this.tree_parent.widget_class_id + "-usd-unit-exchange-value").innerHTML = data.exchange;
				this.DOME.querySelector("." + this.tree_parent.widget_class_id + "-usd-unit-difference-value").innerHTML = data.difference;
			},
			updateTime: function() {
				var data = this.tree_parent.UPDATE_Time;
				this.DOME.querySelector("." + this.tree_parent.widget_class_id + "-update-time").innerHTML = data;
			},

		},
	});
})();

var widget = BangTyGia.Shared.Widget.new("bang-ty-gia");
widget.bitcoin();
widget.drawChart();
widget.goldPrice();
widget.xauUSD();
widget.goldUSDExchange();
widget.updateTime();