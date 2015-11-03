var React = require("react");
var ReactPropTypes = React.PropTypes;
var AppAction = require("../actions/AppAction");

var ConInpText = React.createClass({
	
	getInitialState: function() {
    return {
    	InpLevel: this.props.CalData.InpLevel,
      InpExp: this.props.CalData.InpExp,
      InpFeed5: this.props.CalData.InpFeed5,
      InpFeed20: this.props.CalData.InpFeed20,
      InpFeed100: this.props.CalData.InpFeed100,
      InpFeed5x: this.props.CalData.InpFeed5x,
      InpFeed20x: this.props.CalData.InpFeed20x,
      InpFeed100x: this.props.CalData.InpFeed100x
    };
  },
  
  _onChange: function(/*object*/ event) {
		var InpLevel = document.getElementById("InpLevel").value
		
    this.setState({
      InpLevel: InpLevel
    });
    
    AppAction.LevelInput(this.state.InpLevel);
  },
	
	render: function(){				
		return(
		<div>
			<p>
				<form action="#">
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpLevel" onInput={this._onChange} defaultValue="1" />
			    	<label className="mdl-textfield__label" htmlFor="InpLevel">現在Lv:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>		
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpExp" onChange={this._onChange} defaultValue="33" />
			    	<label className="mdl-textfield__label" htmlFor="InpExp">次のLvまでの経験値:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
				</form>
      </p>
      <h5>合成素材</h5>
      <p>
				<form action="#">
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed5" oninput="ExpCal()" defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed5">同属性 5才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed20" oninput="ExpCal()" defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed20">20才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed100" oninput="ExpCal()" defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed100">100才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  </form>
       </p>
       <p>
        <form action="#">
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed5x" oninput="ExpCal()" defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed5x">別属性 5才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed20x" oninput="ExpCal()" defaultValue="0" />
			    	<label className="mdl-textfield__label" htmlFor="InpFeed20x">20才:</label>
			    	<span className="mdl-textfield__error">数値が正しくありません</span>
			  	</div>
			  	<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			    	<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="InpFeed100x" oninput="ExpCal()" defaultValue="0" />
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