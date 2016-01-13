var React = require("react");

var Header = React.createClass({
	displayName: "Header",
		
	render: function(){
		return(
		<div>
      <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title"></span>
          <div className="mdl-layout-spacer"></div>
        </div>
      </header>
      <div className="demo-ribbon"></div>
		</div>
		);
	}
});

module.exports = Header;