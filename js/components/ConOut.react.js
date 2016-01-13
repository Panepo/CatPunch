var React = require("react");
var ReactPropTypes = React.PropTypes;
var ConOutTable = require("./ConOutTable.react");

var ConOut = React.createClass({
	displayName: "ConInpRad",
	
	propTypes: {
    FeedTable: ReactPropTypes.array.isRequired,
		DisplayEnable: ReactPropTypes.bool.isRequired
  },
	
	render: function(){
				
		if ( this.props.DisplayEnable === false ) {
			return null;
		} else {
			if ( typeof this.props.FeedTable[0][0] === 'string' || this.props.FeedTable[0][0] instanceof String ) {
				return( 
					<div>
						{this.props.FeedTable[0][0]}
					</div>
				);
			} else {								
				return(
					<div>
						<p>最大Lvまでの経験値：{this.props.FeedTable[0][0]}</p>
						<p>最大Lvまでにあと必要な同属性素材の目安</p>
						<ConOutTable FeedTable={this.props.FeedTable}/>
					</div>
				);
			}
		}
	},
	
	componentDidUpdate: function() {
    componentHandler.upgradeDom();
  }
});

module.exports = ConOut;