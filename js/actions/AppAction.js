var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppAction = {
	InpRarity: function(InpRarity){
		AppDispatcher.dispatch({
			actionType: "InputRarity",
			InpRarity: InpRarity
		});
	},
	
	InpPrompt: function(InpPrompt){
		AppDispatcher.dispatch({
			actionType: "InputPrompt",
			InpPrompt: InpPrompt
		});
	},
	
	inputChange: function(type, input) {	
		AppDispatcher.dispatch({
			actionType: "inputChange",
			type: type,
			input: input
		});
	}
	
};

module.exports = AppAction;
