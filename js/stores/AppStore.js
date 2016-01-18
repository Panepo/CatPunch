var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require("object-assign");
var FKGExpCal = require("./FKGExpCal");

var CHANGE_EVENT = 'change';

var _CalData = {
	InpLevel: 1,
	InpExp: 33,
	InpRarity: 2,
	InpPrompt: 0,
	InpFeed5: 0,
	InpFeed20: 0,
	InpFeed100: 0,
	InpFeed5x: 0,
	InpFeed20x: 0,
	InpFeed100x: 0,
	FeedTable: [],
	DisplayEnable: false,
	expLeft: 0,
	outString: ""
	};

// ===============================================================================
// APP STORE FUNCTIONS
// ===============================================================================
function _inputChange(type, input) {
	_CalData[type] = input;
	[_CalData.outString, _CalData.expLeft, _CalData.FeedTable] = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpRarity(InpRarity){
	_CalData.InpRarity = InpRarity;
	[_CalData.outString, _CalData.expLeft, _CalData.FeedTable] = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpPrompt(InpPrompt){
	_CalData.InpPrompt = InpPrompt;
	[_CalData.outString, _CalData.expLeft, _CalData.FeedTable] = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}


// ===============================================================================
// APP STORE MAIN
// ===============================================================================
// define a Store object the extends EventEmitter from node.js event lib
var AppStore = assign({}, EventEmitter.prototype, {
	getValue: function(){
		return _CalData;
	},

  // trigger a value changed event!!
	emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
  // the callback function will be defined and be passed from view 
  // in our example, the callback function be defined in DemoApp.react.js and named _onChange
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});



// ===============================================================================
// APP DISPATCHER
// ===============================================================================
//Use dispatcher to listen some events
AppDispatcher.register(function(action){
	switch(action.actionType){
		case "InputRarity":
			_InpRarity(action.InpRarity);
			AppStore.emitChange();
			break;
			
		case "InputPrompt":
			_InpPrompt(action.InpPrompt);
			AppStore.emitChange();
			break;

		case "inputChange":
			_inputChange(action.type, action.input);
			AppStore.emitChange();
			break;

		default:
	}
});

module.exports = AppStore;