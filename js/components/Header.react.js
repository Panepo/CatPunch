// Header 負責呈現兩個 button 並負責 click 的事件以及與 Action 溝通

var React = require("react");
var AppAction = require("../actions/AppAction");

var Header = React.createClass({
	
	handleRarity: function(){
		AppAction.RarityC();
	},

	handlePrompt: function(){
		AppAction.PromptC();
	},
	
	handleLevel: function(){
		AppAction.LevelC();
	},
	
	handleExp: function(){
		AppAction.ExpC();
	},
	
	
	render: function(){
		return(
		<div>
			<h5>對象騎士</h5>
			<p>
				レアリティ：
				<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="InpRar2">
					<input type="radio" id="InpRar2" class="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="2" />
					<span class="mdl-radio__label">★★</span>
				</label>
				<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="InpRar3">
					<input type="radio" id="InpRar3" class="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="3" />
					<span class="mdl-radio__label">★★★</span>
				</label>
				<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="InpRar4">
					<input type="radio" id="InpRar4" class="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="4" />
					<span class="mdl-radio__label">★★★★</span>
				</label>
				<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="InpRar5">
					<input type="radio" id="InpRar5" class="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="5" />
					<span class="mdl-radio__label">★★★★★</span>
				</label>
				<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="InpRar6">
					<input type="radio" id="InpRar6" class="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="6" />
					<span class="mdl-radio__label">★★★★★★</span>
				</label>
			</p>
			<p>
				進化：
				<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="InpPro0">
					<input type="radio" id="InpPro0" class="mdl-radio__button" name="InpPro" onClick={this.handlePrompt} value="0" />
					<span class="mdl-radio__label">未進化</span>
				</label>
				<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="InpPro1">
					<input type="radio" id="InpPro1" class="mdl-radio__button" name="InpPro" onClick={this.handlePrompt} value="1" />
					<span class="mdl-radio__label">進化済</span>
				</label>
			</p>
			<button onClick={this.handleRarity}>Increase</button>
			<button onClick={this.handlePrompt}>Decrease</button>
		</div>
		);
	}
});

module.exports = Header;