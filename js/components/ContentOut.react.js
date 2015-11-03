var React = require("react");

var Content = React.createClass({
	
	render: function(){
		
		var CalData = this.props.CalData;
		
		return(
			<div>
				<div>{CalData["InpLevel"]}</div>
				<div>{CalData.InpExp}</div>
				<div>{CalData.InpRar}</div>
				<div>{CalData.InpPro}</div>
			</div>
		);
	}
});

module.exports = Content;