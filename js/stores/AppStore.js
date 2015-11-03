var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require("object-assign");

var CHANGE_EVENT = 'change';

var _CalData = {
	InpLevel: 1,
	InpExp: 33,
	InpRar: 2,
	InpPro: 0
	};

// ===============================================================================
// APP STORE FUNCTIONS
// ===============================================================================
function _RarityC(){
	_CalData.InpLevel++;
}


function _PromptC(){
	_CalData.InpExp++;
}



// ===============================================================================
// APP STORE MAIN
// ===============================================================================
// define a Store object the extends EventEmitter from node.js event lib
var AppStore = assign({}, EventEmitter.prototype, {
	getValue: function(){
		return {
			_CalData
		};
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
		case "RarityChange":
			_RarityC(); // do increase logic
			AppStore.emitChange();  // after value change, trigger a event
			break;
		case "PromptChange":
			_PromptC(); // do decrease logic
			AppStore.emitChange(); // after value change, trigger a event
			break;
		default:
	}
});

module.exports = AppStore;