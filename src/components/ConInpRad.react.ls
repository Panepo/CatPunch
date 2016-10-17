require! {
	"react": React
	"react": { PropTypes: types }
	"../actions/AppAction.ls": AppAction
}

{div, table, thead, tbody, th, tr, td, label, input, span, h4, h5, button} = React.DOM

buttonClassActive = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary"
buttonClassInactive = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"
rarityList = ["★★", "★★★", "★★★★", "★★★★★", "★★★★★★"]
promptList = ["未進化", "進化済", "開花済"]

ConInpRad = React.createClass do
	displayName: "ConInpRad"
	
	propTypes:
		InpPrompt: types.number.isRequired
		InpRarity: types.number.isRequired
		
	handleRarity: (rarity) !->
		AppAction.InpRarity(rarity)

	handlePrompt: (prompt) !->
		AppAction.InpPrompt(prompt)

	render: ->
		div className: "ConInpRad",
			h4 null, "フラワーナイトガール経験値計算機 貓パンチ"
			h5 null, "對象騎士"
			div null,
				"レアリティ："
				for rar-value, i in rarityList
					if @props.InpRarity is (i+2)
						button key: "rarity" + i.toString(), className: buttonClassActive, onClick: @handleRarity.bind(null, i+2), rar-value
					else
						button key: "rarity" + i.toString(), className: buttonClassInactive, onClick: @handleRarity.bind(null, i+2), rar-value
			div null,
				"進化："
				for pro-value, i in promptList
					if i is 2
						if @props.InpRarity >= 5
							if @props.InpPrompt is i
								button key: "prompt" + i.toString(), className: buttonClassActive, onClick: @handlePrompt.bind(null, i), pro-value
							else
								button key: "prompt" + i.toString(), className: buttonClassInactive, onClick: @handlePrompt.bind(null, i), pro-value
					else
						if @props.InpPrompt is i
							button key: "prompt" + i.toString(), className: buttonClassActive, onClick: @handlePrompt.bind(null, i), pro-value
						else
							button key: "prompt" + i.toString(), className: buttonClassInactive, onClick: @handlePrompt.bind(null, i), pro-value

module.exports = ConInpRad