var React = require("react");
var ReactPropTypes = React.PropTypes;
var ReactDataTable = require("./ReactDataTable");

var ConOut = React.createClass({
	displayName: "ConOut",
	
	propTypes: {
		outString: ReactPropTypes.string.isRequired,
		expLeft: ReactPropTypes.number.isRequired,
    FeedTable: ReactPropTypes.array.isRequired,
		DisplayEnable: ReactPropTypes.bool.isRequired
  },
	
	render: function(){
		var tableClass = "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp";
		var tableHead = ["100才", "20才", "5才", "總數", "溢出経験値"];
		
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
						<ReactDataTable tableClass={tableClass}
														tableHead={tableHead}
														tableData={this.props.FeedTable}
														tableId="FeedTable"
														/>
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