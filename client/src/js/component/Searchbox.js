var React= require('react');

var Searchbox=React.createClass({

getInitialState: function(){
  return({data: ""})
},

handleChange: function(event){
  return(
    this.setState({data:event.target.value})
  )
},

sendToParent: function(e){
  e.preventDefault();
    this.props.click(this.state.data)
},

render: function(){
  return (
    <div className="jumbotron">
    <h2 id='heading'>Movies Magic</h2>
     <div className="inner-addon left-addon">
     <i className="glyphicon glyphicon-search">
     </i>
     <img src ="../../css/logo.jpg" width="20%" height="200px"/>
     <input type="text" className="form-control" placeholder='Search Movies here..' id='searchtext' value={this.state.data}  onChange={this.handleChange}/>
     <a className="btn btn-primary btn-medium" href="#" id='searchbutton' onClick={this.sendToParent}>
      <b> Search..   </b>
     </a>
    </div>
    </div>
  )
}
})

module.exports=Searchbox;
