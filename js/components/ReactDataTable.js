var React = require("react");
var ReactPropTypes = React.PropTypes;

var ReactDataTable = React.createClass({
	displayName: "ReactDataTable",
	
	propTypes: {
		tableClass: ReactPropTypes.string.isRequired,
		tableHead: ReactPropTypes.array.isRequired,
		tableData: ReactPropTypes.array.isRequired,
		tableId: ReactPropTypes.string.isRequired,
  },
	
	getInitialState: function(){
		return{
			sortKey: 0,
			sortDir: 0
		};
	},
	
	handleSort: function(sortKey){	
		if ( this.state.sortKey === sortKey ) {
			if ( this.state.sortDir === 0 ) {
				this.setState({
					sortDir: 1
				});
			} else {
				this.setState({
					sortDir: 0
				});
			}
		} else {
			this.setState({
				sortKey: sortKey,
				sortDir: 0
			});
		}
	},
	
	render: function(){
		// ===============================================================================
		// Table Sorting
		// ===============================================================================
		var sortKey = this.state.sortKey;
		
		if ( this.state.sortDir == 0) {
			if ( typeof this.props.tableData[0][sortKey] === 'string' || this.props.tableData[0][sortKey] instanceof String) {
				this.props.tableData.sort(function(a, b) {
					return b[sortKey].charCodeAt(0) - a[sortKey].charCodeAt(0);
				});
			} else {
				this.props.tableData.sort(function(a, b) {
					return b[sortKey] - a[sortKey];
				});
			}
		} else {
			if ( typeof this.props.tableData[0][sortKey] === 'string' || this.props.tableData[0][sortKey] instanceof String) {
				this.props.tableData.sort(function(a, b) {
					return a[sortKey].charCodeAt(0) - b[sortKey].charCodeAt(0);
				});
			} else {
				this.props.tableData.sort(function(a, b) {
					return a[sortKey] - b[sortKey];
				});
			}
		}

		// ===============================================================================
		// Generate Table Head
		// ===============================================================================
		var idStringTemp = "";
		var tableHeadOut = [];
		var tableHeadTemp;
		
		for ( var i = 0; i < this.props.tableHead.length; i++) {
			idStringTemp = this.props.tableId + "th" + i.toString();
			tableHeadTemp = <th key={idStringTemp} onclick={this.handleSort.bind(null, i)}>{this.props.tableHead[i]}</th>;
			tableHeadOut.push(tableHeadTemp);
		}
		tableHeadOut = <thead><tr>{tableHeadOut}</tr></thead>;

		// ===============================================================================
		// Generate Table Content
		// ===============================================================================
		var tableDataOut = [];
		var tableDataTemp;
		var tableContOut = [];
		var tableContTemp;
		
		for ( var i = 0; i < this.props.tableData.length; i++) {
			tableContOut = [];
			for ( var j = 0; j < this.props.tableData[i].length; j++) {
				idStringTemp = this.props.tableId + "td" + i.toString() + j.toString();
				tableContTemp = <td key={idStringTemp}>{this.props.tableData[i][j]}</td>;
				tableContOut.push(tableContTemp);
			}
			idStringTemp = this.props.tableId + "tr" + i.toString();
			tableDataTemp = <tr key={idStringTemp}>{tableContOut}</tr>;
			tableDataOut.push(tableDataTemp);
		}
		tableDataOut = <tbody>{tableDataOut}</tbody>;

		// ===============================================================================
		// Data Output
		// ===============================================================================		
		return( 
			<div>
				<table className={this.props.tableClass}>
					{tableHeadOut}
					{tableDataOut}
				</table>
			</div>
		);
	}
});

module.exports = ReactDataTable;