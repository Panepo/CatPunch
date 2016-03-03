require! {
	"react": React
	"react": { PropTypes: types }
	"../actions/AppAction.ls": AppAction
}

{div, table, thead, tbody, th, tr, td, label, input, span, h5} = React.DOM

textAList = ["現在Lv:" "次のLvまでの経験値:"]
textAId = ["InpLevel" "InpExp"]
textBList = ["同属性 5才:" "20才:" "100才:"]
textBId = ["InpFeed5" "InpFeed20" "InpFeed100"]
textCList = ["別属性 5才:" "20才:" "100才:"]
textCId = ["InpFeed5x" "InpFeed20x" "InpFeed100x"]

ConInpText = React.createClass do
	displayName: "ConInpText"
	
	propTypes:
		InpLevel: types.number.isRequired
		InpExp: types.number.isRequired
		InpFeed5: types.number.isRequired
		InpFeed20: types.number.isRequired
		InpFeed100: types.number.isRequired
		InpFeed5x: types.number.isRequired
		InpFeed20x: types.number.isRequired
		InpFeed100x: types.number.isRequired
	
	handleInput: (event) !->
		type = event.target.id
		input = parseInt(event.target.value)
		
		if isNaN(input) is true
			input = 0
			document.getElementById(event.target.id).value = 0
			AppAction.inputChange(type, input)
		else
			AppAction.inputChange(type, input)
	
	render: ->
		div className: "ConInpText",
			div null,
				for text-value, i in textAList
					div className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label" key: textAId[i],
						input className: "mdl-textfield__input", type: "text", pattern: "-?[0-9]*(\.[0-9]+)?", id: textAId[i], onInput: @handleInput, defaultValue: @props[textAId[i]], null
						label className: "mdl-textfield__label", htmlFor: textAId[i], text-value
						span className: "mdl-textfield__error", "数値が正しくありません"
			h5 null, "合成素材"
			div null,
				for text-value, i in textBList
					div className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label" key: textBId[i],
						input className: "mdl-textfield__input", type: "text", pattern: "-?[0-9]*(\.[0-9]+)?", id: textBId[i], onInput: @handleInput, defaultValue: @props[textBId[i]], null
						label className: "mdl-textfield__label", htmlFor: textBId[i], text-value
						span className: "mdl-textfield__error", "数値が正しくありません"
			div null,
				for text-value, i in textCList
					div className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label" key: textCId[i],
						input className: "mdl-textfield__input", type: "text", pattern: "-?[0-9]*(\.[0-9]+)?", id: textCId[i], onInput: @handleInput, defaultValue: @props[textCId[i]], null
						label className: "mdl-textfield__label", htmlFor: textCId[i], text-value
						span className: "mdl-textfield__error", "数値が正しくありません"
	
module.exports = ConInpText