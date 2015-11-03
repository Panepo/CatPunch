var React = require("react");
var Header = require("./Header.react");
var ConInpRad = require("./ConInpRad.react");
var ConInpText = require("./ConInpText.react");
var ConOut = require("./ConOut.react");
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
				<ConInpRad CalData={this.state.CalData}/>
				<ConInpText CalData={this.state.CalData}/>
				<ConOut CalData={this.state.CalData}/>		
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