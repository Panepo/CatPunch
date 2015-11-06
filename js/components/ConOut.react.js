var React = require("react");
var ConOutTable = require("./ConOutTable.react");

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
				return(
					<div>
						<p>最大Lvまでの経験値：{CalData.FeedTable[0][0]}</p>
						<p>最大Lvまでにあと必要な同属性素材の目安</p>
						<ConOutTable CalData={this.props.CalData}/>
					</div>
				);
			}
		}
	},
	
	componentDidUpdate: function() {
    // This upgrades all upgradable components (i.e. with 'mdl-js-*' class)
    componentHandler.upgradeDom();

    // We could have done this manually for each component
    /*
     * var submitButton = this.refs.submit.getDOMNode();
     * componentHandler.upgradeElement(submitButton, "MaterialButton");
     * componentHandler.upgradeElement(submitButton, "MaterialRipple");
     */
  }
	
});

module.exports = ConOut;