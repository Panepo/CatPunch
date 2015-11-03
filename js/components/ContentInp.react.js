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
		
		var CalData = this.props.CalData;
		
		var rar2 = <input type="radio" id="InpRar2" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="2" />;
		var rar3 = <input type="radio" id="InpRar3" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="3" />;
		var rar4 = <input type="radio" id="InpRar4" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="4" />;
		var rar5 = <input type="radio" id="InpRar5" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="5" />;
		var rar6 = <input type="radio" id="InpRar6" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="6" />;
		
    if (CalData.InpRar == 2) {
    	rar2 = <input type="radio" id="InpRar2" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="2" checked />;
    }
    else if (CalData.InpRar == 3) {
    	rar3 = <input type="radio" id="InpRar3" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="3" checked />;
    }
    else if (CalData.InpRar == 4) {
    	rar4 = <input type="radio" id="InpRar4" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="4" checked />;
    }
    else if (CalData.InpRar == 5) {
    	rar5 = <input type="radio" id="InpRar5" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="5" checked />;
    }
    else if (CalData.InpRar == 6) {
    	rar6 = <input type="radio" id="InpRar6" className="mdl-radio__button" name="InpRar" onClick={this.handleRarity} value="6" checked />;
    }
    
    var pro0 = <input type="radio" id="InpPro0" className="mdl-radio__button" name="InpPro" onClick={this.handlePrompt} value="0" />;
    var pro1 = <input type="radio" id="InpPro1" className="mdl-radio__button" name="InpPro" onClick={this.handlePrompt} value="1" />;
    
    if (CalData.InpPro == 0) {
    	pro0 = <input type="radio" id="InpPro0" className="mdl-radio__button" name="InpPro" onClick={this.handlePrompt} value="0" checked />;
    }
    else if (CalData.InpPro == 1) {
    	pro1 = <input type="radio" id="InpPro1" className="mdl-radio__button" name="InpPro" onClick={this.handlePrompt} value="1" checked />;
    }
    
		
		
		return(
		<div>
			<div className="demo-crumbs mdl-color-text--grey-500">
      	Panepo.Github.io &gt; Flower Knight Girl Exp Calculator 
      </div>
			<h5>對象騎士</h5>
			<p>
				レアリティ：
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					{rar2}
					<span className="mdl-radio__label">★★</span>
				</label>
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					{rar3}
					<span className="mdl-radio__label">★★★</span>
				</label>
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					{rar4}
					<span className="mdl-radio__label">★★★★</span>
				</label>
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					{rar5}
					<span className="mdl-radio__label">★★★★★</span>
				</label>
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					{rar6}
					<span className="mdl-radio__label">★★★★★★</span>
				</label>
			</p>
			<p>
				進化：
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					{pro0}
					<span className="mdl-radio__label">未進化</span>
				</label>
				<label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
					{pro1}
					<span className="mdl-radio__label">進化済</span>
				</label>
			</p>
			<p>
				<form action="#">
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpLevel" oninput={this.handleLevel} value={CalData.InpLevel} />
			    	<label className="mdl-textfield__label" for="InpLevel">現在Lv:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>		
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpExp" oninput={this.handleExp} value={CalData.InpExp} />
			    	<label className="mdl-textfield__label" for="InpExp">次のLvまでの経験値:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
				</form>
      </p>
			<button onClick={this.handleRarity}>Increase</button>
			<button onClick={this.handlePrompt}>Decrease</button>
		</div>
		);
	}
});

module.exports = Header;