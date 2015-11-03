var React = require("react");

var ConOut = React.createClass({
	
	render: function(){
		
		var CalData = this.props.CalData;
		
		return(
			<div>
				<div>InpLevel:{this.props.CalData.InpLevel}</div>
				<div>InpExp:{this.props.CalData.InpExp}</div>
				<div>InpRarity:{this.props.CalData.InpRarity}</div>
				<div>InpPrompt:{this.props.CalData.InpPrompt}</div>
				<div>InpFeed5:{this.props.CalData.InpFeed5}</div>
				<div>InpFeed20:{this.props.CalData.InpFeed20}</div>
				<div>InpFeed100:{this.props.CalData.InpFeed100}</div>
				<div>InpFeed5x:{this.props.CalData.InpFeed5x}</div>
				<div>InpFeed20x:{this.props.CalData.InpFeed20x}</div>
				<div>InpFeed100x:{this.props.CalData.InpFeed100x}</div>
			</div>
		);
	}
});

module.exports = ConOut;