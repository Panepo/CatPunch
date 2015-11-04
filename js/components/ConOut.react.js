var React = require("react");

var ConOut = React.createClass({
	
	render: function(){
		
		var CalData = this.props.CalData;
		var Output;
		var DisplayEnable = CalData.DisplayEnable;
		
		if ( DisplayEnable === false )
		{
			return null;
		}
		else
		{
			var DisControl = CalData.FeedTable[0][0];
			
			if ( typeof DisControl === 'string' || DisControl instanceof String )
			{
				Output = DisControl;
				return( 
					<div>
						{Output}
					</div>
				);
			}
			else
			{		
				return(
					<div>
						<p>最大Lvまでの経験値：{CalData.FeedTable[0][0]}</p>
						<p>最大Lvまでにあと必要な同属性素材の目安</p>
						<table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
						  <thead>
						    <tr>
						      <th className='table-content'>
						  				100才
						      </th>
						      <th className='table-content'>
						  				20才
						      </th>
						      <th className='table-content'>
						  				5才
						      </th>
						      <th className='table-content'>
						  				總數
						      </th>
						      <th className='table-content'>
						  				溢出経験値
						      </th>
						    </tr>
						  </thead>
						  <tbody>
						  	
						  </tbody>
						</table>
					</div>
				);
		
			}
		}
	}
});

module.exports = ConOut;