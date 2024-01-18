// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 400,
		slider_show: true,
		slider_gap : 2,
		slider_anchor: {x:1,y:8},
		slider_girth:12,
		slider_knob:14,
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:4,y:5},
		resetbutton_anchor:{x:2,y:5}
	},
	simulation: {
		delay:0,
		node_min_size:3,
		node_max_size:10
	},
	plot:{
		anchor:{x:7,y:6},
		width:150,
		height:280,
		x_label:"opinions"
	}
}