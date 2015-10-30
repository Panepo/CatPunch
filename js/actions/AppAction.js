var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppAction = {
	RarityC: function(){
		AppDispatcher.dispatch({
			actionType: "RarityChange"
		});
	},

	PromptC: function(){
		AppDispatcher.dispatch({
			actionType: "PromptChange"
		});
	}
};

module.exports = AppAction;
