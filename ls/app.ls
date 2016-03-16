require! {
	"react-dom": ReactDOM
	"react": React
	"./components/FKGCalApp.react.ls": FKGCalApp
}
Header = React.createFactory FKGCalApp
ReactDOM.render (React.createElement FKGCalApp, null), document.getElementById "FKGCalApp"
