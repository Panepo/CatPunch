var React = require("react");
var AppAction = require("../actions/AppAction");

var Footer = React.createClass({
		
	render: function(){
		return(
		<div>
      <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Flower Knight Girl Exp Calculator</span>
          <div className="mdl-layout-spacer"></div>
        </div>
      </header>
      <div class="demo-ribbon"></div>
		</div>
		);
	}
});

module.exports = Footer;