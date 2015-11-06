var React = require("react");
var AppAction = require("../actions/AppAction");

var ConInpText = React.createClass({
	  
  handleLevel: function() {
		var InpLevel;
		InpLevel = parseInt(document.getElementById("InpLevel").value);
    AppAction.InpLevel(InpLevel);
    if ( isNaN(InpLevel) == true ){
    	InpLevel = 0;
    }
    document.getElementById("InpLevel").value = InpLevel;
  },
  
  handleExp: function() {
		var InpExp;
		InpExp = parseInt(document.getElementById("InpExp").value);
    AppAction.InpExp(InpExp);
    if ( isNaN(InpExp) == true ){
    	InpExp = 0;
    }
    document.getElementById("InpExp").value = InpExp;
  },
  
  handleFeed5: function() {
		var InpFeed5;
		InpFeed5 = parseInt(document.getElementById("InpFeed5").value);
    AppAction.InpFeed5(InpFeed5);
    if ( isNaN(InpFeed5) == true ){
    	InpFeed5 = 0;
    }
    document.getElementById("InpFeed5").value = InpFeed5;
  },
  
  handleFeed20: function() {
		var InpFeed20;
		InpFeed20 = parseInt(document.getElementById("InpFeed20").value);
    AppAction.InpFeed20(InpFeed20);
    if ( isNaN(InpFeed20) == true ){
    	InpFeed20 = 0;
    }
    document.getElementById("InpFeed20").value = InpFeed20;
  },
  
  handleFeed100: function() {
		var InpFeed100;
		InpFeed100 = parseInt(document.getElementById("InpFeed100").value);
    AppAction.InpFeed100(InpFeed100);
    if ( isNaN(InpFeed100) == true ){
    	InpFeed100 = 0;
    }
    document.getElementById("InpFeed100").value = InpFeed100;
  },

  handleFeed5x: function() {
		var InpFeed5x;
		InpFeed5x = parseInt(document.getElementById("InpFeed5x").value);
    AppAction.InpFeed5x(InpFeed5x);
    if ( isNaN(InpFeed5x) == true ){
    	InpFeed5x = 0;
    }
    document.getElementById("InpFeed5x").value = InpFeed5x;
  },
  
  handleFeed20x: function() {
		var InpFeed20x;
		InpFeed20x = parseInt(document.getElementById("InpFeed20x").value);
    AppAction.InpFeed20x(InpFeed20x);
    if ( isNaN(InpFeed20x) == true ){
    	InpFeed20x = 0;
    }
    document.getElementById("InpFeed20").value = InpFeed20x;
  },
  
  handleFeed100x: function() {
		var InpFeed100x;
		InpFeed100x = parseInt(document.getElementById("InpFeed100x").value);
    AppAction.InpFeed100x(InpFeed100x);
    if ( isNaN(InpFeed100x) == true ){
    	InpFeed100x = 0;
    }
    document.getElementById("InpFeed100").value = InpFeed100x;
  },

	render: function(){				
		return(
		<div>
			<p>
				<form action="#">
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpLevel" onInput={this.handleLevel} defaultValue="1" />
			    	<label className="mdl-textfield__label" htmlFor="InpLevel">現在Lv:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>		
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpExp" onInput={this.handleExp} defaultValue="33" />
			    	<label className="mdl-textfield__label" htmlFor="InpExp">次のLvまでの経験値:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
				</form>
      </p>
      <h5>合成素材</h5>
      <p>
				<form action="#">
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed5" onInput={this.handleFeed5} defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed5">同属性 5才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed20" onInput={this.handleFeed20} defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed20">20才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed100" onInput={this.handleFeed100} defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed100">100才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  </form>
       </p>
       <p>
        <form action="#">
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed5x" onInput={this.handleFeed5x} defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed5x">別属性 5才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed20x" onInput={this.handleFeed20x} defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed20x">20才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed100x" onInput={this.handleFeed100x} defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed100x">100才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  </form>
      </p>
		</div>
		);
	}
});

module.exports = ConInpText;