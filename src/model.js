// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,filter} from "lodash-es"
import {compute_degree} from "./utils"

//const L = param.L;
//const dt = param.dt;

// typically objects needed for the explorable
// are defined here

var nodes = [];
var links = [];
var selected_link;

const N = param.N;
const L = param.L;
const No = param.N_opinion;

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	links=[];

	nodes = range(N).map(i => {return {
		id:i,
		opinion: Math.floor(Math.random() * No),
		x:(Math.random()-0.5)*2*L,
		y:(Math.random()-0.5)*2*L	
	}});	


	for (var i=0;i<N;i++) {
		for (var j=0;j<i;j++){
			if(Math.random()<param.mean_k/(N-1)){
				links.push({"source":nodes[i],"target":nodes[j]});
			}
		}
	}
	compute_degree(nodes,links)
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;

	const P = param.openmindedness.widget.value();
	const alpha = param.rewiring_probability.widget.value();
	const discordant = links.filter(l => l.source.opinion != l.target.opinion);
	if (discordant.length>0) {
	
		selected_link = discordant[Math.floor(Math.random() * discordant.length)];
		
		if (Math.random() < 1-alpha){
						
			if(Math.random() < 0.5) {
				selected_link.source.opinion = selected_link.target.opinion
			} else {
				selected_link.target.opinion = selected_link.source.opinion
			};

		} else {
			
			let source = selected_link.source;
			let target = selected_link.target;
			let source_op = selected_link.source.opinion;
			let target_op = selected_link.target.opinion;

			if(Math.random()<0.5){
				let likes = Math.random() < (1-P) ? filter(nodes,n=>(n.opinion==source_op && n.id!=source.id)) : filter(nodes,n=>n.id!=source.id)
				if(likes.length>0){
					selected_link.target=likes[Math.floor(Math.random() * likes.length)]
				}
				
			} else {
				let likes = Math.random() < (1-P) ? filter(nodes,n=>(n.opinion==target_op && n.id!=target.id)) : filter(nodes,n=>n.id!=target.id)
				if(likes.length>0){
					selected_link.source=likes[Math.floor(Math.random() * likes.length)];
				}
			}
		
		} 
		

	} 
	return discordant.length>0

}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {selected_link,nodes,links,initialize,go,update}
