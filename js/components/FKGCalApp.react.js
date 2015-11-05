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
		<div>
			<div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
				<Header />
				<main className="demo-main mdl-layout__content">
					<div className="demo-container mdl-grid">
						<div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
						<div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
						<ConInpRad />
						<ConInpText />
						<ConOut CalData={this.state.CalData}/>
						</div>
					</div>
				</main>
				<Footer />	
			</div>
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