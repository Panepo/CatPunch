var React = require("react");
var Header = require("./Header.react");
var ContentInp = require("./ContentInp.react");
var ContentOut = require("./ContentOut.react");
var Footer = require("./Footer.react");
var AppStore = require("../stores/AppStore");

var FKGCalApp = React.createClass({

	getInitialState: function(){
		return{
			CalData: AppStore.getValue()
		};
	},
	
	componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
	},

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

	render: function(){
		return(
			<div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
				<Header />
				<ContentInp CalData={this.state.CalData}/>
				<ContentOut CalData={this.state.CalData}/>		
				<Footer />	
			</div>
		);
	},
	
	_onChange: function(){
		this.setState({
			CalData: AppStore.getValue()
		});
	}
});

module.exports = FKGCalApp;