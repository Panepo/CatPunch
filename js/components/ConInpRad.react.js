var React = require("react");
var AppAction = require("../actions/AppAction");

var ConInpRad = React.createClass({
		
	handleRarity: function(){
		var InpRarity;
		
		if (document.getElementById("InpRar2").checked){
  		InpRarity = document.getElementById("InpRar2").value;
		}
		else if (document.getElementById("InpRar3").checked){
  		InpRarity = document.getElementById("InpRar3").value;
		}
		else if (document.getElementById("InpRar4").checked){
  		InpRarity = document.getElementById("InpRar4").value;
		}
		else if (document.getElementById("InpRar5").checked){
  		InpRarity = document.getElementById("InpRar5").value;
		}
		else if (document.getElementById("InpRar6").checked){
  		InpRarity = document.getElementById("InpRar6").value;
		}
		
		AppAction.InpRarity(InpRarity);
	},

	handlePrompt: function(){
		var InpPrompt;
		
		if (document.getElementById("InpPro0").checked){
  		InpPrompt = document.getElementById("InpPro0").value;
		}
		else if (document.getElementById("InpPro1").checked){
  		InpPrompt = document.getElementById("InpPro1").value;
		}
		
		AppAction.InpPrompt(InpPrompt);
	},
		
	render: function(){
				
		return(
		<div>
			<div className="demo-crumbs mdl-color-text--grey-500">
      	Panepo.Github.io &gt; Flower Knight Girl Exp Calculator 
      </div>
			<h5>對象騎士</h5>
			<p>
				レアリティ：
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					<input type="radio" id="InpRar2" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="2" defaultChecked/>
					<span className="mdl-radio__label">★★</span>
				</label>
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					<input type="radio" id="InpRar3" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="3" />
					<span className="mdl-radio__label">★★★</span>
				</label>
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					<input type="radio" id="InpRar4" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="4" />
					<span className="mdl-radio__label">★★★★</span>
				</label>
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					<input type="radio" id="InpRar5" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="5" />
					<span className="mdl-radio__label">★★★★★</span>
				</label>
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					<input type="radio" id="InpRar6" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="6" />
					<span className="mdl-radio__label">★★★★★★</span>
				</label>
			</p>
			<p>
				進化：
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					<input type="radio" id="InpPro0" className="mdl-radio__button" name="InpPro" onClick={this.handlePrompt} value="0" defaultChecked />
					<span className="mdl-radio__label">未進化</span>
				</label>
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					<input type="radio" id="InpPro1" className="mdl-radio__button" name="InpPro" onClick={this.handlePrompt} value="1" />
					<span className="mdl-radio__label">進化済</span>
				</label>
			</p>
		</div>
		);
	}
});

module.exports = ConInpRad;