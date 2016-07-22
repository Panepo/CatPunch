require! {
	"../dispatcher/AppDispatcher.ls": AppDispatcher
}

AppAction = 
	InpRarity: (InpRarity) !->
		AppDispatcher.dispatch(
			actionType: "InputRarity"
			InpRarity: InpRarity
			)
	
	InpPrompt: (InpPrompt) !->
		AppDispatcher.dispatch(
			actionType: "InputPrompt"
			InpPrompt: InpPrompt
			)
	
	inputChange: (type, input) !->
		AppDispatcher.dispatch(
			actionType: "inputChange"
			type: type
			input: input
			)

module.exports = AppAction
