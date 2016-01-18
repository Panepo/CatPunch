var React = require("react");
var ReactPropTypes = React.PropTypes;
var ConOutTable = require("./ConOutTable.react");

var ConOut = React.createClass({
	displayName: "ConOut",
	
	propTypes: {
		outString: ReactPropTypes.string.isRequired,
		expLeft: ReactPropTypes.number.isRequired,
    FeedTable: ReactPropTypes.array.isRequired,
		DisplayEnable: ReactPropTypes.bool.isRequired
  },
	
	render: function(){
		if ( this.props.DisplayEnable === false ) {
			return null;
		} else {
			if ( this.props.outString.length >= 1 ) {
				return( 
					<div>
						{this.props.outString}
					</div>
				);
			} else {								
				return(
					<div>
						<p>最大Lvまでの経験値：{this.props.expLeft}</p>
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