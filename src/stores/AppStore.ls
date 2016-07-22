require! {
	"../dispatcher/AppDispatcher.ls": AppDispatcher
	"events": { EventEmitter: EventEmitter }
	"object-assign": assign
	"./FKGExpCal.ls": FKGExpCal
}

CHANGE_EVENT = 'change'

_CalData = {
	InpLevel: 1
	InpExp: 33
	InpRarity: 2
	InpPrompt: 0
	InpFeed5: 0
	InpFeed20: 0
	InpFeed100: 0
	InpFeed5x: 0
	InpFeed20x: 0
	InpFeed100x: 0
	FeedTable: []
	DisplayEnable: false
	expLeft: 0
	outString: ""
}

# ===============================================================================
# APP STORE FUNCTIONS
# ===============================================================================
_inputChange = (type, input) !->
	_CalData[type] = input
	[_CalData.outString, _CalData.expLeft, _CalData.FeedTable] = FKGExpCal.ExpCal(_CalData)
	_CalData.DisplayEnable = true

_InpRarity = (InpRarity) !->
	_CalData.InpRarity = InpRarity
	[_CalData.outString, _CalData.expLeft, _CalData.FeedTable] = FKGExpCal.ExpCal(_CalData)
	_CalData.DisplayEnable = true

_InpPrompt = (InpPrompt) !->
	_CalData.InpPrompt = InpPrompt
	[_CalData.outString, _CalData.expLeft, _CalData.FeedTable] = FKGExpCal.ExpCal(_CalData)
	_CalData.DisplayEnable = true

# ===============================================================================
# APP STORE MAIN
# ===============================================================================
AppStore = assign({}, EventEmitter.prototype, {
	getValue: ->
		_CalData
	emitChange: !->
		@emit(CHANGE_EVENT)
	addChangeListener: (callback) !->
		@on(CHANGE_EVENT, callback)
	removeChangeListener: (callback) !->
		@removeListener(CHANGE_EVENT, callback)
})

# ===============================================================================
# APP DISPATCHER
# ===============================================================================
AppDispatcher.register( (action) !->
	switch action.actionType
	case "InputRarity"
		_InpRarity(action.InpRarity)
		AppStore.emitChange()
	case "InputPrompt"
		_InpPrompt(action.InpPrompt)
		AppStore.emitChange()
	case "inputChange"
		_inputChange(action.type, action.input)
		AppStore.emitChange()
)

module.exports = AppStore