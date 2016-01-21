var React = require("react");
var ReactPropTypes = React.PropTypes;
var AppAction = require("../actions/AppAction");

var ConInpRad = React.createClass({
	displayName: "ConInpRad",
	
	propTypes: {
    InpPrompt: ReactPropTypes.number.isRequired,
		InpRarity: ReactPropTypes.number.isRequired
  },
		
	handleRarity: function(rarity){
		AppAction.InpRarity(rarity);
	},

	handlePrompt: function(prompt){
		AppAction.InpPrompt(prompt);
	},
		
	render: function(){
		var buttonClassActive = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary";
		var buttonClassInactive = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent";
		var idStringTemp = "";
		var classTemp = "";
		
		// ===============================================================================
		// Generate rarity buttons
		// ===============================================================================
		var rarityList = ["★★", "★★★", "★★★★", "★★★★★", "★★★★★★"];
		var rarityTemp;
		var rarityOutput = [];
		
		for ( var i = 0; i < rarityList.length; i++) {
			idStringTemp = "rarity" + i.toString();
			
			if ( this.props.InpRarity == (i+2) ) {
				classTemp = buttonClassActive;
			} else {
				classTemp = buttonClassInactive;
			}
			
			rarityTemp = (
				<button key={idStringTemp} className={classTemp} onClick={this.handleRarity.bind(null, i+2)}>
					{rarityList[i]}
				</button>
			);
			rarityOutput.push(rarityTemp);
		}
		
		// ===============================================================================
		// Generate prompt buttons
		// ===============================================================================
		var promptList = ["未進化", "進化済"];
		var promptTemp;
		var promptOutput = [];
		
		for ( var i = 0; i < promptList.length; i++) {
			idStringTemp = "prompt" + i.toString();
			
			if ( this.props.InpPrompt == i ) {
				classTemp = buttonClassActive;
			} else {
				classTemp = buttonClassInactive;
			}
			
			promptTemp = (
				<button key={idStringTemp} className={classTemp} onClick={this.handlePrompt.bind(null, i)}>
					{promptList[i]}
				</button>
			);
			promptOutput.push(promptTemp);
		}

		// ===============================================================================
		// return
		// ===============================================================================		
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