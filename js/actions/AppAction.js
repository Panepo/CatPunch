var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppAction = {
	LevelInput: function(InpLevel){
		AppDispatcher.dispatch({
			actionType: "LevelInput",
			InpLevel: InpLevel
		});
	},
	
	RarityC: function(InpRarity){
		AppDispatcher.dispatch({
			actionType: "RarityChange",
			InpRarity: InpRarity
		});
	},
	
	PromptC: function(InpPrompt){
		AppDispatcher.dispatch({
			actionType: "PromptChange",
			InpPrompt: InpPrompt
		});
	}
};

module.exports = AppAction;
