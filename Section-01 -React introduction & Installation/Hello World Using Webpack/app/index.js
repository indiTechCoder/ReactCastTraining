var React = require('react')
var ReactDOM = require('react-dom')

// npm module locally installed
var HelloWorld = React.createClass({	
  render: function(){
    return (
      <div>
      <h1>Hello I am Tarun</h1>
        Hello World! I am React Developer
      </div>
      //jsx code 
    )
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

