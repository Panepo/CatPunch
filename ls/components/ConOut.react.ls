require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"./DataTable.react.ls": DataTable
}

{div, table, thead, tbody, th, tr, td, label, input, span, p} = React.DOM

tableClass = "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"
tableHead = ["100才" "20才" "5才" "總數" "溢出経験値"]
tableOutput = React.createFactory DataTable

ConOut = React.createClass do
	displayName: "ConOut"
	
	propTypes: 
		outString: ReactPropTypes.string.isRequired
		expLeft: ReactPropTypes.number.isRequired
		FeedTable: ReactPropTypes.array.isRequired
		DisplayEnable: ReactPropTypes.bool.isRequired

	componentDidUpdate: ->
		componentHandler.upgradeDom()

	render: ->
		div null,
		if @props.DisplayEnable is true
			if @props.outString.length >= 1
				div null, @props.outString
			else
				div null,
					p null, "最大Lvまでの経験値：" @props.expLeft
					p null, "最大Lvまでにあと必要な同属性素材の目安"
					tableOutput {
						tableClass: tableClass
						tableHead: tableHead
						tableData: @props.FeedTable
						tableId: "FeedTable"
					}

module.exports = ConOut