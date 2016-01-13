var React = require("react");
var ReactPropTypes = React.PropTypes;
var AppAction = require("../actions/AppAction");

var ConInpRad = React.createClass({
	displayName: "ConInpRad",
	
	propTypes: {
    InpPrompt: ReactPropTypes.number.isRequired,
		InpRarity: ReactPropTypes.number.isRequired
  },
		
	handleRarity: function(event){
		var InpRarity = parseInt(event.target.id.slice(6)) + 2;
		AppAction.InpRarity(InpRarity);
	},

	handlePrompt: function(event){
		var InpPrompt = parseInt(event.target.id.slice(6));	
		AppAction.InpPrompt(InpPrompt);
	},
		
	render: function(){
		var buttonClassActive = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary";
		var buttonClassInactive = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent";
		var idStringTemp = "";
		
		var rarityList = ["★★", "★★★", "★★★★", "★★★★★", "★★★★★★"];
		var rarityTemp;
		var rarityOutput = [];
		
		for ( var i = 0; i < rarityList.length; i++) {
			idStringTemp = "rarity" + i.toString();
			
			if ( this.props.InpRarity == (i+2) ) {
				rarityTemp = (
					<button id={idStringTemp} key={idStringTemp} className={buttonClassActive} onClick={this.handleRarity}>
						{rarityList[i]}
					</button>
				);
			} else {
				rarityTemp = (
					<button id={idStringTemp} key={idStringTemp} className={buttonClassInactive} onClick={this.handleRarity}>
						{rarityList[i]}
					</button>
				);
			}
			rarityOutput.push(rarityTemp);
		}
		
		
		var promptList = ["未進化", "進化済"];
		var promptTemp;
		var promptOutput = [];
		
		for ( var i = 0; i < promptList.length; i++) {
			idStringTemp = "prompt" + i.toString();
			
			if ( this.props.InpPrompt == i ) {
				promptTemp = (
					<button id={idStringTemp} key={idStringTemp} className={buttonClassActive} onClick={this.handlePrompt}>
						{promptList[i]}
					</button>
				);
			} else {
				promptTemp = (
					<button id={idStringTemp} key={idStringTemp} className={buttonClassInactive} onClick={this.handlePrompt}>
						{promptList[i]}
					</button>
				);
			}
			promptOutput.push(promptTemp);
		}
		
		return(
		<div className="ConInpRad">
      <h4>フラワーナイトガール経験値計算機</h4>
			<h5>對象騎士</h5>
			<div>
				レアリティ：
				{rarityOutput}
			</div>
			<div>
				進化：
				{promptOutput}
			</div>
		</div>
		);
	}
});

module.exports = ConInpRad;