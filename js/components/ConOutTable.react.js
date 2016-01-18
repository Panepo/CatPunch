var React = require("react");
var ReactPropTypes = React.PropTypes;

var ConOutTable = React.createClass({
	displayName: "ConOutTable",
	
	propTypes: {
    FeedTable: ReactPropTypes.array.isRequired,
  },
	
	render: function(){
		
		var TableData = [];
		var TableCont;
		var TableHead = (
 				<thead>
					<tr>
					<th>100才</th>
					<th>20才</th>
					<th>5才</th>
					<th>總數</th>
					<th>溢出経験値</th>
					</tr>
				</thead>
    );
    
		for ( var i = 0; i < this.props.FeedTable.length; i++) {
			TableCont = (
					<tr key={i}>
					<td>{this.props.FeedTable[i][0]}</td>
					<td>{this.props.FeedTable[i][1]}</td>
					<td>{this.props.FeedTable[i][2]}</td>
					<td>{this.props.FeedTable[i][3]}</td>
					<td>{this.props.FeedTable[i][4]}</td>
					</tr>
			);
			TableData.push(TableCont);
		}
		
		return( 
			<div>
				<table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
					{TableHead}
				<tbody>
					{TableData}
				</tbody>
				</table>
			</div>
		);
	}
});

module.exports = ConOutTable;