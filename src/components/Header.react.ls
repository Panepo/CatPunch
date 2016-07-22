require! {
	"react": React
}

{header, div, a, nav, span} = React.DOM

Header = React.createClass do
	displayName: "Header"

	render: ->
		header className: "demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800",
			div className: "mdl-layout__header-row",
				span className: "mdl-layout-title", " "
				div className: "mdl-layout-spacer", null
				nav className: "mdl-navigation",
					a className: "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary", href: "http://www.dmm.com/netgame_s/flower/", "フラワーナイトガール"
					a className: "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary", href: "http://フラワーナイトガール.攻略wiki.com/index.php", "wiki"

module.exports = Header;