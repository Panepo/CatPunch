var React = require("react");
var Griddle = require('griddle-react');

var ConOut = React.createClass({
	
	render: function(){
		
		var CalData = this.props.CalData;
		var DisplayEnable = CalData.DisplayEnable;
		
		if ( DisplayEnable === false )
		{
			return null;
		}
		else
		{
			if ( typeof CalData.FeedTable[0][0] === 'string' || CalData.FeedTable[0][0] instanceof String )
			{
				return( 
					<div>
						{CalData.FeedTable[0][0]}
					</div>
				);
			}
			else
			{
				var TableData = [];
				var TableCont = {};
				var i;
				for ( i = 1; i < CalData.FeedTable.length; i++)
				{
					TableCont = {
						"100才": CalData.FeedTable[i][0],
						"20才": CalData.FeedTable[i][1],
						"5才": CalData.FeedTable[i][2],
						"總數": CalData.FeedTable[i][3],
						"溢出経験値": CalData.FeedTable[i][4],
						}
					TableData.push(TableCont);
				}
								
				return(
					<div>
						<p>最大Lvまでの経験値：{CalData.FeedTable[0][0]}</p>
						<p>最大Lvまでにあと必要な同属性素材の目安</p>
						<Griddle results={TableData}
							resultsPerPage={9}
							showPager={false}
							useGriddleStyles={false}
							tableClassName={"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"}
							/>
					</div>
				);
		
			}
		}
	}
});

module.exports = ConOut;