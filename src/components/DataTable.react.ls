require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
}

{div, table, thead, tbody, th, tr, td, label, input, span, p} = React.DOM

ReactDataTable = React.createClass do
	displayName: "ReactDataTable"
	
	propTypes:
		tableClass: ReactPropTypes.string.isRequired
		tableHead: ReactPropTypes.array.isRequired
		tableData: ReactPropTypes.array.isRequired
		tableId: ReactPropTypes.string.isRequired
	
	getInitialState: ->
		{
			sortKey: 0
			sortDir: 0
		}
	
	componentDidUpdate: !->
		componentHandler.upgradeDom()
	
	handleSort: (sortKey) !->
		if @state.sortKey is sortKey
			if @state.sortDir is 0
				@setState {
					sortDir: 1
				}
			else
				@setState {
					sortDir: 0
				}
		else
			@setState {
				sortKey: sortKey
				sortDir: 0
			}
		
		@state.sortKey = sortKey
		
		if @state.sortDir is 0
			if typeof @props.tableData[0][sortKey] is 'string' or @props.tableData[0][sortKey] instanceof String
				@props.tableData.sort (a, b) ->
					b[sortKey].charCodeAt(0) - a[sortKey].charCodeAt(0)
			else
				@props.tableData.sort (a, b) ->
					b[sortKey] - a[sortKey]
		else
			if typeof @props.tableData[0][sortKey] is 'string' or @props.tableData[0][sortKey] instanceof String
				@props.tableData.sort (a, b) ->
					a[sortKey].charCodeAt(0) - b[sortKey].charCodeAt(0)
			else
				@props.tableData.sort (a, b) ->
					a[sortKey] - b[sortKey]
	
	handleChange: (event) !->
		trId = event.target.id + "tr"
		if event.target.checked
			document.getElementById(trId).style.backgroundColor = '#f5f5f5'
		else
			document.getElementById(trId).style.backgroundColor = "transparent"
	
	
	render: ->
		div null,
			table className: @props.tableClass,
				thead null,
					tr null,
						for thead-value, i in @props.tableHead
							th key: @props.tableId + " th" + i.toString! , onClick: @handleSort.bind(null, i), thead-value
				tbody null,
					for tab-value, i in @props.tableData
						if i < 11
							tr key: @props.tableId+" tr"+i.toString!, id: @props.id+"check"+i.toString!+"tr",
							for j from 0 to tab-value.length
								td key: @props.tableId + " td"  + i.toString! + j.toString!,
								if j is 0
									label className: "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select", htmlFor: @props.id+"check"+i.toString!,
										input type: "checkbox" id:@props.id+"check"+i.toString!, className: "mdl-checkbox__input", onChange: @handleChange, null
								else
									tab-value[j-1]

module.exports = ReactDataTable