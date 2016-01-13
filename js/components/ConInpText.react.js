var React = require("react");
var ReactPropTypes = React.PropTypes;
var AppAction = require("../actions/AppAction");

var ConInpText = React.createClass({
	displayName: "ConInpText",
	
	propTypes: {
    InpLevel: ReactPropTypes.number.isRequired,
		InpExp: ReactPropTypes.number.isRequired,
		InpFeed5: ReactPropTypes.number.isRequired,
		InpFeed20: ReactPropTypes.number.isRequired,
		InpFeed100: ReactPropTypes.number.isRequired,
		InpFeed5x: ReactPropTypes.number.isRequired,
		InpFeed20x: ReactPropTypes.number.isRequired,
		InpFeed100x: ReactPropTypes.number.isRequired
  },
	
	handleInput: function(event) {
		var type = event.target.id;
		var input = parseInt(event.target.value);
		
		if ( isNaN(input) == true ) {
			input = 0;
			document.getElementById(event.target.id).value = 0;		
		} else {
			AppAction.inputChange(type, input);
		}
	},

	render: function(){
		var classDiv = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";
		var classInp = "mdl-textfield__input";
		var classLabel = "mdl-textfield__label";
		var classErr = "mdl-textfield__error";
		var idStringTemp = "";
		
		var textAList = ["現在Lv:", "次のLvまでの経験値:"];
		var textAId = ["InpLevel", "InpExp"];
		var textATemp;
		var textAOutput = [];
		
		for ( var i = 0; i < textAList.length; i++) {
			idStringTemp = textAId[i];
			textATemp = (
				<div className={classDiv} key={idStringTemp}>
			   	<input className={classInp} type="text" pattern="-?[0-9]*(\.[0-9]+)?" id={idStringTemp} onInput={this.handleInput} defaultValue={this.props[textAId[i]]} />
			   	<label className={classLabel} htmlFor={idStringTemp}>{textAList[i]}</label>
			   	<span className={classErr}>数値が正しくありません</span>
			  </div>
			);
			textAOutput.push(textATemp);
		}
		
		var textBList = ["同属性 5才:", "20才:", "100才:"];
		var textBId = ["InpFeed5", "InpFeed20", "InpFeed100"];
		var textBTemp;
		var textBOutput = [];
		
		for ( var i = 0; i < textBList.length; i++) {
			idStringTemp = textBId[i];
			textBTemp = (
				<div className={classDiv} key={idStringTemp}>
			   	<input className={classInp} type="text" pattern="-?[0-9]*(\.[0-9]+)?" id={idStringTemp} onInput={this.handleInput} defaultValue={this.props[textBId[i]]} />
			   	<label className={classLabel} htmlFor={idStringTemp}>{textBList[i]}</label>
			   	<span className={classErr}>数値が正しくありません</span>
			  </div>
			);
			textBOutput.push(textBTemp);
		}

		var textCList = ["別属性 5才:", "20才:", "100才:"];
		var textCId = ["InpFeed5x", "InpFeed20x", "InpFeed100x"];
		var textCTemp;
		var textCOutput = [];
		
		for ( var i = 0; i < textCList.length; i++) {
			idStringTemp = textCId[i];
			textCTemp = (
				<div className={classDiv} key={idStringTemp}>
			   	<input className={classInp} type="text" pattern="-?[0-9]*(\.[0-9]+)?" id={idStringTemp} onInput={this.handleInput} defaultValue={this.props[textCId[i]]} />
			   	<label className={classLabel} htmlFor={idStringTemp}>{textCList[i]}</label>
			   	<span className={classErr}>数値が正しくありません</span>
			  </div>
			);
			textCOutput.push(textCTemp);
		}

		
		return(
		<div className = "ConInpText" >
			<div>
				{textAOutput}
      </div>
      <h5>合成素材</h5>
      <div>
			  {textBOutput}
      </div>
      <div>
				{textCOutput}
      </div>
		</div>
		);
	}
});

module.exports = ConInpText;