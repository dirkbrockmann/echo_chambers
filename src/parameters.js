// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		L:200,
		N:160,
		N_opinion:10,
		mean_k:2.4,
		openmindedness: {
			range:[0,1],
			default:0.2
		},
		rewiring_probability: {
			range:[0,1],
			default:0.1
		}
}

