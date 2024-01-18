import * as d3 from "d3"
import {schemeSet3} from "d3-scale-chromatic"
import cfg from "./config.js"
import param from "./parameters.js"
import {nodes} from "./model.js"
import {range,each} from "lodash-es"
import styles from "./styles.module.css"

var C = schemeSet3;

function compute_histogram(nodes){
	let h = [];
	each(range(param.N_opinion),i=>{
		h[i]=nodes.filter(function(n){return n.opinion==i}).length;
	})
	return h;
}

var sc_x = d3.scaleLinear().domain([0,param.N_opinion]).range([0, cfg.plot.width])
var sc_y = d3.scaleLinear().range([0,-cfg.plot.height])
var xAxis = d3.axisBottom(sc_x).tickFormat("");
var yAxis = d3.axisLeft(sc_y).tickFormat("");


const spike = (d,i) => {
	return "M"+(6+sc_x(i))+","+sc_y(0)+"L"+(6+sc_x(i))+","+sc_y(d);
}

const initialize = (controls,grid) => {
	

	const h = compute_histogram(nodes)
	sc_y.domain([0,param.N])	
			
	const pos=grid.position(cfg.plot.anchor.x,cfg.plot.anchor.y);		

	controls.select("."+styles.plot).remove()
		
	const plot = controls.append("g").attr("class",styles.plot)
		.attr("transform","translate("+pos.x+","+pos.y+")")
	
	plot.append("g").call(xAxis).attr("class",styles.xaxis);
	
	plot.selectAll(null).data(h).enter().append("path")
		.attr("class",styles.spike)
		.attr("d",spike)
		.style("stroke",function(d,i){return C[i]})
	
	
}

const update = (controls) => {
	
	const h = compute_histogram(nodes)
		
	controls.selectAll("."+styles.spike).data(h).attr("d",spike)
	
}

export {initialize,update}

