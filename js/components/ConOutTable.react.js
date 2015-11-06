var React = require("react");

var ConOutTable = React.createClass({
	
	render: function(){
		
		var CalData = this.props.CalData;
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
    
    var i;
		for ( i = 1; i < CalData.FeedTable.length; i++)
		{
			TableCont = (
					<tr>
					<td>{CalData.FeedTable[i][0]}</td>
					<td>{CalData.FeedTable[i][1]}</td>
					<td>{CalData.FeedTable[i][2]}</td>
					<td>{CalData.FeedTable[i][3]}</td>
					<td>{CalData.FeedTable[i][4]}</td>
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