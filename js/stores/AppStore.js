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
	DisplayEnable: false
	};

// ===============================================================================
// APP STORE FUNCTIONS
// ===============================================================================
function _InpLevel(InpLevel){
	_CalData.InpLevel = InpLevel;
	_CalData.FeedTable = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpExp(InpExp){
	_CalData.InpExp = InpExp;
	_CalData.FeedTable = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpRarity(InpRarity){
	_CalData.InpRarity = InpRarity;
	_CalData.FeedTable = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpPrompt(InpPrompt){
	_CalData.InpPrompt = InpPrompt;
	_CalData.FeedTable = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpFeed5(InpFeed5){
	_CalData.InpFeed5 = InpFeed5;
	_CalData.FeedTable = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpFeed20(InpFeed20){
	_CalData.InpFeed20 = InpFeed20;
	_CalData.FeedTable = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpFeed100(InpFeed100){
	_CalData.InpFeed100 = InpFeed100;
	_CalData.FeedTable = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpFeed5x(InpFeed5x){
	_CalData.InpFeed5x = InpFeed5x;
	_CalData.FeedTable = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpFeed20x(InpFeed20x){
	_CalData.InpFeed20x = InpFeed20x;
	_CalData.FeedTable = FKGExpCal.ExpCal(_CalData);
	_CalData.DisplayEnable = true;
}

function _InpFeed100x(InpFeed100x){
	_CalData.InpFeed100x = InpFeed100x;
	_CalData.FeedTable = FKGExpCal.ExpCal(_CalData);
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
		case "InputLevel":
			_InpLevel(action.InpLevel);
			AppStore.emitChange();
			break;
			
		case "InputExp":
			_InpExp(action.InpExp);
			AppStore.emitChange();
			break;
		
		case "InputRarity":
			_InpRarity(action.InpRarity);
			AppStore.emitChange();
			break;
			
		case "InputPrompt":
			_InpPrompt(action.InpPrompt);
			AppStore.emitChange();
			break;

		case "InputFeed5":
			_InpFeed5(action.InpFeed5);
			AppStore.emitChange();
			break;

		case "InputFeed20":
			_InpFeed20(action.InpFeed20);
			AppStore.emitChange();
			break;	

		case "InputFeed100":
			_InpFeed100(action.InpFeed100);
			AppStore.emitChange();
			break;

		case "InputFeed5x":
			_InpFeed5x(action.InpFeed5x);
			AppStore.emitChange();
			break;

		case "InputFeed20x":
			_InpFeed20x(action.InpFeed20x);
			AppStore.emitChange();
			break;	

		case "InputFeed100x":
			_InpFeed100x(action.InpFeed100x);
			AppStore.emitChange();
			break;

		default:
	}
});

module.exports = AppStore;