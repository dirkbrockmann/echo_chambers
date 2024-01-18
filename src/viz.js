import * as d3 from "d3"
import {schemeSet3} from "d3-scale-chromatic"
import param from "./parameters.js"
import {selected_link,nodes,links} from "./model.js"
import styles from "./styles.module.css"
import cfg from "./config.js"


var link, node, simulation;

const X = d3.scaleLinear().domain([-param.L,param.L]);
const Y = d3.scaleLinear().domain([-param.L,param.L]);
var S = d3.scaleLinear().range([cfg.simulation.node_min_size,cfg.simulation.node_max_size]);;
var C = schemeSet3;

const initialize = (display,config) => {
	

	const W = config.display_size.width;
	const H = config.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
	
	S.domain(d3.extent(nodes,function(d){return d.k}))
		
	display.selectAll("#origin").remove();
	
	const origin = display.append("g").attr("id","origin")
			
	link = origin.selectAll(null).data(links).enter().append("line").attr("class",styles.edge)		
      	.attr("x1", function(d) { return X(d.source.x); })
      	.attr("y1", function(d) { return Y(d.source.y); })
      	.attr("x2", function(d) { return X(d.target.x); })
      	.attr("y2", function(d) { return Y(d.target.y); })

		  
	node = origin.selectAll(null).data(nodes).enter().append("circle").attr("class",styles.node)
	.attr("transform",function(d) { return "translate("+X(d.x)+","+Y(d.y)+")"})
    .attr("r", function(d){return S(d.k)})
	.style("fill",function(d){return C[d.opinion]})
	.call(d3.drag()
	.on("start", dragstarted)
	.on("drag", dragged)
	.on("end", dragended));	
	
	simulation = d3.forceSimulation(nodes)
		.force("charge", d3.forceManyBody().strength(-20))
		.force("link", d3.forceLink(links).distance(10).strength(1))
		.force("x", d3.forceX())
		.force("y", d3.forceY())
		.alphaTarget(0)
		.on("tick", ticked);	
};


const go = (display,config) => { 
	node.style("fill",function(d){return C[d.opinion]})
	link
		.style("stroke",function(d){return d.index==selected_link.index ? "red" : "gray"})
		.style("stroke-width",function(d){return d.index==selected_link.index ? "5" : "1"})

	if(param.tick % 10 == 0 ) { simulation.alpha(0.4).restart()	}
}

const update = (display,config) => { }


function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}


function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

function ticked() {
  link
      .attr("x1", function(d) { return X(d.source.x); })
      .attr("y1", function(d) { return Y(d.source.y); })
      .attr("x2", function(d) { return X(d.target.x); })
      .attr("y2", function(d) { return Y(d.target.y); });

  node
	.attr("transform",function(d) { return "translate("+X(d.x)+","+Y(d.y)+")"})
}

export {initialize,go,update}
