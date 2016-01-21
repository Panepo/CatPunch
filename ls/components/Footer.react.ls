require! {
	"react": React
}

{div, table, thead, tbody, th, tr, td, label, input, span, a} = React.DOM

Footer = React.createClass do
	displayName: "Footer"

	render: ->
		div className: "demo-footer mdl-mini-footer",
			div className: "mdl-mini-footer--left-section",
				div null,
					"『"
					a href: "http://www.dmm.com/netgame_s/flower/", "フラワーナイトガール"
					"』(C) DMMゲームズ"
				div null,
					"「フラワーナイトガール」から転載された全てのコンテンツの著作権につきましては、権利者様へ帰属します。"
				div null,
					"Copyright (C) Panepo@Github 2015 All Rights Reserved."

module.exports = Footer;