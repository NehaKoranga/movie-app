var React= require('react');
var ReactDOM=require('react-dom');
var Searchbox=require('./component/Searchbox')
var Movielist=require('./component/Movielist')



var MainComponent=React.createClass({

getInitialState: function(){
  return({text: "hello", movieArr:[], url: "http://omdbapi.com/?s="})

},

handleClick:function(data){
  $.ajax({
       url: this.state.url+data,
       dataType: 'json',
       cache: false,
       success: function(data) {
         console.log(data.Search);
         this.setState({movieArr:data.Search});
         console.log(this.state.movieArr);
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(this.state.url, status, err.toString());
       }.bind(this)
     });
},

render: function() {
  return (
    <div>
    <Searchbox click={this.handleClick}/>
    <Movielist sdata={this.state.text}   movieArr={this.state.movieArr}/>
    </div>
  )
}

})


ReactDOM.render(<MainComponent/>,document.getElementById('app'));
