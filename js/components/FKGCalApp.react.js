// View

var React = require("react");
var Header = require("./Header.react");
var Content = require("./Content.react");
var AppStore = require("../stores/AppStore");

var FKGCalApp = React.createClass({
	
  //initial stage, use Store to get default value and bind to the React state
	getInitialState: function(){
		return{
			value: AppStore.getValue()
		};
	},
	
	componentDidMount: function() {
	  //listen up an event from Store, if value in Store changed, _onChange function will be triggered
    AppStore.addChangeListener(this._onChange);
	},

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

	render: function(){
		return(
			<div>
				<Header />
				<Content value={this.state.value}/>			
			</div>
		);
	},
	
  // If value in Store change, this function will be triggered
  // so we need to reset the state
	_onChange: function(){
		this.setState({
			value: AppStore.getValue()
		});
	}
});

module.exports = FKGCalApp;