var React = require("react");

var Footer = React.createClass({
	displayName: "Footer",
		
	render: function(){
		return(
		<div>
      <footer className="demo-footer mdl-mini-footer">
        <div className="mdl-mini-footer--left-section">
          <div><small> 『<a href="http://www.dmm.com/netgame_s/flower/">フラワーナイトガール</a>』(C) DMMゲームズ</small></div>
					<div><small>「フラワーナイトガール」から転載された全てのコンテンツの著作権につきましては、権利者様へ帰属します。</small></div>
					<div><small> Copyright &copy; Panepo@Github 2015 All Rights Reserved.</small></div>
        </div>
      </footer>
		</div>
		);
	}
});

module.exports = Footer;