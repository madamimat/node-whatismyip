#!/usr/bin/env node

var http = require('http');
var Table = require('cli-table');

var opt = {
		host: 'ip-api.com',
		path: '/json'
	};

callback = function (response){
		var str = '';
		response.on('data',function (chunk){
			str +=chunk;
	});
	response.on('end',function(){
		var ip = JSON.parse(str);
		var tab = new Table();
			tab.push(
				{'Your IP':  ip.query},
				{'City': ip.city},
				{'Country': ip.country},
				{'ISP': ip.isp},
				{'Latitude': ip.lat},
				{'Longitude': ip.lon},
				{'Time Zone': ip.timezone},
				{'Zip': ip.zip}
			);

		console.log(tab.toString());
	});
}

http.request(opt,callback).end();