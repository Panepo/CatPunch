require! {
	"react": React
	"./Header.react.ls": Header
	"./Footer.react.ls": Footer
	"./ConInpRad.react.ls": ConInpRad
	"./ConInpText.react.ls": ConInpText
	"./ConOut.react.ls": ConOut
	"../stores/AppStore": AppStore
}

{div, table, thead, tbody, th, tr, td, label, input, main } = React.DOM

Header = React.createFactory Header
Footer = React.createFactory Footer
Con1 = React.createFactory ConInpRad
Con2 = React.createFactory ConInpText
Con3 = React.createFactory ConOut

FKGCalApp = React.createClass do
	displayName: "FKGCalApp"

	getInitialState: ->
		{
			CalData: AppStore.getValue()
		}
	
	componentDidMount: ->
		AppStore.addChangeListener(@_onChange)

	componentWillUnmount: ->
		AppStore.removeChangeListener(@_onChange)
		
	_onChange: ->
		@setState {
			CalData: AppStore.getValue()
		}

	render: ->
		div null,
			div className: "demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100",
				Header null
				div className: "demo-main mdl-layout__content",
					div className: "demo-container mdl-grid",
						div className: "mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone", null
						div className: "demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col",
							Con1 InpRarity: @state.CalData.InpRarity, InpPrompt: @state.CalData.InpPrompt, null
							Con2 InpLevel: @state.CalData.InpLevel, InpExp: @state.CalData.InpExp, InpFeed5: @state.CalData.InpFeed5, InpFeed20: @state.CalData.InpFeed20, InpFeed100: @state.CalData.InpFeed100, InpFeed5x: @state.CalData.InpFeed5x, InpFeed20x: @state.CalData.InpFeed20x, InpFeed100x: @state.CalData.InpFeed100x, null
							Con3 outString: @state.CalData.outString, expLeft: @state.CalData.expLeft, FeedTable: @state.CalData.FeedTable, DisplayEnable: @state.CalData.DisplayEnable, null
				Footer null

module.exports = FKGCalApp