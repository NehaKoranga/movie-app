var React=require('react')

var Gc=React.createClass({

render: function(){
  return (
    <div id='GrandChild'>

      <div className="row">
    		<div className="col-sm-4 pull-left">
        <img src={this.props.Poster} id="movieimg"/>
    		</div>
    		<div className="col-sm-8 pull-right">
                      <h3>{this.props.Title}
                         {this.props.Year}
                         {this.props.Type}</h3>
          </div>
        </div>
      </div>
)
}
});
module.exports=Gc;
