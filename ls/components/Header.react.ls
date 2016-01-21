require! {
	"react": React
}

{div, table, thead, tbody, th, tr, td, label, input, span} = React.DOM

Header = React.createClass do
	displayName: "Header"

	render: ->
		div null,
			div className: "demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800",
				div className: "mdl-layout__header-row",
					span className: "mdl-layout-title",
					div className: "mdl-layout-spacer",
				div className: "demo-ribbon",

module.exports = Header;