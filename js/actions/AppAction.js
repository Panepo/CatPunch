var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppAction = {
	InpLevel: function(InpLevel){
		AppDispatcher.dispatch({
			actionType: "InputLevel",
			InpLevel: InpLevel
		});
	},
	
	InpExp: function(InpExp){
		AppDispatcher.dispatch({
			actionType: "InputExp",
			InpExp: InpExp
		});
	},
	
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
	
	InpFeed5: function(InpFeed5){
		AppDispatcher.dispatch({
			actionType: "InputFeed5",
			InpFeed5: InpFeed5
		});
	},
	
	InpFeed20: function(InpFeed20){
		AppDispatcher.dispatch({
			actionType: "InputFeed20",
			InpFeed20: InpFeed20
		});
	},

	InpFeed100: function(InpFeed100){
		AppDispatcher.dispatch({
			actionType: "InputFeed100",
			InpFeed100: InpFeed100
		});
	},

	InpFeed5x: function(InpFeed5x){
		AppDispatcher.dispatch({
			actionType: "InputFeed5x",
			InpFeed5x: InpFeed5x
		});
	},
	
	InpFeed20x: function(InpFeed20x){
		AppDispatcher.dispatch({
			actionType: "InputFeed20x",
			InpFeed20x: InpFeed20x
		});
	},

	InpFeed100x: function(InpFeed100x){
		AppDispatcher.dispatch({
			actionType: "InputFeed100x",
			InpFeed100x: InpFeed100x
		});
	}
	
};

module.exports = AppAction;
